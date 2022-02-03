import React from "react";
import { useRecoilState } from "recoil";
import { selectedCategoryState } from "../store/atoms";
import CategoryDetail from "./CategoryDetail";
import Loading from "./Loading";

export interface RightContentProps {}

export default function RightContent({}: RightContentProps) {
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );
  return (
    <div className="flex flex-col ">
      <div className="m-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
        {selectedCategory}
      </div>

      {selectedCategory && (
        <React.Suspense
          //   fallback={<div>Loading your {selectedCategory} APIs</div>}
          fallback={
            <Loading message={`Loading your ${selectedCategory} APIs`} />
          }
        >
          <div className="m-6">
            <CategoryDetail category={selectedCategory} />{" "}
          </div>
        </React.Suspense>
      )}
    </div>
  );
}
