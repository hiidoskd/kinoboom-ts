import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import useScrollListener from '../../hooks/useScrollListener';

const Header = () => {
  const [navClassList, setNavClassList] = useState<string[]>([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList: string[] = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push('hidden');

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);
  return (
    <div
      className={`${styles.container} ${
        navClassList.length ? styles[navClassList[0]] : ''
      }`}
    >
      <div className={styles.logo}>KINOBOOM</div>
      <div className={styles.itemContainer}>
        <Link to="/" className={styles.navitem}>
          Home
        </Link>
        <Link to="/" className={styles.navitem}>
          Discover
        </Link>
        <Link to="/" className={styles.navitem}>
          Movie Release
        </Link>
        <Link to="/" className={styles.navitem}>
          Forum
        </Link>
        <Link to="/" className={styles.navitem}>
          About
        </Link>
      </div>
      <div>Icons</div>
    </div>
  );
};

export default Header;
