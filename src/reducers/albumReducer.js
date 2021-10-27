const initialState = []

export const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALBUMS': {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}