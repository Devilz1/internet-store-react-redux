const initialState = {
    isReady: false,
    items: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "set_book":
            return {
                ...state,
                items: action.payload,
                isReady: true
            };
        case "set_is_ready":
            return {
                ...state,
                isReady: action.payload
            };
        default:
            return state;
    }
}