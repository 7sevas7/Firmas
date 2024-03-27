import { Text,View,FlatList,TouchableHighlight,Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React ,{useEffect, useState,useContext}from 'react';
import {getFirmaAction}from '../controllers/GetFirma'

import { RootParams } from "../stateAndProps/PropsRoot";

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

    const [veneficiario,setveneficiario] = useState<Array<Veneficiario>>([]);
  
  
    useEffect( ()=>{
        const cal =async ()=>{
          const ll = await getFirmaAction("GET","fridaha");
          setveneficiario(ll);
        };


       cal();
      },[]);

      
const imprime =()=>{
  console.log("==>"+veneficiario);
}
    
        return (  

            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor:'#656565'}}>
            <View >
              <View>
                <Text>
             
                </Text>
              </View>
            <Text style={{ fontSize: 30 }}>Luz Nayeli Santander Ramírez</Text>
           <Text style={{ fontSize: 30 }}>Seleccione un beneficiario a capturar firmas</Text>
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
             keyExtractor={item => item.idBeneficiario}
           />
           <Button title='Recargar'  onPress={imprime}/>
       
          <Button title='Ir'  onPress={()=>navigation.navigate("FirmaInput",{Nombre:"sEBASTIAN",})} /> 

           </View>
         </View>
);

        
}