import {
  GET_USERS,
  ADD_ANSWER_BY_USER,
  ADD_QUESTION_BY_USER,
} from "../actions/users";

export const users = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER_BY_USER:
      const { authUser, qid, answer } = action;

      return {
        ...state,
        [authUser]: {
          ...state[authUser],
          answers: {
            ...state[authUser].answers,
            [qid]: answer,
          },
        },
      };
    case ADD_QUESTION_BY_USER:
      const { id, author } = action;

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id),
        },
      };
    default:
      return state;
  }
};

export default users;
