import { addAnswerToQuestion } from '../actions/questions';
import { saveQuestionAnswer } from '../utils/api';

export const ADD_ANSWER_BY_USER = 'ADD_ANSWER_BY_USER';
export const GET_USERS = 'GET_USERS';
export const ADD_QUESTION_BY_USER = 'ADD_QUESTION_BY_USER';

export function addQuestionByUser({ id, author }) {
  return {
    type: ADD_QUESTION_BY_USER,
    id,
    author
  };
}
export function getUsers(users) {
  return {
    type: GET_USERS,
    users
  };
}

function addAnswerToUser(authUser, qid, answer) {
  return {
    type: ADD_ANSWER_BY_USER,
    authUser,
    qid,
    answer
  };
}

export function handleSaveAnswer(authUser, qid, answer) {
  return dispatch => {
    dispatch(addAnswerToUser(authUser, qid, answer));
    dispatch(addAnswerToQuestion(authUser, qid, answer));

    return saveQuestionAnswer(authUser, qid, answer).catch(e => {
      console.warn('Error in handleSaveAnswer:', e);
    });
  };
}