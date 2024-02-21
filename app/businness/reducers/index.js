import { combineReducers } from 'redux';
import InitialReducer from './InitialReducer';
import PdfReducer from './PdfReducer';
import FirmaReducer from './FirmaReducer'
const rootReducer = combineReducers({
  initial: InitialReducer,
  pdf: PdfReducer,
  firma: FirmaReducer
});

export default rootReducer;