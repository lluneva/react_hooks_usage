export const clickReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CLICK':
      return parseInt(state) + 1;
    case 'REMOVE_CLICK':
      return parseInt(state) - 1;
    case 'CLEAR_RESULT':
      return (state = 0);
    default:
      return parseInt(state);
  }
};
