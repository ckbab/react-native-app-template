export const getItems = state => Object.values(state.items.items);
export const getItemById = (state, id) => state.items.items[id];
export const getCount = state => Object.values(state.items.items).length;
