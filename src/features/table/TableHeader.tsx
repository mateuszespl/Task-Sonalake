import React, { useState } from "react";

import { tableHeaderData } from "./constants";
import { Button } from "../../components/Button";
import { fetchCharacters } from "../../api/helpers";

export const TableHeader = ({
  setCharacterData,
  currentPage,
}: {
  setCharacterData: any;
  currentPage: any;
}) => {
  const [sortOrder, setSortOrder] = useState("asc");
  return (
    <thead className="thead-light">
      <tr data-testid="tableHeader">
        {tableHeaderData.map(({ data, param }) => (
          <th scope="col" key={data}>
            <Button
              classes="btn font-weight-bold m-0 p-0"
              body={data}
              handleClick={() => {
                if (data !== "Actions") {
                  fetchCharacters(
                    setCharacterData,
                    currentPage,
                    sortOrder,
                    param
                  );
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                }
              }}
            />
          </th>
        ))}
      </tr>
    </thead>
  );
};
