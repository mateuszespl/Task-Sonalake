import React, { useState, useEffect } from "react";
import classNames from "classnames";

import { Input } from "../../components/Input";

export const Radio = ({
  genderValue,
  setFormValue,
  formValue,
  formIsValid,
}: {
  genderValue?: any;
  setFormValue?: any;
  formValue?: any;
  formIsValid?: any;
}) => {
  const [isInvalid, setIsInvalid] = useState(false);
  useEffect(() => {
    if (genderValue !== "") {
      setIsInvalid(false);
    } else if (genderValue === "" && !formIsValid) {
      setIsInvalid(true);
    }
  }, [genderValue, formIsValid]);
  return (
    <fieldset className={classNames("form-group", { "is-invalid": isInvalid })}>
      <div className="row">
        <legend className="col-form-label col-md-2 pt-0">
          Gender<span className="text-primary">*</span>
        </legend>
        <div data-testid="radioWrapper" className="col-md-10">
          <div className="form-check d-flex flex-reverse">
            <Input
              handleChange={(e: any) =>
                setFormValue({ ...formValue, genderValue: e.target.value })
              }
              value="male"
              id="male"
              label="Male"
              required
              radio
              checked={genderValue === "male"}
              classes={{
                labelClass: "form-check-label",
                formClass: "form-check-input",
              }}
            />
          </div>
          <div className="form-check d-flex flex-reverse">
            <Input
              handleChange={(e: any) =>
                setFormValue({ ...formValue, genderValue: e.target.value })
              }
              value="female"
              id="female"
              label="Female"
              required
              radio
              checked={genderValue === "female"}
              classes={{
                labelClass: "form-check-label",
                formClass: "form-check-input",
              }}
            />
          </div>
          <div className="form-check d-flex flex-reverse">
            <Input
              handleChange={(e: any) =>
                setFormValue({ ...formValue, genderValue: e.target.value })
              }
              value="n/a"
              id="n/a"
              label="n/a"
              required
              radio
              checked={genderValue === "n/a"}
              classes={{
                labelClass: "form-check-label",
                formClass: "form-check-input",
              }}
            />
          </div>
        </div>
        {isInvalid && (
          <div
            className="invalid-feedback"
            data-testid="feedback"
            style={{ display: isInvalid ? "block" : "none" }}
          >
            You have to select gender of the character.
          </div>
        )}
      </div>
    </fieldset>
  );
};
