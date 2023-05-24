import React from 'react';
import styles from './index.module.scss';

type SubtitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Subtitle = ({ children, className }: SubtitleProps) => {
  return (
    <span className={`${styles.subtitle} ${className ? className : ''}`}>
      {children}
    </span>
  );
};

export default Subtitle;
