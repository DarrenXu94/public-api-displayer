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
      <table className="table rounded-lg bg-white p-4 shadow">
        <thead>
          <tr>
            <th className="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-normal text-gray-900">
              Name
            </th>
            <th className="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-normal text-gray-900">
              Description
            </th>
            <th className="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-normal text-gray-900">
              Link
            </th>
            <th className="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-normal text-gray-900">
              Auth
            </th>
          </tr>
        </thead>
        <tbody>
          {categoryDetail.map((api) => {
            return (
              <tr className="text-gray-700" key={api.Link}>
                <td className="dark:border-dark-5 border-b-2 p-4">
                  <div>{api.API}</div>
                </td>
                <td className="dark:border-dark-5 border-b-2 p-4">
                  <div>{api.Description}</div>
                </td>
                <td className="dark:border-dark-5 break-all border-b-2 p-4 text-blue-400">
                  <a href={api.Link}>{api.Link}</a>
                </td>
                <td className="dark:border-dark-5 border-b-2 p-4">
                  <div>{api.Auth}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
