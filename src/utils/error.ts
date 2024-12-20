export const handleError = (message: string) => {
  console.error(message);
  throw new Error(message);
};
