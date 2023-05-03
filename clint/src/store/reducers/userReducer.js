import { userType } from '../../helper/actionHelper';

export default (state = [], action) => {
    switch (action.type) {
        case userType.GET_USERS:
            return action.payload;
        // case userActionType.FETCH_USER:
        //     return [action.payload];
        // case userActionType.ADD_USER:
        //     return action.payload;
        // case userActionType.EDIT_USER:
        //     return state.map(item => item.id === +action.payload.id ? action.payload : item);
        case userType.ADD_DELETE_USER:
            return state.filter(item => item.id !== action.payload);
        // case userActionType.EMAIL_VERIFY_USER:
        //     return state.map(item => item.id === +action.payload.id ? action.payload : item);
        // case userActionType.USER_STATUS:
        //     return state.map(item => item.id === +action.payload.id ? action.payload : item);
        default:
            return state;
    }
};
