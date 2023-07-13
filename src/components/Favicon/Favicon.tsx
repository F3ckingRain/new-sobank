import { FC, useEffect } from 'react';

interface FaviconProps {
  ico: string;
}
const Favicon: FC<FaviconProps> = ({ ico }) => {
  useEffect(() => {
    const favicon = document.getElementById('favicon');

    if (!favicon) return;

    favicon.setAttribute('href', ico);
  }, [ico]);

  return null;
};

export default Favicon;
