import Axios from './Axios';

export const getComics = () => {
  return Axios.get('comics');
};

export const getCharacters = () => {
  return Axios.get('characters');
};
