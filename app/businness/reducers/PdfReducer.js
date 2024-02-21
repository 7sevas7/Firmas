import {
  PDF_DATA_SUCCESS,
  PDF_DATA_ERROR,
  PDF_DATA_PURGE,
} from '../types';

const statePdf = {
  pdfData: {},
  pdfError: {},
};

export default getPdf = (state = statePdf, action) => {
  switch (action.type) {
    case PDF_DATA_SUCCESS:
      return { ...state, pdfData: action.payload };
    case PDF_DATA_ERROR:
      return { ...state, pdfError: action.payload };
    case PDF_DATA_PURGE:
      return { ...statePdf, purgePdf: action.payload };
  }
  return state;
}