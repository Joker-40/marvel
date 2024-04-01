import md5 from 'md5';
import { Constants } from '../config/Constants';

export const getMD5Digest = (): {md5Hash: string, ts: number} => {
    const ts = new Date().valueOf();
    const md5Hash = md5(ts + Constants.PRIVATE_KEY + Constants.PUBLIC_KEY) 
    return {md5Hash, ts};
}