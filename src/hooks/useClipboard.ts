import { useState } from "react";

type CopyOptions = {
  copySuccessDuration?: number;
};

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const copy = async (
    copyText: string,
    options: CopyOptions = { copySuccessDuration: 1000 }
  ) => {
    await navigator.clipboard.writeText(copyText);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, options.copySuccessDuration);
  };
  return { isCopied, copy };
};

export default useClipboard;
