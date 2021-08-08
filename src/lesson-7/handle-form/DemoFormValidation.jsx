import React, { Component } from 'react';

export default class DemoFormValidation extends Component {
  state = {
    values: {
      email: '',
      password: '',
    },
    errors: {
      email: '',
      password: '',
    },
    isValidEmail: false,
    isValidPassword: false,
    isValidForm: false,
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState(
      {
        values: {
          ...this.state.values,
          [name]: value,
        },
      },
      () => {
        console.log(this.state.values);
      }
    );
  };

  handleError = event => {
    const { name, value } = event.target;
    let { isValidEmail, isValidPassword } = this.state;

    let errMessage = '';

    // validate empty
    if (value === '') {
      errMessage = `${name} cannot be empty!`;
    }

    switch (name) {
      case 'email':
        const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        if (value && !value.match(regex)) {
          errMessage = 'invalid email!';
        }
        isValidEmail = errMessage === '' ? true : false;
        break;

      case 'password':
        if (value && (value.length < 6 || value.length > 10)) {
          errMessage = 'password should be 6 to 10 characters!';
        }
        isValidPassword = errMessage === '' ? true : false;
        break;

      default:
        break;
    }

    this.setState(
      {
        errors: {
          ...this.state.errors,
          [name]: errMessage,
        },
        isValidEmail,
        isValidPassword,
      },
      () => {
        this.validateForm();
      }
    );
  };

  validateForm = () => {
    const { isValidEmail, isValidPassword } = this.state;
    this.setState({
      isValidForm: isValidEmail && isValidPassword,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.isValidForm) {
      console.log('Submitted!');
      console.log(this.state.values);
    } else {
      console.log('Form has errors!');
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
              value={this.state.values.email}
              onChange={this.handleChange}
              onBlur={this.handleError}
              onKeyUp={this.handleError}
            />
            <small className="form-text text-danger">
              {this.state.errors.email}
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.values.password}
              onChange={this.handleChange}
              onBlur={this.handleError}
              onKeyUp={this.handleError}
            />
            <small className="form-text text-danger">
              {this.state.errors.password}
            </small>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!this.state.isValidForm}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
