import React, { Component} from 'react';
import {
    Form,
  } from 'semantic-ui-react';
  import '../index.css';

class SignInForm extends Component {

    state = {
      value: ''
    };
    onChange = (e, { value }) => {
      this.setState({ value });
    };
    handleSubmit = e => {
      e.preventDefault();
      const { onLoading, setAuthorized } = this.props;
      const authUser = this.state.value;
  
      new Promise((res, rej) => {
        onLoading();
        setTimeout(() => res(), 500);
      }).then(() => setAuthorized(authUser));
    };
    generateDropdownData = () => {
      const { users } = this.props;
  
      return users.map(user => ({
        key: user.id,
        text: user.name,
        value: user.id,
        image: { avatar: true, src: user.avatarURL }
      }));
    };
    render() {
      const { value } = this.state;
      const disabled = value === '' ? true : false;
  
      return (
        <Form onSubmit={this.handleSubmit}>
          <h2 color="#153c4f">
            Sign In
          </h2>
          <Form.Dropdown
            placeholder="Select a Friend"
            selection
            scrolling
            options={this.generateDropdownData()}
            value={value}
            onChange={this.onChange}
            required
          />
          <button className="signIn"  disabled={disabled} >Sign In</button>
        </Form>
      );
    }
  }

  export default SignInForm;