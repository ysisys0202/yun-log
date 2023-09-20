import { fetchCategories } from "@/services/categories";
import { atom } from "recoil";

export const categories = atom({
  key: "categories",
  default: fetchCategories(),
});
