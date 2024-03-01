
import React, { useState,createContext } from 'react';

import {
  StyleSheet,

} from 'react-native';

//Vistas 
import FirmaScreen from './app/views/FirmaScreen';
import FirmaHome from './app/views/HomeFirma';
import PDFScreen from './app/views/PDFScreen';


//Configuracion de Navigate 
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VistaPrueb from './app/views/VistaPrueb';
import PDFp from './app/views/PDFp';

//Acciones Api
export type PdfTypes={
  IdEvCom:string;
  firmaRespInf:string; 
  firmaApliEv:string;
};
export const Context = createContext<PdfTypes>({IdEvCom:"",firmaApliEv:"",firmaRespInf:""});

export type RootParams = {
  Home: undefined;
  FirmaInput:{Nombre:string};
  Prueba:undefined;
  PdfView : PdfTypes;
  PdfP:PdfTypes;

};
var Stack = createNativeStackNavigator<RootParams>();


function App(): React.JSX.Element {

  return (
   
     <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home"
            options={{title:"Inicio"}}
            component={FirmaHome}
          />
          <Stack.Screen 
            name="FirmaInput"
            options={{title:"Captura de Firmas"}}
            component={FirmaScreen}
            
          />
        <Stack.Screen
          name="PdfView"
          options={{title:"Visualización de Documentos"}}
          component={PDFScreen}
        />
        <Stack.Screen 
        name='PdfP'
        component={PDFp}/>
        </Stack.Navigator>
     </NavigationContainer>
       );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
