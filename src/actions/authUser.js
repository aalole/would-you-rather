export const SET_VERIFIED_USER = "SET_AUTHEDUSER";

export function setAuthorized(id) {
  return {
    type: SET_VERIFIED_USER,
    id,
  };
};

