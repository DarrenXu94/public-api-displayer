import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import "virtual:windi.css";
import Loading from "./components/Loading";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <React.Suspense fallback={<Loading message="Loading" />}>
        <App />
      </React.Suspense>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
