import uuid from 'uuid/v1';

export const shoppingListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          listItemName: action.listItem.listItemName,
          listItemAmount: action.listItem.listItemAmount,
          amountMeasure: action.listItem.amountMeasure,
          id: uuid(),
        }
      ];

    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.id)
    case "MARK_DONE":
      return {
        ...state,
        toBuys: state.toBuys.map(toBuy => toBuy.id === action.id ? { ...toBuy, done: true } : toBuy)
      }
    default:
      return state;
  }
};
