export const initialState = {
  purchase: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "BUY":
      return {
        ...state,
        purchase: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
