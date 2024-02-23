import { Text,View,FlatList,TouchableHighlight,Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React ,{PropsWithChildren,useEffect, useState}from 'react';
import {getFirmaAction}from '../controllers/GetFirma'
import Prueba from './VistaPrueb'
import { RootParams} from "./VistaPrueb";

type Veneficiario = {
    idBeneficiario:string,
    idEvEcom:string,
    firmaRespInf:string,
    curp:string,
    nombre:string

}
export default function HomeFirmas<PropPueba>(){

    const [veneficiario,setveneficiario] = useState<Array<Veneficiario>>([]);
   const navi = useNavigation<RootParams>();
  
    useEffect( ()=>{
    console.log();
        const cal =async ()=>{
          const ll = await getFirmaAction("GET","lsantander");
          setveneficiario(ll);
        };


       cal();
      },[]);

      
const imprime =()=>{
  console.log(veneficiario);
}
    
        return (  

            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor:'#656565'}}>
            <View >
              <View>
                <Text>
                  <Prueba Nombre="SS"/>
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
                     onPress={()=>console.log(item.curp)}
                   >
                     <Text style={{ fontSize: 20,color:'black' }}>{item.curp}</Text>
                   </TouchableHighlight>
                 </View>
               </View>
             )}
             keyExtractor={item => item.idBeneficiario}
           />
           <Button title='Recargar'  onPress={imprime}></Button>
           <Button title='Ir'  onPress={()=>navi.navigate("Prueba",{Nombre:"sEBASTIAN"})} />
           </View>
         </View>
);

        
}