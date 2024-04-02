import { FIRMA_DATA ,INIT_DATA} from '../endPoints';

//Aqui sera la configuración del usuario 
type Usuario={
  useName:string
  method:string
}
//Sera de esta manera ya que esta funcion solo se usa con estos dos parametros 
export const  getFirmaAction =  () => {
  const user:Usuario={useName:"fridaha",method:"GET"}
  const config = { method: user.method, headers: { 'Content-Type': 'application/json', } };  
  try{
  const res = fetch(INIT_DATA + user.useName, config)
  .then((res)=>res.json())
  .catch((err)=>{console.log(err)});
  return res;
  
  }catch(error){
    console.log("Error"+error);
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