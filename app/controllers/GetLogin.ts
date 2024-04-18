import { Usuario } from "../stateAndProps/HeaderApi";
import {parse} from 'fsp-xml-parser';
import { setLocaluser } from "../utils/LocalUser";
import { LOGIN_BY_USER } from "../endPoints";
const GetUsuario = async (usuario:Usuario):Promise<boolean|void>=>{
    //const user:string= JSON.stringify(usuario);
    //AsyncStorage.setItem('User',user);
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/soap+xml");

const raw = `<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<soap12:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap12=\"http://www.w3.org/2003/05/soap-envelope\">\r\n  <soap12:Body>\r\n    <ValidarUsuario xmlns=\"http://172.16.1.42/\">\r\n      <usuario>${usuario.userName}</usuario>\r\n      <contrasena>${usuario.passwod}</contrasena>\r\n      <id_proyecto>11</id_proyecto>\r\n      <jwt>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJzaWViIiwibW9kdWxvIjoid3NVc3Vhcmlvc0xvZ2luLmFzbXgiLCJpZF9wcm95ZWN0byI6MTEsInBhc3N3b3JkIjoiZUU3U2FCQWhTNXk3UHpvIn0.oKDOaDR8TDc24Hb_f3K21MPZRtMUaz82aeN0uLX69_s</jwt>\r\n    </ValidarUsuario>\r\n  </soap12:Body>\r\n</soap12:Envelope>`;

const respuesta = await fetch(LOGIN_BY_USER, {method:'POST',headers:myHeaders,body:raw,})
  .then((response) => response.text())
  .then(res =>parse(res))
  //@ts-ignore
  .then((result) => result.root?.children[0].children[0].children[0].content)

  .catch((error) =>{ throw new Error(error);});

  try {
      if(respuesta =="true" ) {
           await setLocaluser(usuario);  
           return true;
       } 
    
  } catch (err) {
      throw new Error("Error de Storage");
  }
  
}

export default GetUsuario;