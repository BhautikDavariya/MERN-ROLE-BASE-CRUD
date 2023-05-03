import { loginType } from "../../helper/actionHelper";

export default (state = [], action) => {
    switch (action.type) {
        case loginType.ADD_LOGIN:
            return action.payload;
        default:
            return state;
    }
};
