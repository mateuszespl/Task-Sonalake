import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";
import { Control, Controller } from "react-hook-form";

import { characterFormRadio } from "constant";
import { FormData, LabelTypes } from "types";

export const CharacterFormRadio = ({
  control,
  label,
}: {
  control: Control<FormData>;
  label: LabelTypes;
}) => {
  return (
    <Controller
      name={label}
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormControl component="fieldset">
          <FormLabel component="legend">{characterFormRadio.name}</FormLabel>
          <RadioGroup onChange={onChange} aria-label={label}>
            {characterFormRadio.gendersArr.map((gender) => (
              <FormControlLabel
                value={gender.toLowerCase()}
                checked={value === gender.toLowerCase()}
                key={gender}
                control={<Radio />}
                label={gender}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};
