import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import { MagnifyingGlassIcon, Cross2Icon } from '@radix-ui/react-icons';

const Searchbar = () => {
  const navgigate = useNavigate();

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navgigate(`/search/${value}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.searchbar}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Поиск..."
        />
        <button
          type="button"
          className={`${styles.btnClose} ${value && styles.btnCloseActive}`}
          onClick={() => setValue('')}
        >
          <Cross2Icon width="18" height="18" />
        </button>
      </div>

      <button type="submit" className={styles.btnSearch}>
        <MagnifyingGlassIcon width="21" height="21" />
      </button>
    </form>
  );
};

export default Searchbar;
