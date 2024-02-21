import {
  FIRMA_DATA_SUCCESS,
  FIRMA_DATA_ERROR,
  FIRMA_DATA_PURGE,
} from '../types';

const stateFirma = {
  firmaData: {},
  firmaError: {},
};

export default getFirma = (state = stateFirma, action) => {
  switch (action.type) {
    case FIRMA_DATA_SUCCESS:
      return { ...state, firmaData: action.payload };
    case FIRMA_DATA_ERROR:
      return { ...state, firmaError: action.payload };
    case FIRMA_DATA_PURGE:
      return { ...stateFirma, purgeFirma: action.payload };
  }
  return state;
}