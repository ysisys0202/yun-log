import getApiBaseUrl from "@/utils/path";
import { handleError } from "@/utils/error";

const fetcher = async (
  apiUrl: string,
  options?: RequestInit,
  onSuccess?: (data: any) => void,
  onError?: (error: any) => void
) => {
  try {
    const response = await fetch(`${getApiBaseUrl}/api${apiUrl}`, options);
    if (!response.ok) {
      handleError(
        `fetch 에러가 발생했습니다. url : ${apiUrl} status : ${response.status}`
      );
    }
    const data = await response.json();
    onSuccess?.(data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      handleError(error.message);
    }
    onError?.(error);
  }
};

export default fetcher;
