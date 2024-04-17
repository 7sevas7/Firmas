import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootParams } from "../stateAndProps/PropsRoot"
import { View ,Text,TouchableHighlight, StyleSheet, TextInput, Modal, Pressable} from "react-native";

import { StackActions } from "@react-navigation/native";
import React, { useState } from "react";
import GetUsuario from "../controllers/GetLogin";

//Propiedades de mi vista
type RuteProps = NativeStackScreenProps<RootParams,'Login'>;

export const Login = ({navigation,route}:RuteProps)=>{
    //Estados 
    const [showModal,setShowModal] = useState<boolean>(false);
    const [msgError,setMsgError] = useState<string>();
    
    const [userName, setUserName] = useState<string|undefined>();
  const [userPass,setUserPass] = useState<string|undefined>();

    const ingresar =async ()=>{
        if(userPass == undefined  || userName == undefined){
          setMsgError("Ingresa usuario y contraseña");
          setShowModal(true);
          return;
        }
        //Sera el llamado al api 
        //Tambien se podra mostrar el modal para en caso de que no se el ususario      
        try{
          //Aqui esta madre solo modificar tipos
          const entry =await  GetUsuario({userName:userName,passwod:userPass,method:'GET'});          
          if(entry){
            console.log("Listo para ingresar");
            navigation.dispatch(StackActions.replace('Home'));              
          }else{
            setUserName(undefined);
            setUserPass(undefined);
            setMsgError("Ingresa usuario y contraseña correctos");
           setShowModal(true);  
          }
        }catch(err){
          setUserName(undefined);
          setUserPass(undefined);
          setMsgError(String(err));
          setShowModal(true);
        } 
         }
const ModalMsg =()=>{
        return(
          <Modal
              animationType="slide"
              transparent={true}
              visible={showModal}>
                
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{msgError}</Text>
            <Pressable
            onPress={()=>setShowModal(false)}
              style={[styles.button, styles.buttonClose]}>
              <Text style={styles.textStyle}>Intentar de Nuevo</Text>
            </Pressable>
          </View>
        </View>
      </Modal> 
        );
    }
    return(
        <View style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'#e3e3e3'}}>
            <View style={{paddingBottom:30, width:'60%',backgroundColor:'#282a3670', marginVertical:30,borderRadius:20,alignItems:'center'}}>
                <Text style={{fontSize:30,color:'#fff', margin:20}}>
                    Ingresos
                </Text>
                {/*para ingresar al parecer creare una lista de usuario*/}
                <View style={{width:'80%'}}>
                    <Text style={{fontSize:16}}>Usuario</Text>
                    <TextInput
                    value={userName}
                      onChangeText={setUserName}
                      style={{
                        fontSize:20,
                        backgroundColor:"transparent",
                        borderBottomColor:"#e3e3e390",
                        borderBottomWidth:6,                        
                        padding:2,
                        color:'#fff' 
                    }}
                    placeholder="Ingresa tu Usuario"
                    />          
                    <Text style={{fontSize:16,marginTop:40}}>Contraseña</Text>
                    <TextInput
                    value={userPass}
                    onChangeText={setUserPass}
                      style={{
                        fontSize:20,
                        backgroundColor:"transparent",
                        borderBottomColor:"#e3e3e390",
                        borderBottomWidth:6,                        
                        padding:2,
                        color:'#fff' ,
                    }}
                    placeholder="Ingresa tu contraseña"
                     secureTextEntry={true}
                    />

                   </View>
              <View style={{width:'80%', marginTop:30}}>
                <TouchableHighlight 
                    style={{backgroundColor:'#31b329',alignItems:'center',padding:10,borderRadius:10}}
                    onPress={ingresar}>
                    <Text style={{color:'white',fontSize:16}}>Ingresar</Text>
                </TouchableHighlight>
              </View>
              
            </View>
         <ModalMsg/> 
        </View>
         
    );
    
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width:'50%',
    height:'50%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
 
  buttonClose: {
    backgroundColor: '#cf4c68',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    margin: 20,
    fontSize:20,
    color:'black',
    textAlign: 'center',
  },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      color:'black',
      backgroundColor:'#e3e3e3',
      paddingHorizontal: 8,
    },
  
    label: {
      position: 'absolute',
      backgroundColor: 'red',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
      color:'black',
      marginLeft:30
    },
    selectedTextStyle: {
      fontSize: 16,
      color:'black'
    },
 
    inputSearchStyle: {
      fontSize: 16,
      padding:20,
      color:'red'
    },
  });