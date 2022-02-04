import React from "react";

export interface HeadingProps {}

export default function Heading({}: HeadingProps) {
  return (
    <div
      className="flex h-full flex-col items-center justify-center p-5"
      style={{ borderBottom: "10px solid #f9fafb" }}
    >
      <h1 className="text-center text-3xl ">A Collection of Public APIs</h1>
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
