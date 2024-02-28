import { StyleSheet ,Dimensions,View,Text,Image,TouchableHighlight} from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Pdf from 'react-native-pdf';
import { RootParams } from "../../App";
import { useState,useEffect } from "react";

type RuteProps= NativeStackScreenProps<RootParams,'PdfView'>;


function PDFScreen({navigation,route}:RuteProps){
const [Pdfs , setPdfs] = useState({firmaApliEv:"",firmaRespInf:""});

useEffect(()=>{
    setPdfs({
      firmaApliEv :  route.params.firmaApliEv,
      firmaRespInf : "data:application/pdf;base64,"+route.params.firmaRespInf
    });
   
},[]);
                         
    const source = {uri: "data:application/pdf;base64,"+route.params.firmaApliEv};
    console.log(source.uri);
    return(
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
<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

<View style={{ alignItems: 'center', justifyContent: 'space-between', width: '50%' }}>
  <Image style={{ width: '40%', height: '30%' }} source={{uri:"https://miro.medium.com/v2/resize:fit:1024/1*xDi2csEAWxu95IEkaNdFUQ.png"}}></Image>

  <TouchableHighlight
    activeOpacity={0.6}
    underlayColor="#DDDDDD"
  
    style={{backgroundColor:"#e09dbd"}}
    >
    <Text style={{color:'white',fontSize:20}}>Firmar Evaluador</Text>

  </TouchableHighlight>
</View>

<View style={{ alignItems: 'center', justifyContent: 'center' }}>
  <Image style={{ width: '40%', height: '30%' }} source={{uri:"https://miro.medium.com/v2/resize:fit:1024/1*xDi2csEAWxu95IEkaNdFUQ.png"}}></Image>

  <TouchableHighlight
    activeOpacity={0.6}
    underlayColor="#DDDDDD"
   >
    <Text style={{color:'white',fontSize:20}}>Firmar Responsable de la información</Text>
  </TouchableHighlight>
</View>
</View>
</View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 25,
    },
    pdf: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }
  });

  export default PDFScreen;