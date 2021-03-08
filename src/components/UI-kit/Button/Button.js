import React from 'react';
import classnames from 'classnames';
import './Button.scss';

const Button = ({ children, color, onClick, type }) => {
  const buttonClass = classnames('button', {
    'button-primary': color === 'primary',
    'button-secondary': color === 'secondary',
  });

  return (
    <button className={buttonClass} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
