import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

import charactersApiClient from "api/charactersApiClient";

export const useCharacterForm = ({
  isAddCharacterFormVariant,
}: {
  isAddCharacterFormVariant: boolean | undefined;
}) => {
  const [speciesArr, setSpeciesArr] = useState<string[]>([]);

  const { handleSubmit, register, control, setValue } = useForm();
  const {
    location: { pathname },
  } = useHistory();

  useEffect(() => {
    if (!isAddCharacterFormVariant) {
      const id = Number(pathname.split("/")[pathname.split("/").length - 1]);
      if (id) {
        charactersApiClient.getCharacterByID({ id }).then((characterData) => {
          const { name, homeworld, gender, species } = characterData[0];
          setValue("name", name);
          setValue("homeworld", homeworld);
          setValue("gender", gender);
          setValue("species", species);
        });
      }
    }

    speciesArr.length === 0 &&
      charactersApiClient
        .getSpecies()
        .then((species) => setSpeciesArr(species));
  }, [pathname, setValue, isAddCharacterFormVariant, speciesArr.length]);

  const handleFormSubmit = (data: unknown) => {
    console.log(data);
    if (isAddCharacterFormVariant) {
      // add new character
    } else {
      // edit character
    }
  };

  return {
    speciesArr,
    handleSubmit: handleSubmit(handleFormSubmit),
    register,
    control,
  };
};
