import { FIRMA_DATA ,INIT_DATA} from '../endPoints';


export const  getFirmaAction =  (method:string, route:string) => {
  const config = { method: method, headers: { 'Content-Type': 'application/json', } };
  console.log("Api");
  try{
  const res = fetch(INIT_DATA+route,config)
  .then((res)=>res.json())
  .catch((err)=>{console.log(err)});
  return res;
  
  }catch(error){
    console.log(error);
  }
}

//Modificacion al context 
// export const getFirmaAction = (method:string, route:string, data:string) => {
//   console.log(data)
//   const config = { method: method, body: JSON.stringify(data), headers: { 'Content-Type': 'application/json', } };
//   console.log('RECUEST:', FIRMA_DATA + route, config);
//   return (dispatch) => {
//     if (data === 'PURGE') {
//       dispatch({ type: FIRMA_DATA_PURGE, payload: 'PURGE' })
//     } else {
//       fetch(FIRMA_DATA + route, config)
//         .then(json => json)
//         .then((responseJson) => {
//           if (responseJson) {
//             const response = {
//               isOK: true,
//               DataFirma: responseJson
//             }
//             console.log('RESPONSE FIRMA_DATA DATA: ', response);
//             dispatch({ type: FIRMA_DATA_SUCCESS, payload: response })
//           }
//           else {
//             const response = {
//               isOK: false,
//               error: responseJson
//             }
//             console.log('ERROR GET CATEGORIES DATA: ', response);
//             dispatch({ type: FIRMA_DATA_ERROR, payload: response })
//           }
//         })
//         .catch((error) => {
//           const responseError = {
//             isOK: false,
//             error: error
//           }
//           console.log('ERROR GET FIRMA_DATA DATA: ', responseError);
//           dispatch({ type: FIRMA_DATA_ERROR, payload: responseError })
//         });
//     }
//   }
// };