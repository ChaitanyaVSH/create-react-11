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
    };
  }

  onFinish = (e) => {
    e.preventDefault();
    alert("Todo finished");
    this.props.finished(this.props.todo);
  };

  render() {
    // const styles = {
    //   This const will not create any TS issues.
    // }

    return (
      <div style={this.getStyles()}>
        <span>{this.props.todo.desc}</span>
        <span>
          <button
            className="btn btn-warning"
            style={{ float: "right" }}
            onClick={this.onFinish}
          >
            Finish
          </button>
        </span>
      </div>
    );
  }
}

export default TodoItem;
