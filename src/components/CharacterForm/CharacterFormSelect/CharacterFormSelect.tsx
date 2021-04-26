import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { FieldValues, Control, Controller } from "react-hook-form";

import { characterFormSelect } from "constant";

export const CharacterFormSelect = ({
  speciesArr,
  control,
}: {
  speciesArr: string[];
  control: Control<FieldValues>;
}) => {
  return (
    <Controller
      name={characterFormSelect.label}
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormControl variant="outlined">
          <InputLabel id={characterFormSelect.label}>
            {characterFormSelect.name}
          </InputLabel>
          {speciesArr.length > 0 && (
            <Select
              value={value}
              onChange={onChange}
              labelId={characterFormSelect.label}
              id={characterFormSelect.label}
              label={characterFormSelect.label}
            >
              {speciesArr.map((specie) => (
                <MenuItem
                  selected={specie === value}
                  value={specie}
                  key={specie}
                >
                  {specie}
                </MenuItem>
              ))}
            </Select>
          )}
        </FormControl>
      )}
    />
  );
};
