import React from "react";

export interface LoadingProps {
  message: string;
}

export default function Loading({ message }: LoadingProps) {
  return (
    <div className="flex justify-center items-center h-screen p-10 text-center">
      <div className="text-5xl">
        {message}{" "}
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
