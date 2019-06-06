const initialState = {
  language: "sw"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LANGUAGE": {
      const { language } = action.payload;
      return {
        ...state,
        language
      };
    }
    default:
      return state;
  }
};
