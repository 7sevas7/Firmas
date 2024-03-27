import SignatureCapture from 'react-native-signature-capture';
import React,{useRef} from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {  View,StyleSheet,TouchableHighlight,Text} from 'react-native';

import { RootParams } from '../stateAndProps/PropsRoot';

type RuteProps= NativeStackScreenProps<RootParams,'FirmaInput'>;




export default class FirmaScreen extends React.Component<RuteProps>{
  render() {   
    const {Nombre} = this.props.route.params;
    console.log(Nombre);
    //Navegacion 
      return (
          <View style={{ flex: 1, flexDirection: "column" }}>
           
          <SignatureCapture
            style={[{ flex: 1 }, styles.signature]}
            ref="sign"
            //@ts-ignore
            onSaveEvent={this._onSaveEvent}
            onDragEvent={this._onDragEvent}
            saveImageFileInExtStorage={false}
            showNativeButtons={false}
            showTitleLabel={false}
            backgroundColor="#ffffff"
            strokeColor="#000000"
            minStrokeWidth={4}
            maxStrokeWidth={4}
            viewMode={"landscape"} 
          />
          
  <Text style={styles.textTitle}>Captura de Firma</Text>
          <View style={{ flexDirection: "row" }}>
          <TouchableHighlight style={styles.buttonStyleAcep}
              onPress={() => { this.saveSign() }} >
              <Text style={styles.text}>Aceptar</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonStyleReset}
              onPress={() => { this.resetSign() }} >
              <Text style={styles.text}>Reiniciar</Text>
            </TouchableHighlight>            

          </View>
        </View>          
      );
  }

  saveSign() {
//@ts-ignore
    this.refs["sign"].saveImage();
  }

  resetSign() {
//@ts-ignore
      this.refs["sign"].resetImage();
  }

  _onSaveEvent(result:string) {
 
      //result.encoded - for the base64 encoded png
      //result.pathName - for the file path name
      console.log(result);
  }
  _onDragEvent() {
       // This callback will be called when the user enters signature
      console.log("dragged");
  }
}
const styles = StyleSheet.create({
    signature: {
        margin:20,
        flex: 2,
        borderColor: '#000033',
      
    },
    buttonStyleReset: {
        flex: 1,
         justifyContent: "center", 
         alignItems: "center",
         height: 50,
         backgroundColor:"#d4d02c",
        margin: 10,
        borderRadius:10,
    },
    buttonStyleAcep:{
        backgroundColor:"#52d42c",
        borderRadius:10,
        fontSize:10,
        flex: 1,
        justifyContent: "center", 
        alignItems: "center",
        height: 50,
      
       margin: 10
    },
    text:{
        color:"white",
        fontSize:20
    },
    textTitle:{
        fontSize:30,
        top:20,
        left:30,
        position:'absolute',
        color:"#000",
        
    }
});
  
