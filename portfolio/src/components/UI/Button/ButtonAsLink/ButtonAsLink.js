import classes from './ButtonAsLink.module.css';

const ButtonAsLink = (props) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default ButtonAsLink;
