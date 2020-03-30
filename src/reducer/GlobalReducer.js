import uuid from "react-uuid";

export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          type: action.payload.type,
          name: action.payload.name,
          author: action.payload.author,
          id: uuid(),
        },
      ];
    case "DELETE_ITEM":
      return state.filter(state.id !== action.payload);
    default:
      return state;
  }
};
