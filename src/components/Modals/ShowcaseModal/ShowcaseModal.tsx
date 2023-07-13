import { useEffect } from 'react';

import useAppDispatch from '@/hooks/useAppDispatch';
import useLocalStorage from '@/hooks/useLocalStorage';
import { setShowcaseModal } from '@/store/reducers/ModalSlice/ModalSlice';

const ShowcaseModal = () => {
  const dispatch = useAppDispatch();
  const ls = useLocalStorage();

  useEffect(() => {
    const removeShowcase = () => {
      ls.remove('showcase');
      dispatch(setShowcaseModal(false));
    };

    window.addEventListener('unload', removeShowcase);

    return () => window.removeEventListener('unload', removeShowcase);
  }, []);

  return null;
};

export default ShowcaseModal;
