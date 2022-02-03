import React from "react";

export interface HeadingProps {}

export default function Heading({}: HeadingProps) {
  return (
    <div className="p-5 flex justify-center items-center flex-col h-full">
      <h1 className="text-3xl text-center ">A Collection of Public APIs</h1>
      <p className="text-center">
        See this{" "}
        <a
          className="text-blue-400"
          href="https://github.com/davemachado/public-api"
        >
          link
        </a>{" "}
        for the full Github repo
      </p>
    </div>
  );
}
