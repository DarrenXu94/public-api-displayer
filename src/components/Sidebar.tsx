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
    // <div>
    //   {allCategories.map((category) => {
    //     return (
    //       <div onClick={() => setSelectedCategory(category)} key={category}>
    //         {category}
    //       </div>
    //     );
    //   })}
    // </div>
    // <div className="relative bg-white dark:bg-gray-800">
    //   <div className="flex flex-col ">
    <div style={{ height: "calc(100vh - 5%)", overflow: "auto" }}>
      {/* <div className="w-72 sm:w-sm sm:min-w-xs min-w-sm"> */}
      <nav className="mt-10 px-6">
        {allCategories &&
          allCategories.categories.map((category) => {
            return (
              <div
                className="my-6 flex cursor-pointer items-center rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100  hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setSelectedCategory(category)}
                key={category}
              >
                {category}
              </div>
            );
          })}
      </nav>
    </div>
    //   </div>
    // </div>
  );
}
