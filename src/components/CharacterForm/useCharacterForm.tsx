import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

import charactersApiClient from "api/charactersApiClient";
import { FormData } from "types";

export const useCharacterForm = ({
  isAddCharacterFormVariant,
}: {
  isAddCharacterFormVariant: boolean | undefined;
}) => {
  const [speciesArr, setSpeciesArr] = useState<string[]>([]);

  const { handleSubmit, register, control, setValue } = useForm({
    defaultValues: { name: "", homeworld: "", gender: "", species: "" },
  });
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
          console.log(characterData[0]);
        });
      }
    }

    speciesArr.length === 0 &&
      charactersApiClient
        .getSpecies()
        .then((species) => setSpeciesArr(species));
  }, [pathname, setValue, isAddCharacterFormVariant, speciesArr.length]);

  const handleFormSubmit = ({ name, gender, homeworld, species }: FormData) => {
    if (!isAddCharacterFormVariant) {
      const id = Number(pathname.split("/")[pathname.split("/").length - 1]);
      charactersApiClient
        .editCharacter({
          name,
          gender,
          homeworld,
          species,
          id,
        })
        .then(({ message, type }) => toast(message, { type }));
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
