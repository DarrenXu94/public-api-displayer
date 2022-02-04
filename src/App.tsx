import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import RightContent from "./components/RightContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="overflow-hidden bg-gray-50">
      <div className="mx-auto md:container ">
        <div className="relative h-screen bg-white dark:bg-gray-800">
          <div
            className="grid grid-cols-3 grid-rows-2"
            style={{ gridTemplateRows: "150px auto" }}
          >
            <div className="col-span-3">
              <Heading />
            </div>
            <Sidebar />
            <div
              className="col-span-2"
              style={{ height: "calc(100vh - 150px)", overflow: "auto" }}
            >
              <RightContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
