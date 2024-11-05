export const getHeight = (el: Element): `${number}px` => {
  const rect = el.getBoundingClientRect();
  return `${rect.height}px`;
};
