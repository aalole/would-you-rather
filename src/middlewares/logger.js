const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("the action is ", action);
  console.log("the current state is ", store.getState());
  const returnVal = next(action);
  console.groupEnd();
  return returnVal;
};

export default logger;
