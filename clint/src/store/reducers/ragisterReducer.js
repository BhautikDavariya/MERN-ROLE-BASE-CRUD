import { ragisterType } from "../../helper/actionHelper";

export default (state = [], action) => {
    switch (action.type) {
        case ragisterType.ADD_RAGUSTER:
            return action.payload;
        default:
            return state;
    }
};
