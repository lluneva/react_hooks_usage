import uuid from 'uuid/v1';

export const shoppingListReducer = (state, action) => {
  console.log("state", [...state])
  console.log("action: ", action)
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          listItemName: action.listItem.listItemName,
          listItemAmount: action.listItem.listItemAmount,
          amountMeasure: action.listItem.amountMeasure,
          id: uuid(),
        },
      ];
    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.id)

    default:
      
      return state;
  }
};
