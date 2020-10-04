import React, { Component } from "react";
import "./App.css";
import BioData from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import AddTodo from "./components/AddTodo";
import AddUser from "./components/AddUser";
import { v4 as uuid } from "uuid";

class App extends Component {
  state = {
    todos: [],
    userName: localStorage.getItem("userName"),
  };

  handleSubmit = (todoDesc) => {
    const newTodo = {
      id: uuid(),
      desc: todoDesc,
      completed: false,
    };

    const todos = [...this.state.todos, newTodo];

    this.setState({
      todos: todos,
    });
    alert("ToDo with the desc " + todoDesc + " added");
  };

  handleFinish = (todoItem) => {
    const index = this.state.todos.indexOf(todoItem);
    console.log(index);
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos: todos,
    });
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

    return (
      <div>
        <BioData
          totalTodos={this.state.todos.length}
          userName={this.state.userName}
        />
        <AddTodo onSubmit={this.handleSubmit} />
        {this.returnWrapper()}
      </div>
    );
  }
}

export default App;
