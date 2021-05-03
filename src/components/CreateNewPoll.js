import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/poll.css';
import {
  Grid,
  Dimmer,
  Loader
} from 'semantic-ui-react';
import { handleSaveQuestion } from '../actions/questions';

export class CreatePoll extends Component {
  static propTypes = {
    authUser: PropTypes.string.isRequired,
    handleSaveQuestion: PropTypes.func.isRequired
  };
  state = {
    validSubmission: false,
    loading: false,
    choice1: '',
    choice2: ''
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { authUser, handleSaveQuestion } = this.props;
    const { choice1, choice2 } = this.state;

    new Promise((res, rej) => {
      this.setState({ loading: true });
      handleSaveQuestion(choice1, choice2, authUser);
      setTimeout(() => res('success'), 700);
    }).then(() => {
      this.setState({
        choice1: '',
        choice2: ''
      });
      this.setState({ validSubmission: true });
    });
  };
  render() {
    const disabled = this.state.choice1 === '' || this.state.choice2 === '';


    if (this.state.validSubmission === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="poll-wrap">
        <h3 attached="top">
          Create a New Poll question
        </h3>
        <Grid padded >
          <Grid.Column>
            {this.state.isLoading && (
              <Dimmer active inverted>
                <Loader content="Updating" />
              </Dimmer>
            )}
            <p>Enter your polling question:</p>
            <p>
              <strong>Would you rather...</strong>
            </p>
            <form onSubmit={this.handleSubmit}>
              <input
                id="choice1"
                placeholder="Enter choice one..."
                value={this.state.choice1}
                onChange={this.handleChange}
                required
              />
              <p className="text-center">Or</p>
              <input
                id="choice2"
                placeholder="Enter choice two..."
                value={this.state.choice2}
                onChange={this.handleChange}
                required
              />
              <button disabled={disabled}>
                Submit
              </button>
            </form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}

export default connect(
  mapStateToProps,
  { handleSaveQuestion }
)(CreatePoll);