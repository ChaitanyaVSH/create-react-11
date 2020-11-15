import React, { Component } from "react";
import "./App.css";
import BioData from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import AddTodo from "./components/AddTodo";
import AddUser from "./components/AddUser";
import { v4 as uuid } from "uuid";
import AWS from "aws-sdk";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      userName: localStorage.getItem("userName"),
    };

    AWS.config.update({region: 'us-west-2'});
  }
  
;

  handleSubmit = (todoDesc) => {
    const newTodo = {
      id: uuid(),
      desc: todoDesc,
      completed: false,
    };

    const todos = [...this.state.todos, newTodo];
    localStorage.setItem("todos", JSON.stringify(todos));

    this.setState({
      todos: todos,
    });
    alert("ToDo with the description " + todoDesc + " added");
  };

  handleFinish = (event,todoItem) => {
      const index = this.state.todos.indexOf(todoItem);
      let todos = [...this.state.todos];

    if(event.target.className === "btn btn-secondary"){
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      this.setState({
       todos: todos,
      });
    }
    else{
      todos[index].completed = true;
      localStorage.setItem("todos", JSON.stringify(todos));
      this.setState({
       todos: todos,
      });
    }
  };

  handleLogin = (userName) => {
    localStorage.setItem("userName", userName);
    localStorage.setItem("loggedIn", "yes");
    const todos = [...this.state.todos];
    this.setState({
      todos: todos,
      userName: userName,
    });
  };

  handleS3Publish = ()=>{

    let s3 = new AWS.S3({apiVersion: '2006-03-01'});

    // Call S3 to list the buckets
    s3.listBuckets(function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.Buckets);
      }
    });
    
  }

  returnWrapper() {
    if (this.state.todos.length === 0)
      return (
        <h4 style={{ textAlign: "center" }}>
          Please add a new item to the checklist
        </h4>
      );
    return <Wrapper todos={this.state.todos} onFinish={this.handleFinish} />;
  }

  render() {
    const alreadyAnUser = localStorage.getItem("loggedIn");

    if (alreadyAnUser === null) {
      return (
        <div>
          <BioData />
          <AddUser onLogin={this.handleLogin} />
        </div>
      );
    }
    const totalTodos = this.state.todos.length
    const finishedTodos = this.state.todos.filter((todo)=>todo.completed === true).length

    return (
      <div>
        <BioData
          totalTodos={totalTodos}
          finishedTodos={finishedTodos}
          userName={this.state.userName}
        />
        <AddTodo onSubmit={this.handleSubmit} onSave={this.handleS3Publish}/>
        {this.returnWrapper()}
      </div>
    );
  }
}

export default App;
