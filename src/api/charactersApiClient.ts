import ky from "ky";

import { CharactersDataArray } from "types";

const prefixUrl = "http://localhost:3000/";
const client = ky.create({ prefixUrl });

const charactersApiClient = {
  getCharacters(): Promise<CharactersDataArray> {
    return client.get("characters").json();
  },
  getSpecies(): Promise<string[]> {
    return client.get("species").json();
  },
  deleteCharacter({ id }: { id: number }): Promise<string> {
    client.delete(`characters/${id}`);
    return new Promise((resolve, reject) => {
      resolve(`Character with id:${id} has been deleted.`);
      reject(`Couldn't delete Character with id:${id}`);
    });
  },
  getCharacterByID({ id }: { id: number }): Promise<CharactersDataArray> {
    return client.get("characters", { searchParams: { id } }).json();
  },
};

export default charactersApiClient;
