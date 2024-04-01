import Axios from './Axios';

export const getComics = () => {
  return Axios.get('comics');
};
