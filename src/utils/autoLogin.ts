export const getTokenFromUrl = (): string | undefined => {
  if (
    !(
      window.location.search.includes('?token=') ||
      window.location.search.includes('&token=')
    )
  )
    return undefined;

  const location = window.location.search;
  let token;

  if (location.includes('?token=')) {
    const index = location.lastIndexOf('?token=');
    token = location.substring(index + 1, index + 22);
  } else {
    const index = location.lastIndexOf('&token=');
    token = location.substring(index + 1, index + 22);
  }
  token = token.replace('token=', '');

  return token;
};
