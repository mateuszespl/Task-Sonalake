import React, { useState, useEffect } from "react";
import classNames from "classnames";

export const Input = ({
  label, // inputs label body
  classes, // className props
  placeholder, // placeholder of input
  value, // value of input
  handleChange, // function for handling input changes
  id, // input id
  required, // is input required
  radio, // is input type === radio, default === text
  checked, // is input checked (for radio)
  controlled, // is input controlled
  invalidFeedback, // validation message
  formIsValid, // is outer form valid after submittion
}) => {
  const [isInvalid, setIsInvalid] = useState(false); // validation state

  // handling controlled input validation state
  useEffect(() => {
    if (controlled && value !== "") {
      setIsInvalid(false);
    } else if (value === "" && !formIsValid && controlled) {
      setIsInvalid(true);
    }
  }, [value, formIsValid, controlled]);

  const { labelClass, formClass } = classes;
  return (
    <div className="form-group row">
      {label && (
        <label htmlFor={id} className={labelClass}>
          {label}
          {required && !radio && <span className="text-primary">*</span>}
        </label>
      )}
      <input
        className={classNames(formClass, { "is-invalid": isInvalid })}
        id={id}
        type={radio ? "radio" : "text"}
        required={required}
        placeholder={placeholder}
        checked={checked}
        value={value}
        onChange={handleChange}
        onBlur={() => controlled && value === "" && setIsInvalid(true)}
      />
      {isInvalid && <div class="invalid-feedback">{invalidFeedback}</div>}
    </div>
  );
};
