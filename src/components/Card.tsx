import React from "react";

export interface CardProps {
  children;
}

export default function Card({ children }: CardProps) {
  return (
    <div
      className="py-8 px-8 inline-flex 
  bg-white dark:bg-gray-400 dark:bg-opacity-10
  rounded-xl shadow-md space-y-2 m-2 cursor-pointer hover:bg-gray-50"
    >
      {children}
    </div>
  );
}
