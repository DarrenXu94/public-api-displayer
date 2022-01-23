import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoriesQuery, selectedCategoryState } from "../store/atoms";

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  const allCategories: string[] = useRecoilValue(categoriesQuery);
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
    <div className="w-72 h-screen overflow-auto min-w-sm">
      <nav className="mt-10 px-6 ">
        {allCategories.map((category) => {
          return (
            <div
              className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg cursor-pointer"
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
