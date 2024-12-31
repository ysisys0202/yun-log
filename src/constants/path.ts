import { isClient } from "@/utils/common";

export const API_BASE_URL = isClient
  ? ""
  : process.env.NEXT_PUBLIC_API_BASE_URL;
