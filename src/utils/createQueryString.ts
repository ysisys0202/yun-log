const createQueryString = (paramsObj: object) => {
  const params = new URLSearchParams();

  Object.entries(paramsObj).forEach(([key, value]) => {
    if (!value) {
      return;
    }
    params.append(key, value);
  });
  return `?${params.toString()}`;
};

export default createQueryString;
