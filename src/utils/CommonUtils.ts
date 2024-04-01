import {Constants} from '../../config/Constants';
import {getMD5Digest} from '../../helper/CommoneHelper';

export const convertToAuthURL = (url: string): string => {
  const oAuth = getMD5Digest();
  return `${url}?ts=${oAuth.ts}&apikey=${Constants.PUBLIC_KEY}&hash=${oAuth.md5Hash}`;
};
