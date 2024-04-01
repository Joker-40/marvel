import axios from 'axios';
import {Constants} from '../../config/Constants';
import {convertToAuthURL} from '../utils/CommonUtils';

const Axios = axios.create({
  baseURL: Constants.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

Axios.interceptors.request.use(
  config => {
    const newConfig = {...config};
    newConfig.url = convertToAuthURL(config.url || '');
    return newConfig;
  },
  _ => {
    return false;
  },
);

Axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default Axios;
