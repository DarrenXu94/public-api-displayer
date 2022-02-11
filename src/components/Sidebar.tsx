import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { APICategory } from "../interfaces/api";
import { categoriesQuery, selectedCategoryState } from "../store/atoms";

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  const allCategories: APICategory = useRecoilValue(categoriesQuery);
  console.log(allCategories);
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );

  return (
    <div style={{ height: "calc(100vh - 5%)", overflow: "auto" }}>
      <nav className="mt-10 px-6">
        {allCategories && (
          <p className="p-2 text-gray-600">
            <b>{allCategories.count} categories found</b>
          </p>
        )}
        {allCategories &&
          allCategories.categories.map((category) => {
            return (
              <div
                className={`my-6 flex cursor-pointer items-center rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100  hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white ${
                  selectedCategory == category ? "bg-gray-100" : "bg-white"
                }`}
                onClick={() => setSelectedCategory(category)}
                key={category}
              >
                {category}
              </div>
            );
          })}
      </nav>
    </div>
  );
}
