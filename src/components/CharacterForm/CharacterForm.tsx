import React from "react";
import { Button, Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import {
  characterForm,
  characterFormInput,
  characterFormRadio,
  characterFormSelect,
} from "constant";

import { useCharacterForm } from "./useCharacterForm";
import { CharacterFormSelect } from "./CharacterFormSelect/CharacterFormSelect";
import { CharacterFormRadio } from "./CharacterFormRadio/CharacterFormRadio";
import { CharacterFormInput } from "./CharacterFormInput/CharacterFormInput";

export const CharacterForm = ({
  isAddCharacterFormVariant,
}: {
  isAddCharacterFormVariant?: boolean;
}) => {
  const { speciesArr, handleSubmit, control } = useCharacterForm({
    isAddCharacterFormVariant,
  });
  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={12}>
        <Card variant="outlined">
          <Grid item>
            <CardHeader
              title={
                isAddCharacterFormVariant
                  ? characterForm.addHeader
                  : characterForm.editHeader
              }
            />
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container direction="column">
                  <CharacterFormInput
                    label={characterFormInput.nameLabel}
                    control={control}
                  />
                  <CharacterFormSelect
                    control={control}
                    label={characterFormSelect.label}
                    speciesArr={speciesArr}
                  />
                  <CharacterFormRadio
                    label={characterFormRadio.label}
                    control={control}
                  />
                  <CharacterFormInput
                    label={characterFormInput.homeworldLabel}
                    control={control}
                  />
                  <Button type="submit" variant="contained">
                    {isAddCharacterFormVariant
                      ? characterForm.addButton
                      : characterForm.editButton}
                  </Button>
                </Grid>
              </form>
            </CardContent>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};
