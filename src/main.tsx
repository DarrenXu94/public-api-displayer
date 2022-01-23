import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import "virtual:windi.css";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <App />
      </React.Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
