const logger = (store) => (next) => (action) => {
  console.log(store.getState()); //gets the current state
  console.log(action);
  return next(action)
}

export default logger;