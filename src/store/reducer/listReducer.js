import { GET_LIST_SUCCESS } from "../constant/constant"

let lists = JSON.parse(localStorage.getItem('list'))
const initialState = {
    catList: lists || []
}

export const catListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_SUCCESS:
            localStorage.setItem("list", JSON.stringify(action.payload))
            return {
                ...state,
                catList: action.payload
            }
        default:
            return state
    }
}

