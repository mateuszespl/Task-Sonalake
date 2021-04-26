import React from "react";
import { TextField } from "@material-ui/core";
import { Control, Controller, FieldValues } from "react-hook-form";

export const CharacterFormInput = ({
  label,
  control,
}: {
  label: string;
  control: Control<FieldValues>;
}) => {
  return (
    <Controller
      name={label.toLowerCase()}
      control={control}
      render={({ field: { onChange, ref } }) => (
        <TextField
          label={label}
          onChange={onChange}
          variant="outlined"
          inputRef={ref}
        />
      )}
    />
  );
};
