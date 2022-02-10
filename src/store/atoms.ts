import { atom, selector, selectorFamily } from "recoil";
import { getAllCategories, getAllEntires } from "../utils/api";

export const selectedCategoryState = atom({
  key: "selectedCategory",
  default: null as string | null,
});

export const entriesQuery = selectorFamily({
  key: "getEntries",
  get: (category) => async () => {
    try {
      const response = await getAllEntires();

      return response.entries.filter((res) => res.Category == category);
    } catch (e: any) {
      throw new Error(e.message);
    }
  },
});

export const categoriesQuery = selector({
  key: "getCategories",
  get: async ({ get }) => {
    const response = await getAllCategories();
    return response;
  },
});
