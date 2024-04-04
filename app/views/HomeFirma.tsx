import { Text,View,FlatList,TouchableHighlight,Button, StyleSheet, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React ,{useEffect, useState}from 'react';
import {getFirmaAction}from '../controllers/GetFirma'
import { RootParams } from "../stateAndProps/PropsRoot";
import { Usuario } from "../stateAndProps/HeaderApi";
import { LocalUser } from "../utils/LocalUser";

export interface Beneficiario {
    idBeneficiario:string;
    idEvEcom:number;
    firmaRespInf:string;
    curp:string;
    nombre:string;
    firmaApliEv:string;

}

type RuteProps= NativeStackScreenProps<RootParams>;
export default function HomeFirmas({navigation,route}:RuteProps){
  const [usuario, setUsuario] = useState<Usuario>();

    const [beneficiario,setBeneficiarios] = useState<Array<Beneficiario>>([]);


    useEffect( ()=>{
      console.log("HHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeHomeome");
      apiVeneficiarios();
      GetUsuario();
      },[route]);
      const GetUsuario = async ()=>{
        const us:Usuario = await LocalUser();
        setUsuario(us);
      }
      const apiVeneficiarios =async ()=>{
          const usuario = await getFirmaAction();
          setBeneficiarios(usuario);
      };


    const keys = ()=>{
      let ran = Math.random().toString(36).substring(7);
      return ran;
    }
        return (  

            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor:'#a3a3a3'}}>
              <View style={{backgroundColor:'#a3a3a3'}}>
                <View style={styleAll.cardUser}>
                  <Text style={{color:'#000',fontWeight:'bold',fontSize:16}}>{usuario?.nameUser}</Text>
                <Pressable style={styleAll.buttonExit}>
                    <Text style={{textAlign:'center'}}>I</Text>
                  </Pressable>
                </View> 

            {/* <Text style={{ fontSize: 30 }}>Luz Nayeli Santander Ramírez</Text> */}
            <View style={{flex:1,backgroundColor:'#e3e3e3',marginTop:30,borderRadius:10}}>
           <Text style={{ fontSize: 30,marginTop:20,paddingHorizontal:20,color:'#000' }}>Seleccione un beneficiario a capturar firmas</Text>
          <FlatList
             data={beneficiario}
             renderItem={({ item, separators }) => (
               <View style={{ 
                flexDirection: 'row', 
                marginVertical: '2%',
                marginHorizontal:'2%',
                backgroundColor:'#e3e3e3',
                shadowColor:'#000',
                
                  flex:0,justifyContent:'flex-start',
                  padding:4,
                  
                  shadowOffset:{
                    width:100,
                    height:0
                  },
                  shadowOpacity:0.90,
                  shadowRadius:3,
                  elevation:5,
                  borderRadius:10
                }}>
                 <View style={{ width: '75%', marginEnd: 10, marginLeft: '2.5%', flexDirection: 'row'}}>
                  
                   <Text style={{ width: '30%', fontSize: 20, fontWeight: 'bold',color:'black' }}>{item.idBeneficiario}</Text>
                  <Text style={{width:'30%',fontWeight: 'bold',color:'black'}}>{item.nombre}</Text>
                   <TouchableHighlight
                     activeOpacity={0.6}
                     underlayColor="#DDDDDD"
                     onPress={()=>navigation.navigate("PdfView",{IdEvCom:item.idEvEcom })} >
                     <Text style={{ fontSize: 20,color:'black' }}>{item.curp}</Text>
                   </TouchableHighlight>
                 </View>
               </View>
             )}
          keyExtractor={item => keys()}
           />
           </View>
        <TouchableHighlight style={{backgroundColor:'#6b152b',padding:20, margin:20,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:10}}   onPress={apiVeneficiarios}>
              <Text style={{color:"white"}}>Recargar</Text>
           </TouchableHighlight>

       
           </View>
         </View>
);

        
}
const styleAll = StyleSheet.create({
  cardUser:{
    flex:0,justifyContent:'space-between',
    flexDirection:'row',alignItems:'center',
    padding:20,backgroundColor:'#e3e3e3',
    shadowColor:'#000',
    shadowOffset:{
      width:70,
      height:100
    },
    shadowOpacity:0.90,
    shadowRadius:1,
    elevation:5,
    borderBottomLeftRadius:10,
    borderBottomEndRadius:10
  },
  buttonExit:{
    backgroundColor:'#6b152b',width:40,
    height:40, borderRadius:8, 
    display:"flex",justifyContent:"center",
    alignItems:"center"
  }
});