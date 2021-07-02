import ky from "ky";

import { CharactersDataArray } from "types";
import { TypeOptions } from "react-toastify";

const prefixUrl = "http://localhost:3000/";
const client = ky.create({ prefixUrl });

const charactersApiClient = {
  getCharacters(): Promise<CharactersDataArray> {
    return client.get("characters").json();
  },
  getSpecies(): Promise<string[]> {
    return client.get("species").json();
  },
  deleteCharacter({
    id,
    name,
  }: {
    id: number;
    name: string;
  }): Promise<{ message: string; type: TypeOptions }> {
    client.delete(`characters/${id}`);
    return new Promise((resolve, reject) => {
      resolve({
        message: `${name} with id:${id} has been deleted.`,
        type: "success",
      });
      reject({
        message: `Couldn't delete ${name} with id:${id}.`,
        type: "error",
      });
    });
  },
  getCharacterByID({ id }: { id: number }): Promise<CharactersDataArray> {
    return client.get("characters", { searchParams: { id } }).json();
  },
  getCharacterByName({
    name: q,
  }: {
    name: string;
  }): Promise<CharactersDataArray> {
    return client.get("characters", { searchParams: { q } }).json();
  },
};

export default charactersApiClient;
