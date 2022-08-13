import classes from './CloseButton.module.css';

const CloseButton = (props) => {
  return (
    <button
      className={`${classes['close-button']} ${props.className}`}
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default CloseButton;
