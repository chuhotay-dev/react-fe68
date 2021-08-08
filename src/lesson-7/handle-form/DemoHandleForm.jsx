import React, { Component } from 'react';

export default class DemoHandleForm extends Component {
  state = {
    email: '',
    password: '',
    emailErr: '',
    passwordErr: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  validate = () => {
    let emailErr = '';
    let passwordErr = '';

    if (!this.state.email) {
      emailErr = 'Email cannot be empty!';
    }

    if (!this.state.password) {
      passwordErr = 'Password cannot be empty';
    }

    if (emailErr || passwordErr) {
      this.setState({
        emailErr,
        passwordErr,
      });
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log('Do something...');
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="my-4">Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <small className="form-text text-danger">
              {this.state.emailErr}
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <small className="form-text text-danger">
              {this.state.passwordErr}
            </small>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
