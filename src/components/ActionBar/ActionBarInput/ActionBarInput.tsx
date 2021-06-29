import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useCallback, useState } from "react";
import { debounce } from "lodash";
import { Link } from "react-router-dom";

import charactersApiClient from "api/charactersApiClient";
import { actionBarInput, routes } from "constant";
import { CharactersDataArray } from "types";

export const ActionBarInput = () => {
  const linkStyle = { width: "100%", color: "unset", textDecoration: "unset" };

  const [filteredCharactersArray, setFilteredCharactersArray] =
    useState<CharactersDataArray>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value &&
      charactersApiClient
        .getCharacterByName({ name: e.target.value })
        .then((data) => setFilteredCharactersArray(data));
  };
  const debouncedHandleChange = useCallback(debounce(handleChange, 200), []);
  return (
    <Autocomplete
      options={filteredCharactersArray}
      getOptionLabel={({ name: characterName }) => characterName}
      renderOption={({ name: characterName, id }) => (
        <Link style={linkStyle} to={`${routes.details.path}/${id}`}>
          {characterName}
        </Link>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          label={actionBarInput.textField.label}
          variant="outlined"
          size="small"
          onChange={(e) => {
            e.persist();
            debouncedHandleChange(e as React.ChangeEvent<HTMLInputElement>);
          }}
        />
      )}
    />
  );
};
