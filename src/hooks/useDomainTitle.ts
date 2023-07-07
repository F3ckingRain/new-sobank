import { useEffect } from 'react';

import { DomainType } from '@/themes/types';

type TitleType = 'Sobank' | 'Onbank' | 'Sop';
const getDomainTitle = (domain: DomainType): TitleType => {
  switch (domain) {
    default:
      return 'Sobank';
  }
};
const useDomainTitle = () => {
  const domainTitle = getDomainTitle('Sobank');

  useEffect(() => {
    document.title = `${domainTitle} - получите лучшие условия онлайн.`;
  }, [domainTitle]);
};

export default useDomainTitle;
