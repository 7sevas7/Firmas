
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Usuario } from "../stateAndProps/HeaderApi";

const GetUsuario = (usuario:Usuario)=>{

    const user:string= JSON.stringify(usuario);
    AsyncStorage.setItem('User',user);
}

export default GetUsuario;