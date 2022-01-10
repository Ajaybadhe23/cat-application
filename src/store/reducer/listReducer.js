import { GET_LIST_SUCCESS, SET_LIST } from "../constant/constant"

// let lists = JSON.parse(localStorage.getItem('list'))
const initialState = {
    catList: []
}

export const catListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST:
            return {
                ...state,
                catList: action.payload
            }
        case GET_LIST_SUCCESS:
            return {
                ...state,
                catList: action.payload
            }
        default:
            return state
    }
}

