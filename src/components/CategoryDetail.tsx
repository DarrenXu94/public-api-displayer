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
      <table className="table p-4 bg-white shadow rounded-lg">
        <thead>
          <tr>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Name
            </th>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Description
            </th>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Link
            </th>
            <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Auth
            </th>
          </tr>
        </thead>
        <tbody>
          {categoryDetail.map((api) => {
            return (
              <tr className="text-gray-700" key={api.Link}>
                <td className="border-b-2 p-4 dark:border-dark-5">
                  <div>{api.API}</div>
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5">
                  <div>{api.Description}</div>
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5 break-all text-blue-400">
                  <a href={api.Link}>{api.Link}</a>
                </td>
                <td className="border-b-2 p-4 dark:border-dark-5">
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
