import AxiosUtil from '../utils/AxiosUtil';

export default class Api {
  static getSample() {
    return AxiosUtil.get('/abc/def');
  }
}
