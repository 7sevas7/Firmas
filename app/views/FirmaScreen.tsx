import SignatureCapture from 'react-native-signature-capture';
import React,{useContext, useRef} from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {  View,StyleSheet,TouchableHighlight,Text, AppRegistry,BackHandler} from 'react-native';

import { RootParams } from '../stateAndProps/PropsRoot';
import { HeaderApi } from '../businness/types/HeaderApi'; 
import { FirmasAction, PdfAction } from '../controllers/PDFRequest';

//Se ejecuta useeffect cada que inicial  la vista, entonces arre de nuevo la peticion de la primera vista y del array buscar IdEvEcom

type RuteProps= NativeStackScreenProps<RootParams,'FirmaInput'>;

 type IState={
  TypeSignature:string|number;
  IdEvEcom:number | undefined ;


}
type Imagen ={
  encoded:string,
  pathName:string

}


export default class FirmaScreen extends React.Component<RuteProps,IState>{
  state: IState={
    TypeSignature:this.props.route.params.Type,
    IdEvEcom:this.props.route.params.DataPdf.IdEvCom,
 
  }

  componentWillUnmount() {
    console.log(this.state.IdEvEcom);
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentDidMount() { 
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
   
  }
  handleBackButtonClick  =()=> {
    this.props.navigation.goBack();
    return(true)
  }

  constructor(props:RuteProps){

   super(props); 
  }

  render() {   
    //Naveg acion 
      return (
          <View style={{ flex: 1, flexDirection: "column" }}>           
          <SignatureCapture
            style={[{ flex: 1 }, styles.signature]}
            ref='sign'  
            onSaveEvent={this._onSaveEvent}
            saveImageFileInExtStorage={false}
            showNativeButtons={false}
            showTitleLabel={false}
            backgroundColor="#ffffff"
            strokeColor="#000000"
         
            //@ts-ignore
            minStrokeWidth={4}
            maxStrokeWidth={4}
            viewMode={"landscape"} 
          />
          
  <Text style={styles.textTitle}>Captura de Firma</Text>
          <View style={{ flexDirection: "row" }}>
          <TouchableHighlight style={styles.buttonStyleAcep}
              onPress={() => { this.saveSign() }} >
              <Text style={styles.text}>Aceptar{this.props.route.params.Type} </Text>
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
  _onSaveEvent= async(result:Imagen) =>{//Esta puta mamada me la pse todo un día por que no queria jalar solo se tenia que tranformar en un a arrow function 
    //EWacha bien bien por si se necesita cambiar esta function solo se ejecuta si es arrow function 
    //result.encoded - for the base64 encoded png
    console.log(result.encoded);

      const firmaImg:HeaderApi={
        method:"POST",
        route:"",
        data:result.encoded
      }


      if(this.state.TypeSignature =="Ev"){    
        firmaImg.route = "FirmaEv/"+this.state.IdEvEcom;        
        //
      }else{
        firmaImg.route = "FirmaResp/"+this.state.IdEvEcom;
        console.log("No es el avaluador ");
      } 
      //
     const mensaje :boolean = await  FirmasAction(firmaImg);

     //Se modficaran para las vistas de este en la otra vista por que no se ejecuta el apí y no se com hacerlo
     
     if(mensaje){
      this.props.navigation.navigate('PdfView',{IdEvCom:this.state.IdEvEcom,});
     }
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
  AppRegistry.registerComponent('FirmaScreen',()=>FirmaScreen);
