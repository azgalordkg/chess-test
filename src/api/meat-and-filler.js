import axios from "./instance";
import {MEAT_AND_FILER} from "./consts";

export const fetchMeatAndFiller = () => {
  return axios.get('', {
    params: {
      type: MEAT_AND_FILER,
    },
  });
};
