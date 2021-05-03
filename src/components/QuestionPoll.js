import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button, Form, Radio } from "semantic-ui-react";
import { handleSaveAnswer } from "../actions/users";

export class QuestionPoll extends Component {
  state = {
    value: "",
  };

  handleChange = (e, { value }) => this.setState({ value });

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value !== "") {
      const { authUser, question, handleSaveAnswer } = this.props;
      handleSaveAnswer(authUser, question.id, this.state.value);
    }
  };

  render() {
    const { question } = this.props;
    const disabled = this.state.value === "" ? true : false;

    return (
      <Fragment>
        <h4>Would you rather</h4>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Radio
              label={question.optionOne.text}
              name="radioGroup"
              value="optionOne"
              checked={this.state.value === "optionOne"}
              onChange={this.handleChange}
            />
            <br />
            <Radio
              label={question.optionTwo.text}
              name="radioGroup"
              value="optionTwo"
              checked={this.state.value === "optionTwo"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Button
              color="yellow"
              size="tiny"
              fluid
              positive
              disabled={disabled}
              content="Submit"
            />
          </Form.Field>
        </Form>
      </Fragment>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default connect(mapStateToProps, { handleSaveAnswer })(
  QuestionPoll
);
