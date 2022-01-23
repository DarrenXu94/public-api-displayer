import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  categoriesQuery,
  entriesQuery,
  selectedCategoryState,
} from "./store/atoms";
import CategoryDetail from "./components/CategoryDetail";
import React from "react";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";

function App() {
  // const allEntries = useRecoilValue(entriesQuery);

  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto ">
        <div className="relative bg-white dark:bg-gray-800">
          <div className="flex">
            <Sidebar />
            <div className="flex flex-col overflow-auto h-screen ">
              <div className="m-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                {selectedCategory}
              </div>

              {selectedCategory && (
                <React.Suspense
                  fallback={<div>Loading your {selectedCategory} APIs</div>}
                >
                  <div className="m-6">
                    <CategoryDetail category={selectedCategory} />{" "}
                  </div>
                </React.Suspense>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
