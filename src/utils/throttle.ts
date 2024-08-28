const throttle = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: any) => {
    if (timeout) return;
    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, wait);
  };
};

export default throttle;
