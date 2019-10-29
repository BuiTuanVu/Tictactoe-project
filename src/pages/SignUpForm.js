import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      name: '',
      hasAgreed: false
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
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label className="FormField__Label" htmlFor="name">Username</Form.Label>
            <Form.Control type="text" id="username" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} autoComplete="off" />
          </Form.Group>
          <Form.Group>
            <Form.Label className="FormField__Label" htmlFor="password">Password</Form.Label>
            <Form.Control type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group >
            <Form.Label className="FormField__Label" htmlFor="username">Confirm Password</Form.Label>
            <Form.Control type="password" id="password" className="FormField__Input" placeholder="Enter your username" name="username" value={this.state.username} onChange={this.handleChange} />
          </Form.Group>



          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
          </div>
        </Form>
      </div>
    );
  }
}

export default SignUpForm;
