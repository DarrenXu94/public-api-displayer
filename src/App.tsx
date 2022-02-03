import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import RightContent from "./components/RightContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-gray-50">
      <div className="md:container mx-auto ">
        <div className="relative bg-white dark:bg-gray-800 h-screen">
          <div className="grid grid-cols-3">
            <div className="col-span-3">
              <Heading />
            </div>
            <Sidebar />
            <div className="col-span-2">
              <RightContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
