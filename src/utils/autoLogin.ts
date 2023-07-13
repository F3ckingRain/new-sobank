import { Nullable } from '@/types/default';

export const getTokenFromUrl = (): Nullable<string> => {
  const { search } = window.location;

  if (!(search.includes('?token=') || search.includes('&token='))) return null;

  let token;

  if (search.includes('?token=')) {
    const index = search.lastIndexOf('?token=');
    token = search.substring(index + 1, index + 22);
  } else {
    const index = search.lastIndexOf('&token=');
    token = search.substring(index + 1, index + 22);
  }
  token = token.replace('token=', '');

  return token;
};
