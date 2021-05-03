import React, { Fragment } from "react";
import PropType from "prop-types";
import { connect } from "react-redux";
import '../css/board.css';

const Board = (props) => {
  const { boardData } = props;

  return (
    <Fragment>
      {boardData.map((user, idx) => (
        <div className="board main-wrapper" key={user.id}>
          <div className="lead-img">
            <img src={user.avatarURL} alt="" />
          </div>
          <div className="lead-details">
            <div className="total-answered">
              <h3>{user.name}</h3>
              <h4>Total Answered questions</h4>
              <p>{user.answerCount}</p>
            </div>
            <div className="score-details">
              <h5>Total questions Created</h5>
              <p>{user.questionCount}</p>
            </div>
          </div>
          <div className="total-count">
            <h3>total score</h3>
            <p>{user.questionCount + user.answerCount}</p>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

Board.propType = {
  leaderboardData: PropType.array.isRequired,
};
function mapStateToProps({ users }) {
  const boardData = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
      total: Object.values(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => a.total - b.total)
    .reverse()
    .slice(0, 3);
  console.log("boardData", boardData);
  return {
    boardData,
  };
}

export default connect(mapStateToProps)(Board);
