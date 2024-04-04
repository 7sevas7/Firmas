import { Usuario } from "../stateAndProps/HeaderApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const LocalUser = async()=>{
const getUser:string | null | undefined = await AsyncStorage.getItem('User');
 const argumentParse:string  = getUser == null || undefined ? "": getUser; 
  const user:Usuario | string = JSON.parse(argumentParse) as Usuario;
  return user;
}
