import { ComponentProps } from 'react';
import styles from './index.module.scss';
interface ButtonProps extends ComponentProps<'button'> {
  variant: 'primary' | 'secondary';
}

const Button = ({ className = '', children, ...props }: ButtonProps) => {
  return (
    <button
      className={`${styles.btn} ${styles.btnRipple} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
