import React from "react";
import { FormInput } from "./FormInput";

export const Form = ({ setSearchedData }) => {
  return (
    <>
      <h1>List View</h1>

      <div className="row">
        <div className="col-sm-6">
          <FormInput setSearchedData={setSearchedData} />
        </div>
        <div className="col-sm-6 text-sm-right">
          <button type="button" className="btn btn-primary mb-3">
            Add New
          </button>
        </div>
      </div>
    </>
  );
};
