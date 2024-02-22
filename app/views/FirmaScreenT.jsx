import SignatureCapture from 'react-native-signature-capture';
import React,{useRef} from 'react';

import {StackActions} from '@react-navigation/native';
import { Button, View,StyleSheet,TouchableHighlight,Text} from 'react-native';


export default function FirmaScreen({navigation}){
   

    const _onSaveEvent =(result)=>{
            console.log(result);
    }
    const _onDragEvent =()=>{
        console.log("Loggeed");
    }

    //Eventos de botones
    const saveSign = ()=>{
        usRef.saveImage();

    }
    const resetSign =()=>{

    }
    
    return(
        <View style={{flex:1,flexDirection:'column'}}>
           <SignatureCapture
            style={[{ flex: 1 }, styles.signature]}
            ref={usRef}
            onSaveEvent={_onSaveEvent}
            onDragEvent={_onDragEvent}
            saveImageFileInExtStorage={false}
            showNativeButtons={false}
            showTitleLabel={false}
            backgroundColor="#ffffff"
            strokeColor="#000000"
            minStrokeWidth={4}
            maxStrokeWidth={4}
            viewMode={"landscape"} />
        <Text style={styles.textTitle}>Captura de Firma</Text>
            <View style={{ flexDirection: "row" }}>
                    <TouchableHighlight style={styles.buttonStyleAcep}
                        onPress={() => { saveSign() }} >
                    <Text style={styles.text}>Aceptar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonStyleReset}
                         onPress={() => { resetSign() }} >
                    <Text style={styles.text}>Reiniciar</Text>
                    </TouchableHighlight>            
            </View>
        </View>
    );


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
  