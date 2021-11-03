// threds Reducer
const threadsReducerDefaultState = [];

export default (state = threadsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_THREAD':
      return [
        ...state,
        action.thread
      ];
    default:
      return state;
  }
};
