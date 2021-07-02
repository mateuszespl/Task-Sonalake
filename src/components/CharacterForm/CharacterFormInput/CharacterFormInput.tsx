import React from "react";
import { TextField } from "@material-ui/core";
import { Control, Controller } from "react-hook-form";
import { FormData, LabelTypes } from "types";

export const CharacterFormInput = ({
  label,
  control,
}: {
  label: LabelTypes;
  control: Control<FormData>;
}) => {
  return (
    <Controller
      name={label.toLowerCase() as LabelTypes}
      control={control}
      render={({ field: { onChange, ref, value } }) => (
        <TextField
          label={label}
          onChange={onChange}
          value={value}
          variant="outlined"
          inputRef={ref}
        />
      )}
    />
  );
};
