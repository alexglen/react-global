import classnames from 'classnames';
import styles from './Button.module.scss';

const Button = ({ children, color, onClick, type }) => {
  const buttonClass = classnames(styles.button, {
    [styles.primary]: color === 'primary',
    [styles.secondary]: color === 'secondary',
  });

  return (
    <button className={buttonClass} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
