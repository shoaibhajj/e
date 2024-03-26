// here we difine all the application level states and define the actions to make changes to the states

export const initialState = {
  basket: [],
};

//Selector

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };
  }
};

export default reducer;
