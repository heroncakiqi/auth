import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { compose } from 'redux';

class LogIn extends Component {
  handleSubmit = (formProps) => {
    this.props.login(formProps, () => {
      this.props.history.push('/feature');
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <fieldset>
          <label>Email:</label>
          <Field
            name='email'
            type='text'
            component='input'
            required
          />
          <span>{this.props.errorMessage && this.props.errorMessage.email}</span>
        </fieldset>
        <fieldset>
          <label>Password:</label>
          <Field
            name='password'
            type='password'
            component='input'
            required
          />
          <span>{this.props.errorMessage && this.props.errorMessage.password}</span>
        </fieldset>
        <button>Log In!</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default compose(connect(mapStateToProps, actions), reduxForm({ form: 'login '}))(LogIn);