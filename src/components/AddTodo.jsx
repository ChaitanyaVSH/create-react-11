import React, { Component } from "react";
import "../components/addTodo.css";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClick = () => {
    const todoDesc = this.state.desc;
    if (todoDesc.trim().length === 0)
      return alert("Please enter a valid ToDo.");
    this.props.onSubmit(todoDesc);
    this.setState({
      desc: "",
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div>
          <input
            type="text"
            name="desc"
            placeholder="Add a ToDo"
            onChange={this.onChange}
            value={this.state.desc}
          />
          <button id="submit-book" className="btn btn-outline-success" onClick={this.onClick}>
            Submit
          </button>
          <button id="submit-book" className="btn btn-outline-success" onClick={this.props.onSave}>
            Send to mail
          </button>
        </div>
      </div>
    );
  }
}

export default AddTodo;
