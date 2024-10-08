import { atom } from "recoil";
import { PostNav } from "@/types/post";

export const postNavListState = atom<PostNav[] | undefined>({
  key: "postNavListState",
  default: undefined,
});
