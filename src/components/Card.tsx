import React from "react";

export interface CardProps {
  children;
}

export default function Card({ children }: CardProps) {
  return (
    <div
      className="m-2 inline-flex cursor-pointer 
  space-y-2 rounded-xl bg-white
  py-8 px-8 shadow-md hover:bg-gray-50 dark:bg-gray-400 dark:bg-opacity-10"
    >
      {children}
    </div>
  );
}
