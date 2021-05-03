import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tab } from "semantic-ui-react";
import PersonCard from "./PersonCard";

export function HomePage(props) {
  const { userQuestionData } = props;
  return <Tab panes={panes({ userQuestionData })} className="tab" />;
}

const panes = (props) => {
  const { userQuestionData } = props;
  
  return [
    {
      menuItem: "Unanswered",
      render: () => (
        <Tab.Pane>
          {userQuestionData.unanswered.map((question) => (
            <PersonCard
              key={question.id}
              question_id={question.id}
              unanswered={true}
            />
          ))}
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Answered",
      render: () => (
        <Tab.Pane>
          {userQuestionData.answered.map((question) => (
            <PersonCard
              key={question.id}
              question_id={question.id}
              unanswered={false}
            />
          ))}
        </Tab.Pane>
      ),
    },
  ];
};

HomePage.propTypes = {
  userQuestionData: PropTypes.object.isRequired,
};
function mapStateToProps({ authUser, users, questions }) {
  const answeredIds = Object.keys(users[authUser].answers);
  const answered = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    userQuestionData: {
      answered,
      unanswered,
    },
  };
}

export default connect(mapStateToProps)(HomePage);
