import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment, Grid, Image } from "semantic-ui-react";
import Teaser from "./Teaser";
import QuestionPoll from "./QuestionPoll";
import ResultPoll from "./ResultPoll";
import Error404 from "./Error404";

const pollTypes = {
  TEASER: "TEASER",
  QUESTION: "QUESTION",
  RESULT: "RESULT",
};

export function PersonCard(props) {
  const { author, question, pollType, wrongPath, unanswered = null } = props;

  const border =
    unanswered === null ? "2px solid #023047" : "2px solid #8ecae6";
  if (wrongPath === true) {
    return <Redirect to="/questions/wrong_id" />;
  }
  return (
    <Segment.Group>
      <h5
        textAlign="left"
        block
        attached="top"
        style={{
          border,
          padding: "10px",
        }}
      >
        {author.name} asks:
      </h5>

      <Grid divided padded>
        <Grid.Row>
          <Grid.Column width={5}>
            <Image src={author.avatarURL} />
          </Grid.Column>
          <Grid.Column width={11}>
            {pollType === pollTypes.TEASER ? (
              <Teaser question={question} unanswered={unanswered} />
            ) : pollType === pollTypes.QUESTION ? (
              <QuestionPoll question={question} />
            ) : pollType === pollTypes.RESULT ? (
              <ResultPoll question={question} />
            ) : (
              <Error404 />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment.Group>
  );
}
PersonCard.propTypes = {
  question: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  pollType: PropTypes.string.isRequired,
  unanswered: PropTypes.bool,
  question_id: PropTypes.string,
};

function mapStateToProps(
  { users, questions, authUser },
  { match, question_id }
) {
  let question,
    pollType,
    author,
    wrongPath = false;
  if (question_id !== undefined) {
    question = questions[question_id];
    author = users[question.author];
    pollType = pollTypes.TEASER;
  } else {
    const { question_id } = match.params;
    question = questions[question_id];
    const user = users[authUser];
    if (question === undefined) {
      wrongPath = true;
    } else {
      author = users[question.author];
      pollType = pollTypes.QUESTION;
      if (Object.keys(user.answers).includes(question.id)) {
        pollType = pollTypes.RESULT;
      }
    }
  }

  return {
    wrongPath,
    question,
    author,
    pollType,
  };
}

export default connect(mapStateToProps)(PersonCard);
