import { StyleSheet, Dimensions, View, Text, Image, TouchableHighlight } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Pdf from 'react-native-pdf';
import { RootParams } from "../stateAndProps/PropsRoot";
import { useState, useEffect } from "react";
import {FirmasAction, PdfAction} from "../controllers/PDFRequest";
import { HeaderApi } from "../businness/types/HeaderApi";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { Beneficiario } from "./HomeFirma";
import { getFirmaAction } from "../controllers/GetFirma";

type RuteProps = NativeStackScreenProps<RootParams, 'PdfView'>;

type States = {
  mainPdf: string;
  firmaApliEv: string|undefined;
  firmaRespInf: string | undefined;
  idEvEcom:number |undefined;
};

function PDFScreen({ navigation, route }: RuteProps) {
  const [PdfsState, setFirmasState] = useState<States>();

  useEffect(() => {
    //Llamando Api para pdf Principal
    Getter();
  },[route]);
  
 
  const Getter = async () => {
    
    const bene:Array<Beneficiario> = await getFirmaAction();
    //@ts-ignore //Para poder 
    const objetivo:Beneficiario = bene.find(u=>u.idEvEcom == route.params.IdEvCom );    
    
  const header:HeaderApi={
    method:"GET",
    route:route.params.IdEvCom,
    data:""
  }
    const mainPdf: string = await PdfAction(header);

    setFirmasState({
      mainPdf: mainPdf,//Es el PDF, donde muestra todos sus datos
      firmaApliEv: objetivo.firmaApliEv,//Img Firma Aplica Evaluador
      firmaRespInf: objetivo.firmaRespInf,//Img Firma Responsable de la información 
      idEvEcom : route.params.IdEvCom
    });
  };
  //EV quiere decir que es la firma del Evaluadorv 
  const PostFirma =(tipo:string)=>{
    navigation.navigate('FirmaInput',{Type:tipo,DataPdf:{IdEvCom:PdfsState?.idEvEcom}});
  }
  const source = { uri: "data:application/pdf;base64," + PdfsState?.mainPdf };
    const Terminar = async()=>{
      const argument:HeaderApi={
        method:'POST',
        route:'concluir/'+ PdfsState?.idEvEcom,
        data:""
      }
      const concluido:boolean = await FirmasAction(argument);
      if(concluido){
        navigation.navigate('Home');
      }
    }

  return (

    <View style={styles.container}>

    {/**Visor de PDF */}
      <Pdf source={source} style={styles.pdf} />

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',height:'50%' ,width:'100%'}}>

        <View style={{ alignItems: 'center', justifyContent: 'space-between', width: '50%' }}>
          <Image style={{ width: '50%', height: '60%' }} source={{ uri: "data:image/png;base64," + PdfsState?.firmaApliEv }}></Image>

          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={()=>PostFirma("Ev")}
            style={{ borderRadius: 10, padding: 10, marginTop: 6, backgroundColor: "#e09dbd" }}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>Firmar Evaluador</Text>
          </TouchableHighlight>
        </View>
        {/* otro botton de acabar con todo*/}
        <View style={{alignItems:'center'}}>
          <TouchableHighlight 
              style={{borderRadius:10,padding:10,marginTop:6, backgroundColor:'#278d21'}}
              onPress={Terminar}>
            <Text style={{color:'white',fontSize:20}}>
              Terminar
            </Text>
          </TouchableHighlight>
        </View>

        
        {/*Tercera parte de la parte de abajo  */}
        <View style={{ alignItems: 'center', justifyContent: 'space-between', width: '50%' }}>
          <Image style={{ width: '50%', height: '60%' }} source={{ uri: "data:image/png;base64," + PdfsState?.firmaRespInf }}></Image>

          <TouchableHighlight
            onPress={()=>PostFirma("Resp")}
            underlayColor="#DDDDDD"
            style={{ backgroundColor: '#a9453b', borderRadius: 10, padding: 10, marginTop: 18 }}
          >
            <Text style={{ color: 'white', fontSize: 16, }}>Firmar Responsable de la Información</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,

  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});

export default PDFScreen;