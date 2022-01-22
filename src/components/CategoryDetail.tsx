import React from "react";
import { useRecoilValue } from "recoil";
import { APIInterface } from "../interfaces/api";
import { entriesQuery } from "../store/atoms";

export interface CategoryDetailProps {
  category: string;
}

export default function CategoryDetail({ category }: CategoryDetailProps) {
  const categoryDetail: APIInterface[] = useRecoilValue(entriesQuery(category));
  return (
    <div>
      {categoryDetail.map((api) => {
        return <div key={api.Link}>{api.API}</div>;
      })}
    </div>
  );
}
