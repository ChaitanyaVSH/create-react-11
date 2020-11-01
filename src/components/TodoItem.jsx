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

  onFinish = (e) => {
    e.preventDefault();
    this.props.finished(this.props.todo);
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
            className="btn btn-warning"
            style={{ float: "right" }}
            onClick={this.onFinish}
            disabled={completed}
          >
            {this.props.todo.completed ? "Finished" : "Finish"}
          </button>
        </span>
      </div>
    );
  }
}

export default TodoItem;
