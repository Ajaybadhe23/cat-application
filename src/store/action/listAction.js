import { GET_LIST_SUCCESS } from "../constant/constant"

export const getCatListAction = (dispatch, data) => {
    dispatch({
        type: GET_LIST_SUCCESS,
        payload: data
    })
}

export const setLocalData = (data) => {
    localStorage.setItem("list", JSON.stringify(data))
}
