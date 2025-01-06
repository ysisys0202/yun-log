import { isClient } from "@/utils/common";

const getApiBaseUrl = () => {
  if (isClient) {
    return "";
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
};

export default getApiBaseUrl;
