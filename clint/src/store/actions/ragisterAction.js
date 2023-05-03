import axios from 'axios'
import {baseUrl} from '../../helper/actionHelper'
import { errorOptions, successOptions } from '../../helper/reactTost'
import { toast } from 'react-toastify'

export const reagister = (data, navigate) => async (dispatch) => {
    await axios.post(baseUrl + '/ragister', data).then((response) => {
        if(response.data.isSuccess === true){
            navigate('/login')
            toast('Ragister Successfully !', successOptions)
        } else {
            toast(response.data.message, errorOptions)
        }
    }).catch((error) => {
        toast(error.data.message, errorOptions)
    })
}