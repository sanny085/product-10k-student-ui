// useToast.js
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const useToast = () => {
  const showErrorToast = (message, position, theme) => {
    toast.error(message, {
      position: position,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
    });
  };

  const showSuccessToast = (message, position, theme) => {
    toast.success(message, {
      position: position,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
    });
  };
  const showWarningToast = (message, position, theme) => {
    toast.warn(message, {
      position: position,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
    });
  };

  return {
    showErrorToast,
    showSuccessToast,
    showWarningToast,
  };
};

export default useToast;
