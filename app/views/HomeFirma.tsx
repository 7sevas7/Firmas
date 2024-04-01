import { Text,View,FlatList,TouchableHighlight,Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React ,{useEffect, useState,useContext}from 'react';
import {getFirmaAction}from '../controllers/GetFirma'



import { RootParams } from "../stateAndProps/PropsRoot";
import { Contes, Contexx } from "../../App";

type Veneficiario = {
    idBeneficiario:string;
    idEvEcom:string;
    firmaRespInf:string;
    curp:string;
    nombre:string;
    firmaApliEv:string;

}

type RuteProps= NativeStackScreenProps<RootParams>;
export default function HomeFirmas({navigation,route}:RuteProps){
  const {imgFirma} = useContext(Contexx) as Contes;
    const [veneficiario,setveneficiario] = useState<Array<Veneficiario>>([]);
  
  
    useEffect( ()=>{
      console.log(imgFirma);
       apiVeneficiarios();
      },[]);

      const apiVeneficiarios =async ()=>{
          const usuario = await getFirmaAction("GET","fridaha");
          setveneficiario(usuario);
      };


    const keys = ()=>{
      let ran = Math.random().toString(36).substring(7);
      return ran;
    }
        return (  

            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor:'#656565'}}>
            <View >
             
            {/* <Text style={{ fontSize: 30 }}>Luz Nayeli Santander Ramírez</Text> */}
           <Text style={{ fontSize: 30,marginTop:40 }}>Seleccione un beneficiario a capturar firmas</Text>
          <FlatList
             data={veneficiario}
             renderItem={({ item, separators }) => (
               <View style={{ flexDirection: 'row', marginVertical: '2%',backgroundColor:'#eee',padding:4}}>
                 <View style={{ width: '75%', marginEnd: 10, marginLeft: '2.5%', flexDirection: 'row'}}>
                  
                   <Text style={{ width: '30%', fontSize: 20, fontWeight: 'bold',color:'black' }}>{item.idBeneficiario}</Text>
                  <Text style={{width:'30%',fontWeight: 'bold',color:'black'}}>{item.nombre}</Text>
                   <TouchableHighlight
                     activeOpacity={0.6}
                     underlayColor="#DDDDDD"
                     onPress={()=>navigation.navigate("PdfView",{IdEvCom:item.idEvEcom,firmaApliEv: item.firmaApliEv,firmaRespInf: item.firmaRespInf })} >
                     <Text style={{ fontSize: 20,color:'black' }}>{item.curp}</Text>
                   </TouchableHighlight>
                 </View>
               </View>
             )}
          keyExtractor={item => keys()}
           />
        <TouchableHighlight style={{backgroundColor:'#6b152b',padding:20, margin:20,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:10}}   onPress={apiVeneficiarios}>
              <Text style={{color:"white"}}>Recargar</Text>
           </TouchableHighlight>
         <TouchableHighlight style={{backgroundColor:'#6b152b',padding:20, margin:20,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:10}}   onPress={()=>navigation.navigate('Prueba')}>
              <Text style={{color:"white"}}>Recargar</Text>
           </TouchableHighlight>
       
           </View>
         </View>
);

        
}