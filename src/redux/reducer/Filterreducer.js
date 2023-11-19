
const INIT_STATE = {
    filterCriteria: null,
    sortOption: 'newest',
}

export const filterReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "SET_FILTER":
            return {
                ...state,
                filterCriteria: action.payload,

            }
        case "SET_SORT_OPTION":
                return {
                    ...state,
                    sortOption: action.payload,
            }
       
        default:
            return state
    }
}