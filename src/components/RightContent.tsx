import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilState,
  useResetRecoilState,
} from "recoil";
import { entriesQuery, selectedCategoryState } from "../store/atoms";
import CategoryDetail from "./CategoryDetail";
import ErrorFallback from "./ErrorFallback";
import Loading from "./Loading";

export interface RightContentProps {}

export default function RightContent({}: RightContentProps) {
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );
  const refreshUserInfo = useRecoilRefresher_UNSTABLE(
    entriesQuery(selectedCategory)
  );

  return (
    <div className="flex flex-col ">
      <div className="m-6 text-xl font-light text-gray-600 dark:text-white sm:text-2xl">
        {selectedCategory}
      </div>

      {selectedCategory && (
        <React.Suspense
          fallback={
            <Loading message={`Loading your ${selectedCategory} APIs`} />
          }
        >
          <div className="m-6">
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => {
                refreshUserInfo();
              }}
            >
              <CategoryDetail category={selectedCategory} />{" "}
            </ErrorBoundary>
          </div>
        </React.Suspense>
      )}
    </div>
  );
}
