import React, { useState, useRef } from 'react';
import { MagnifyingGlassIcon, Cross2Icon } from '@radix-ui/react-icons';
import SuggestionList from './SuggestionList/SuggestionList';
import { useDebounce } from '../../hooks/useDebounce';

import styles from './Searchbar.module.scss';
import { useOutsideAlerter } from '../../hooks/useOutsideAlerter';

const Searchbar = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setValue] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 250);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setOpen(false));

  const handleChange = (keyword: string) => {
    setValue(keyword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.mainContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div ref={wrapperRef} className={styles.searchbar}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleChange(e.target.value)}
            onClick={() => setOpen(true)}
            placeholder="Поиск..."
          />
          <button
            type="button"
            className={`${styles.btnClose} ${
              searchTerm && styles.btnCloseActive
            }`}
            onClick={() => setValue('')}
          >
            <Cross2Icon width="18" height="18" />
          </button>
          <button type="submit" className={styles.btnSearch}>
            <MagnifyingGlassIcon width="21" height="21" />
          </button>
        </div>
      </form>
      {open && searchTerm && debouncedSearchTerm && (
        <SuggestionList
          keyword={debouncedSearchTerm}
        />
      )}
    </div>
  );
};

export default Searchbar;
