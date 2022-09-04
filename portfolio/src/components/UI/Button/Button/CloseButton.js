import classes from './CloseButton.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

const CloseButton = (props) => {
  return (
    <button
      className={`${classes['close-button']} ${props.className}`}
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
    </button>
  );
};

export default CloseButton;
