export const getCurrentYear = () => {
  const date = new Date(Date.now());

  return date.getFullYear();
};
