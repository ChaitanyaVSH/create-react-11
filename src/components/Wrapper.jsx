import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "../components/wrapperStyles.css";

class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        {this.props.todos.map((todoItem) => (
          <TodoItem
            todo={todoItem}
            key={todoItem.id}
            finished={this.props.onFinish}
          />
        ))}
      </div>
    );
  }
}

export default Wrapper;
