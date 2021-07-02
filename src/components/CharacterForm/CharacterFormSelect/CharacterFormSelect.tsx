import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { Control, Controller } from "react-hook-form";

import { characterFormSelect } from "constant";
import { FormData, LabelTypes } from "types";

export const CharacterFormSelect = ({
  speciesArr,
  control,
  label,
}: {
  speciesArr: string[];
  control: Control<FormData>;
  label: LabelTypes;
}) => {
  return (
    <Controller
      name={label}
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormControl variant="outlined">
          <InputLabel id={label}>{characterFormSelect.name}</InputLabel>
          {speciesArr.length > 0 && (
            <Select
              value={value}
              onChange={onChange}
              labelId={label}
              id={label}
              label={label}
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
