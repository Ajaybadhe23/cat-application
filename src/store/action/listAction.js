import { GET_LIST_SUCCESS } from "../constant/constant"

const getCatListAction = (dispatch, data) => {
    dispatch({
        type: GET_LIST_SUCCESS,
        payload: data
    })
}
export default getCatListAction