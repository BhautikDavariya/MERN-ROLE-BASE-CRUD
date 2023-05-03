import { userType } from '../../helper/actionHelper'
import { instance } from '../../helper/apiConfrim'
import { errorOptions, successOptions } from '../../helper/reactTost'
import { toast } from 'react-toastify'

export const fetchUsers = () => async (dispatch) => {
    await instance.get('get-all-user').then((response) => {
        dispatch({type: userType.GET_USERS, payload: response?.data?.data})
    }).catch((error) => {
        toast(error.data.message, errorOptions)
    })
}

export const deletehUser = (data) => async (dispatch) => {
    await instance.post('delete-user', data).then((response) => {
        dispatch({type: userType.GET_USERS, payload: response?.data?.data})
        toast('Delete Successfully !', successOptions)
    }).catch((error) => {
        toast(error.data.message, errorOptions)
    })
}


export const updateUser = (data) => async (dispatch) => {
    await instance.post('update-user', data).then((response) => {
        dispatch({type: userType.GET_USERS, payload: response?.data?.data})
        toast('Update Successfully !', successOptions)
    }).catch((error) => {
        toast(error.data.message, errorOptions)
    })
}

export const addUser = (data) => async (dispatch) => {
    await instance.post('add-user', data).then((response) => {
        dispatch({type: userType.GET_USERS, payload: response?.data?.data})
        toast('Create Successfully !', successOptions)
    }).catch((error) => {
        toast(error.data.message, errorOptions)
    })
}