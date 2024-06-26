import React from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import {
  FaInfo,
  FaCheck,
  FaExclamationTriangle,
  FaBug,
  FaExclamationCircle,
} from "react-icons/fa";

export const displayIcon = (type) => {
  switch (type) {
    case "success":
      return <FaCheck />;
    case "info":
      return <FaInfo />;
    case "error":
      return <FaExclamationCircle />;
    case "warning":
      return <FaExclamationTriangle />;
    default:
      return <FaBug />;
  }
};
export const color = (type) => {

  switch (type) {
    case "success":
      return "white";
    case "info":
      return "orange";
    case "error":
      return "white";
    case "warning":
      return "yellow";
    default:
      return "red";
  }
};

const ToastMessage = async({ type, message }) => {

  toast[type](message);

  ToastMessage.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,

  };
  ToastMessage.dismiss = toast.dismiss;
  toast.clearWaitingQueue();

  return (

    <>


    </>
  )
};
export default ToastMessage;