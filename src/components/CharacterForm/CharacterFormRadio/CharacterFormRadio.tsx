import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

import { characterFormRadio } from "constant";

export const CharacterFormRadio = ({
  control,
}: {
  control: Control<FieldValues>;
}) => {
  return (
    <Controller
      name={characterFormRadio.label}
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormControl component="fieldset">
          <FormLabel component="legend">{characterFormRadio.name}</FormLabel>
          <RadioGroup onChange={onChange} aria-label={characterFormRadio.label}>
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
