import React, { useEffect } from "react";

import { Input } from "../../components/Input";
import { filterCharacters } from "../../api/helpers";
import { Button } from "../../components/Button";

export const ActionBar = ({
  setSearchedData,
  searchValue,
  setSearchValue,
}: {
  setSearchedData: any;
  searchValue: any;
  setSearchValue: any;
}) => {
  // handling debounce task, timeout reset after each keystroke
  useEffect(() => {
    let timer: any;
    if (searchValue.length) {
      timer = setTimeout(() => {
        filterCharacters(setSearchedData, searchValue, "");
      }, 200);
    }
    return () => clearTimeout(timer);
  }, [searchValue, setSearchedData]);
  return (
    <section data-testid="actionBarSection" className="actionBar p-0 m-0">
      <h1>List View</h1>
      <div className="row m-0 d-flex justify-content-between">
        <div className="col-8">
          <Input
            handleChange={(e: any) => setSearchValue(e.target.value)}
            value={searchValue}
            id="searchInput"
            label="Search"
            placeholder="Search..."
            classes={{
              labelClass: "sr-only",
              formClass: "form-control",
            }}
          />
        </div>
        <div className="col-4 text-right p-0">
          <Button
            to="/add"
            link
            classes=" btn btn-primary mb-3"
            body="Add new character"
          />
        </div>
      </div>
    </section>
  );
};
