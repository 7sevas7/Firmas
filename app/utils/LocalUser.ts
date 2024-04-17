import { Usuario } from "../stateAndProps/HeaderApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LocalUser = async():Promise<Usuario|undefined>=>{
try {
const getUser:string | null | undefined = await AsyncStorage.getItem('usuario');
 const argumentParse:string  = getUser == null || undefined ? "": getUser; 
  const user:Usuario | string = JSON.parse(argumentParse) as Usuario;
  return user;
}catch{
 return undefined; 
}
 
}
export const exitUser = async()=>{
  await AsyncStorage.clear();
}
export const setLocaluser =async(user:Usuario)=>{
  const value = JSON.stringify(user);
  await AsyncStorage.setItem('usuario',value); 
}