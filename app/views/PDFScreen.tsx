import { StyleSheet, Dimensions, View, Text, Image, TouchableHighlight } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Pdf from 'react-native-pdf';
import { RootParams } from "../stateAndProps/PropsRoot";
import { useState, useEffect } from "react";
import {PdfAction} from "../controllers/PDFRequest";

type RuteProps = NativeStackScreenProps<RootParams, 'PdfView'>;
type States = {
  mainPdf: string;
  firmaApliEv: string;
  firmaRespInf: string;
};

function PDFScreen({ navigation, route }: RuteProps) {
  const [Pdfs, setFirmas] = useState<States>();

  useEffect(() => {
    //Llamando Api para pdf Principal
    Setters();
  }, []);
  const Setters = async () => {
    const mainPdf: string = await PdfAction("GET", route.params.IdEvCom);

    setFirmas({
      mainPdf: mainPdf,//Es el PDF, donde muestra todos sus datos
      firmaApliEv: route.params.firmaApliEv,//Img Firma Aplica Evaluador
      firmaRespInf: route.params.firmaRespInf//Img Firma Responsable de la información 
    });
  };
  //EV quiere decir que es la firma del Evaluadorv 
const PostFirma =(tipo:string)=>{
    navigation.navigate('FirmaInput',{Type:tipo});
}
  const source = { uri: "data:application/pdf;base64," + Pdfs?.mainPdf };
    
  return (

    <View style={styles.container}>

      <Pdf source={source}

        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link presse: ${uri}`)
        }}
        style={styles.pdf} />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',height:'40%' }}>

        <View style={{ alignItems: 'center', justifyContent: 'space-between', width: '50%' }}>
          <Image style={{ width: '50%', height: '60%' }} source={{ uri: "data:image/png;base64," + Pdfs?.firmaApliEv }}></Image>

          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={()=>PostFirma("Ev")}
            style={{ borderRadius: 10, padding: 10, marginTop: 6, backgroundColor: "#e09dbd" }}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>Firmar Evaluador</Text>

          </TouchableHighlight>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'space-between', width: '50%' }}>
          <Image style={{ width: '50%', height: '60%' }} source={{ uri: "data:image/png;base64," + Pdfs?.firmaRespInf }}></Image>

          <TouchableHighlight
            onPress={()=>PostFirma("Resp")}
            underlayColor="#DDDDDD"
            style={{ backgroundColor: '#a9453b', borderRadius: 10, padding: 10, marginTop: 6 }}
          >
            <Text style={{ color: 'white', fontSize: 20 }}>Firmar Responsable de la Información</Text>
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