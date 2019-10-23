
export const shoppingReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, { listItem: action.listItem }]

        default:
            break;
    }
}

