import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRecoilValue } from "recoil";
import { categoriesQuery, entriesQuery } from "./store/atoms";
import CategoryDetail from "./components/CategoryDetail";
import React from "react";

function App() {
  // const allEntries = useRecoilValue(entriesQuery);
  const allCategories: string[] = useRecoilValue(categoriesQuery);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="App">
      {selectedCategory}
      <div>
        {allCategories.map((category) => {
          return (
            <div onClick={() => setSelectedCategory(category)} key={category}>
              {category}
            </div>
          );
        })}
      </div>
      {selectedCategory && (
        <React.Suspense
          fallback={<div>Loading your {selectedCategory} APIs</div>}
        >
          <CategoryDetail category={selectedCategory} />{" "}
        </React.Suspense>
      )}
    </div>
  );
}

export default App;
