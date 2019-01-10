const intialState = {
  counter: 0,
  result2: [],
  user: {}
};

const reducer = (state = intialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1
    };
  } else if (action.type === "RESET") {
    return {
      ...state,
      counter: 0,
      result2: []
    };
  } else if (action.type === "SAVE") {
    var array = state.result2;
    array.push(action.value);
    return {
      ...state,
      result2: array
    };
  } else if (action.type === "logedin") {
    return {
      ...state,
      user: action.value
    };
  }
  return state;
};
export default reducer;
