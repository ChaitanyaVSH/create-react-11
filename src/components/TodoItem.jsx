import React, { Component } from "react";

class TodoItem extends Component {
  state = {};

  getStyles() {
    return {
      margin: 10,
      padding: 15,
      borderLeft:
        this.props.todo.completed === true
          ? "5px solid lightblue"
          : "5px solid lightgreen",
      textDecoration:
        this.props.todo.completed === true ? "line-through" : "none",
    };
  }

  getClassName(){
    let className = "btn btn-";
    className = className + (this.props.todo.completed?"secondary":"warning")
    
    return className;
  }

  onFinish = (event) => {
    event.preventDefault();
    this.props.finished(event,this.props.todo);
  };

  render() {
    // const styles = {
    //   This const will not create any TS issues.
    // }
    const { desc, completed } = this.props.todo;

    return (
      <div style={this.getStyles()}>
        <span>{desc}</span>
        <span>
          <button
            className={this.getClassName()}
            style={{ float: "right" }}
            onClick={this.onFinish}
            
          >
            {completed ? "Delete" : "Finish"}
          </button>
        </span>
      </div>
    );
  }
}

export default TodoItem;
