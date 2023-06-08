import { useEffect } from 'react';

export function useOutsideAlerter(
  ref: React.RefObject<HTMLElement>,
  handleClickOutside: () => void
) {
  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (ref.current && !ref.current.contains(target)) {
        handleClickOutside();
      }
    }

    document.addEventListener('click', onClickOutside);
    return () => {
      document.removeEventListener('click', onClickOutside);
    };
  }, [ref, handleClickOutside]);
}
