import React from "react";
import { Button, Card, CardContent, CardHeader, Grid } from "@material-ui/core";

import { characterForm, characterFormInput } from "constant";
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
      <Card variant="outlined">
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
              <CharacterFormSelect control={control} speciesArr={speciesArr} />
              <CharacterFormRadio control={control} />
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
      </Card>
    </Grid>
  );
};
