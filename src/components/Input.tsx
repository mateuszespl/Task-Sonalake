import React, { useState, useEffect } from "react";
import classNames from "classnames";

export const Input = ({
  label,
  classes,
  placeholder,
  value,
  handleChange,
  id,
  required,
  radio,
  checked,
  controlled,
  invalidFeedback,
  formIsValid,
}: {
  label?: any;
  classes?: any;
  placeholder?: any;
  value?: any;
  handleChange?: any;
  id?: any;
  required?: any;
  radio?: any;
  checked?: any;
  controlled?: any;
  invalidFeedback?: any;
  formIsValid?: any;
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
      {isInvalid && <div className="invalid-feedback">{invalidFeedback}</div>}
    </div>
  );
};
