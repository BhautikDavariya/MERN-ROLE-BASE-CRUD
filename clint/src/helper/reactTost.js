
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successOptions = {
    autoClose: 2000,
    type: toast.TYPE.SUCCESS,
    hideProgressBar: false,
    position: toast.POSITION.TOP_RIGHT,
    pauseOnHover: true,
    progress: undefined,
    closeButton: false,
    closeOnClick: true,
    draggable: true,
    theme: "colored"

    // and so on ...
};

export const errorOptions = {
    autoClose: 2000,
    type: toast.TYPE.ERROR,
    hideProgressBar: false,
    position: toast.POSITION.TOP_RIGHT,
    pauseOnHover: true,
    progress: undefined,
    closeButton: false,
    closeOnClick: true,
    draggable: true,
    theme: "colored"

    // and so on ...
};