import React, { useState, useEffect } from "react";
import classNames from "classnames";

export const Select = ({
  species,
  speciesValue,
  setFormValue,
  formValue,
  formIsValid,
}) => {
  const [isInvalid, setIsInvalid] = useState(false);
  useEffect(() => {
    if (speciesValue !== "") {
      setIsInvalid(false);
    } else if (speciesValue === "" && !formIsValid) {
      setIsInvalid(true);
    }
  }, [speciesValue, formIsValid]);
  return (
    <div className="form-group row">
      <label
        htmlFor="speciesSelect"
        className="col-lg-2 col-md-3 col-form-label"
      >
        Species<span className="text-primary">*</span>
      </label>
      <select
        data-testid="select"
        id="speciesSelect"
        className={classNames("form-control", "col-lg-10 col-md-9", {
          "is-invalid": isInvalid,
        })}
        value={speciesValue}
        onChange={(e) =>
          setFormValue({ ...formValue, speciesValue: e.target.value })
        }
        onBlur={() => speciesValue === "" && setIsInvalid(true)}
        required
      >
        {["", ...species].map((species) => (
          <option key={species}>{species}</option>
        ))}
      </select>
      {isInvalid && (
        <div data-testid="feedback" className="invalid-feedback">
          You have to select species for the character.
        </div>
      )}
    </div>
  );
};
