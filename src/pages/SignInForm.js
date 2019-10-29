import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);
  }

  render() {
    return (
      <div className="FormCenter">
        <Form onSubmit={this.handleSubmit} className="FormFields">
          <Form.Group >
            <Form.Label className="FormField__Label" htmlFor="username">Username</Form.Label>
            <Form.Control id="username" className="FormField__Input" placeholder="Enter your username" name="username" autoComplete="off" value={this.state.username} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group className="FormField">
            <Form.Label className="FormField__Label" htmlFor="password">Password</Form.Label>
            <Form.Control type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group className="FormField">
            <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
          </Form.Group>
        </Form>
        <div className="row btn-social">
          <a href="#" className="btn-face" >
            <i className="fa fa-facebook-official" />
            Facebook
                </a>
          <a href="#" className="btn-google" >
            <i className="fa fa-google" />
            Google
                </a>
        </div>
      </div>
    );
  }
}

export default SignInForm;
