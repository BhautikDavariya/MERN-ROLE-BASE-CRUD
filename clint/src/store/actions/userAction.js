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


// export const fetchLinks = (filter = {}, isLoading = true) => async (dispatch) => {
//     if (isLoading) {
//         dispatch(setLoading(true))
//     }
//     let url = apiBaseURL.LINK;
//     if (!_.isEmpty(filter) && (filter.page || filter.pageSize || filter.search || filter.order_By || filter.created_at)) {
//         url += requestParam(filter);
//     }
//     apiConfig.get(url)
//         .then((response) => {
//             dispatch({ type: linkActionType.FETCH_LINKS, payload: response.data.data });
//             dispatch(setTotalRecord(response.data.meta.total))
//             if (isLoading) {
//                 dispatch(setLoading(false))
//             }
//         })
//         .catch((response) => {
//             response?.response?.data?.message?.includes('Your plan has been expired') ? '' : dispatch(addToast(
//                 { text: response.response.data.title || response.response.data.message, type: toastType.ERROR }));
//         });
// };
