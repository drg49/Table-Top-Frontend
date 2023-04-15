import { toast } from "react-toastify";
import { css } from "glamor";

/**
 * A toast method for notifying a success.
 * @param {string} message - The message to display on the toast.
 * @param {string} position - Position of the toast: 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left' Default: 'top-right'.
 */
export const notifySuccess = (message, position) => {
    toast.success(message, {
      position: position,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: css({
      background: "#1ab394 !important"
    })
  });
}

/**
 * A toast method for notifying an error.
 * @param {string} message - The message to display on the toast.
 * @param {string} position - Position of the toast: 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left' Default: 'top-right'.
 */
export const notifyError = (message, position) => {
    toast.error(message, {
      position: position,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: css({
      background: "#ed5565 !important"
    })
  });
};

/**
 * A toast method for notifying a warning.
 * @param {string} message - The message to display on the toast.
 * @param {string} position - Position of the toast: 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left' Default: 'top-right'.
 */
export const notifyWarn = (message, position) => {
    toast.warn(message, {
      position: position,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: css({
      background: "#f8ac59 !important"
    })
  });
};
