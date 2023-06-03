import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import useScrollListener from '../../hooks/useScrollListener';
import Searchbar from '../Searchbar';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

const Header = () => {
  const [navClassList, setNavClassList] = useState<string[]>([]);
  const [burgerOpen, setBurgerOpen] = useState(false);
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
      <div className={styles.left}>
        <div className={styles.logo}>KINOBOOM</div>
      </div>
      <div className={styles.right}>
        <div
          className={`${styles.links} ${
            burgerOpen ? styles.links__active : ''
          }`}
        >
          <Link to="#">Главная</Link>
          <Link to="#">Фильмы</Link>
          <Link to="#">Сериалы</Link>
        </div>
        <Searchbar />
        <div className={styles.avatar}>AVA</div>
        <button
          className={styles.burger}
          onClick={() => {
            if (!burgerOpen) {
              document.body.style.overflow = 'hidden';
            } else {
              document.body.style.overflow = '';
            }
            setBurgerOpen((prev) => !prev);
          }}
        >
          <HamburgerMenuIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
