import React, { Component } from "react";
import "../components/addTodo.css";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClick = () => {
    const userName = this.state.userName;
    this.props.onLogin(userName);
    this.setState({
      userName: "",
    });
  };
  render() {
    return (
      <div className="wrapper">
        <div>
          <input
            type="text"
            name="userName"
            placeholder="Enter Your Name to display in the Banner"
            onChange={this.onChange}
            value={this.state.userName}
          />
          <button id="submit-book" onClick={this.onClick}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default AddUser;
