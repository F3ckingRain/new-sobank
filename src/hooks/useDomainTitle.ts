import { useEffect } from 'react';

import { THEME } from '@/types/config';

type TitleType = 'Sobank' | 'Onbank' | 'Sop';
const getDomanTitle = (domain: THEME): TitleType => {
  switch (domain) {
    default:
      return 'Sobank';
  }
};
const useDomainTitle = () => {
  const domainTitle = getDomanTitle('sobank');

  useEffect(() => {
    document.title = `${domainTitle} - получите лучшие условия онлайн.`;
  }, [domainTitle]);
};

export default useDomainTitle;
