import SignatureCapture from 'react-native-signature-capture';
import React,{useRef} from 'react';

import {StackActions} from '@react-navigation/native';
import { Button, View,StyleSheet,TouchableHighlight,Text,BackHandler} from 'react-native';

type FirmaScreenProps = {
    navigation: any,
    getFirmaAction: () => void,
    firmaData: {},
    firmaError: {},
  };
  type FirmaScreenState = {};

    
//  const usRef = useRef<SignatureCapture>(null);

class FirmaScreenT extends React.Component<FirmaScreenProps,FirmaScreenState> {
     usRef = useRef<SignatureCapture|null>(null);

     state = {
      firmaData: {}
    }
    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    componentDidMount() { 
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
     
    }
    handleBackButtonClick  =()=> {
      this.props.navigation.goBack(null);
      return(true)
    }
    // static getDerivedStateFromProps = (nextProps, prevState) => {
  
    //   if (nextProps.firmaData === prevState.firmaData) {
    //     return null
    //   } else {
    //     console.log('DATA FIRMA', nextProps.firmaData)
    //     const data = nextProps.firmaData;
    //     if ('DataFirma' in data || nextProps.firmaError.error) {
    //       if (nextProps.firmaData.DataFirma) {
    //         return { firmaData: nextProps.firmaData.DataFirma };
    //       }
    //       return { modalVisible: false, error: 'no tienes conexión a internet o usuario incorrecto' };
  
    //     }
    //     return { error: '' }
    //   }
    // }
    // _cargarImagen = (imagen) => {
    //  // this.props.getFirmaAction('POST', "Firma" + this.props.navigation.getParam('tipo') + "/" + this.props.navigation.getParam('id')+'?usuario=lsantander', { imagen: imagen })
    // }

    render() {
 
      return (
        <View style={{ flex: 1, flexDirection: "column" }}>
          <SignatureCapture
            style={[{ flex: 1 }, styles.signature]}
            ref={usRef}
            onSaveEvent={_onSaveEvent}
            onDragEvent={this._onDragEvent}
            saveImageFileInExtStorage={false}
            showNativeButtons={false}
            showTitleLabel={false}
            backgroundColor="#ffffff"
            strokeColor="#000000"
            minStrokeWidth={4}
            maxStrokeWidth={4}
            viewMode={"landscape"} />
  
          <View style={{ flexDirection: "row" }}>
            <TouchableHighlight style={styles.buttonStyleAcep}
              onPress={() => { this.saveSign() }} >
              <Text>Guardar</Text>
            </TouchableHighlight>
  
            <TouchableHighlight style={styles.buttonStyleReset}
              onPress={() => { this.resetSign() }} >
              <Text>Reiniciar</Text>
            </TouchableHighlight>
  
          </View>
  
        </View>
      );
    }
  
    saveSign() {
        this.usRef.current?.saveImage();

    }
  
    resetSign() {
        this.usRef.current?.resetImage();
    
    }
  
    _onSaveEvent = () => {
      //result.encoded - for the base64 encoded png
    //   //result.pathName - for the file path name
    //   this.props.getFirmaAction('POST', "Firma" + this.props.navigation.getParam('tipo') + "/" + this.props.navigation.getParam('id'), result.encoded)
    //   if (this.props.navigation.getParam('tipo') == "Ev")
    //     goAndNavigateTowParams(this.props.navigation, 'Pdf', { id: this.props.navigation.getParam('id'), firmaApli: result.encoded, firmaResp: this.props.navigation.getParam('firmaResp') })
    //   else
    //     goAndNavigateTowParams(this.props.navigation, 'Pdf', { id: this.props.navigation.getParam('id'), firmaApli: this.props.navigation.getParam('firmaApli'), firmaResp: result.encoded })
    //   console.log(result);
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
  export default FirmaScreenT;