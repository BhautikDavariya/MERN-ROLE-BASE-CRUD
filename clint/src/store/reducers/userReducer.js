import { userType } from '../../helper/actionHelper';

export default (state = [], action) => {
    switch (action.type) {
        case userType.GET_USERS:
            return action.payload;
        default:
            return state;
    }
};
