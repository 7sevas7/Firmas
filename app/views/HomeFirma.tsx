import { Text,View,FlatList,TouchableHighlight,Button } from "react-native";
import React ,{PropsWithChildren,useEffect, useState}from 'react';
import {getFirmaAction}from '../controllers/GetFirma'
type PropPueba = {
    nombre:string
};
interface Veneficiario{
    idBeneficiario:string,
    idEvEcom:string,
    firmaRespInf:string,
    curp:string

}
export default function HomeFirmas<PropPueba>(){

    const [veneficiario,setveneficiario] = useState<Veneficiario|null>({
      idBeneficiario:"",
      idEvEcom:"",
      firmaRespInf:"",
      curp:""
    });
    useEffect( ()=>{
      console.log("Ueffect");
    async  ()=>{
      const vene = await getFirmaAction('GET','lsantander')
      setveneficiario(vene);
    };

      console.log(veneficiario);
    });

    const DATA =[
        {idBeneficiario :"1",idEvEcom:"edv", firmaApliEv:"firmas",firmaRespInf:"dasdasInfo",curp:"cupe"},
        {idBeneficiario :"2",idEvEcom:"edv", firmaApliEv:"firmas",firmaRespInf:"dasdasInfo",curp:"cupe"},
        {idBeneficiario :"3",idEvEcom:"edv", firmaApliEv:"firmas",firmaRespInf:"dasdasInfo",curp:"cupe"},
        {idBeneficiario :"4",idEvEcom:"edv", firmaApliEv:"firmas",firmaRespInf:"dasdasInfo",curp:"cupe"},
    ];
        return (  
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor:'#656565'}}>
            <View >
            <Text style={{ fontSize: 30 }}>Luz Nayeli Santander Ramírez</Text>
           <Text style={{ fontSize: 30 }}>Seleccione un beneficiario a capturar firmas</Text>
          <FlatList
             data={DATA}
             renderItem={({ item, separators }) => (
               <View style={{ flexDirection: 'row', marginVertical: '2%',backgroundColor:'#eee',padding:4}}>
                 <View style={{ width: '75%', marginEnd: 10, marginLeft: '2.5%', flexDirection: 'row'}}>
                   <Text style={{ width: '40%', fontSize: 20, fontWeight: 'bold',color:'black' }}>{item.idBeneficiario}</Text>
                   <TouchableHighlight
                     activeOpacity={0.6}
                     underlayColor="#DDDDDD"
                   >
                     <Text style={{ fontSize: 20,color:'black' }}>{item.curp}</Text>
                   </TouchableHighlight>
                 </View>
   
               </View>
             )}
             keyExtractor={item => item.idBeneficiario}
           />
           <Button title='Recargar' ></Button>
           </View>
         </View>
);

        
}