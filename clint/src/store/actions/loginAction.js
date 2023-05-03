import axios from 'axios'
import {baseUrl, loginType} from '../../helper/actionHelper'
import { toast } from 'react-toastify'
import { errorOptions} from '../../helper/reactTost'

export const login = (data, navigate) => async (dispatch) => {
    await axios.post(baseUrl + '/login', data).then((response) => {
        if(response.data.data?.isSuccess === true){
            localStorage.setItem("userInfo", JSON.stringify(response.data.data.userInfo))
            localStorage.setItem("authToken", response.data.data.token)
            dispatch({type: loginType.ADD_LOGIN, payload: response.data.data})
            navigate("/user")
        } else {
            toast(response.data.message, errorOptions)
        }
    }).catch((error) => {
        toast(error.message, errorOptions)
    })
}