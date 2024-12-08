const throttle = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: any) => {
    if (timeout) return;
    func(...args);
    timeout = setTimeout(() => {
      timeout = null;
    }, wait);
  };
};

export default throttle;
