export const addItem = (name) => {
  return {
    type: "ADD_ITEM",
    payload: { name },
  };
};
