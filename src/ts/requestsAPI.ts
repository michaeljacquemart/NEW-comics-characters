import axios from "axios";

const urlAPI = "https://character-database.becode.xyz/characters";

// Correspondance d'un type prédefini, (objet js)
interface ICharactere {
  id?: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
}

const getCharacters = async () => {
  const response = await axios.get(`${urlAPI}`);
  return response.data;
};

const getOneCharacter = async (id: string) => {
  const response = await axios.get(`${urlAPI}/${id}`);
  return response.data;
};

// EDIT
const putCharacter = async (data: ICharactere) => {
  const response = await axios.put(`${urlAPI}/${data.id}`, data);
};

// CREATE
const postCharacter = async (data: ICharactere) => {
  const response = await axios.post(`${urlAPI}`, data);
};

// DELETE
const deleteCharacter = async (id: string) => {
  const response = await axios.delete(`${urlAPI}/${id}`);
};

export {
  getCharacters,
  getOneCharacter,
  putCharacter,
  postCharacter,
  deleteCharacter
};
