import ReactDOM  from 'react-dom';
import SnackBar from'./../components/snackbar/index';

/**
 * @description type {success, error}
 * @param {string} type message type
 * @param {string} msj message
 */
const SnackbarPortal = ({ snackBarType, snackBarMessage }) => {
  return ReactDOM.createPortal(
    <SnackBar
        type={snackBarType}
        msj={snackBarMessage}
    />,
    document.getElementById('general-snackbar')
  );
}
export default SnackbarPortal;