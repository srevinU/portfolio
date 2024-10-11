export const isActive = (id: string, array: Array<any>) => {
  return array.some((obj) => obj._id === id);
};
