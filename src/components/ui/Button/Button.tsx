import { ComponentProps } from 'react';
import styles from './Button.module.scss';
interface ButtonProps extends ComponentProps<'button'> {
  variant: 'primary' | 'secondary';
}

const Button = ({
  className = '',
  children,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.btn} ${styles.btnRipple} ${className} ${
        variant === 'primary'
          ? styles.primary
          : variant === 'secondary'
          ? styles.secondary
          : ''
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
