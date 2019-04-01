const initialState = {
    books: [],
    ids: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "set_book":
            return {
                books: action.payload
            };
        case "add_book":
            return {
                ...state,
                books: [
                    ...state.books,
                    action.payload
                ]
            };
        default:
            return state;
    }
}