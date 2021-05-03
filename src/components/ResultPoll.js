import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Header, Segment, Progress, Label, Button } from "semantic-ui-react";

const MyLabel = () => (
  <Label color="yellow" ribbon="right" className="vote">
    <div style={{ float: "right" }}>
      votes
    </div>
  </Label>
);

export function ResultPoll(props) {
  const handleClick = () => {
    props.history.push("/");
  };

  const { question, user } = props;
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const myVote = user.answers[question.id];

  return (
    <Fragment>
      <h3 as="h3">
        Results:
        <Header.Subheader style={{ fontWeight: "bold" }}>
          Would you rather
        </Header.Subheader>
      </h3>
      <Segment style={{ backgroundColor: "dodgerblue" }}>
        {myVote === "optionOne" && <MyLabel />}
        <p style={{ fontWeight: "bold" }}>{question.optionOne.text}</p>
        <Progress
          percent={((optionOneVotes / totalVotes) * 100).toFixed(2)}
          progress
        >
          {optionOneVotes} out of {totalVotes} votes
        </Progress>
      </Segment>
      <Segment style={{ backgroundColor: "blue" }}>
        {myVote === "optionTwo" && <MyLabel />}

        <p style={{ fontWeight: "bold" }}>{question.optionTwo.text}</p>
        <Progress
          percent={((optionTwoVotes / totalVotes) * 100).toFixed(2)}
          progress
        >
          {optionTwoVotes} out of {totalVotes} votes
        </Progress>
      </Segment>
      <Button size="tiny" floated="right" onClick={handleClick}>
        Back
      </Button>
    </Fragment>
  );
}

ResultPoll.propTypes = {
  history: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};
function mapStateToProps({ users, authUser }) {
  const user = users[authUser];
  return {
    user,
  };
}

export default withRouter(connect(mapStateToProps)(ResultPoll));
