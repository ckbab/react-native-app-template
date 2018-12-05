// import { setIn } from "timm";

const initialState = {
  items: {
    0: "Zlatan",
    1: "Messi",
    2: "Ronaldo"
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { name } = action.payload;
      const id = state.length;
      return {
        ...state,
        items: {
          ...state.items,
          [id]: name
        }
      };
    }
    default:
      return state;
  }
};
