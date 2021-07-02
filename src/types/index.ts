export type CharacterData = {
  id: number;
  name: string;
  species: string;
  gender: string;
  homeworld: string;
};

export type FormData = {
  id?: number;
  name: string;
  species: string;
  gender: string;
  homeworld: string;
};

export type LabelTypes = "species" | "gender" | "homeworld" | "id" | "name";

export type CharactersDataArray = CharacterData[];
