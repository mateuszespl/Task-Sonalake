import ky from "ky";

const prefixUrl = "localhost:3001";
const client = ky.create({ prefixUrl });

const charactersApiClient = {
  getCharacters() {
    return client.get("/characters").json();
  },
  getSpecies() {
    return client.get("/species").json();
  },
};

export default charactersApiClient;
