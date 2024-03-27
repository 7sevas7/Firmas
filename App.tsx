
import React, { useState,createContext } from 'react';
//Configuracion de estilos
import { StyleSheet} from 'react-native';

//Configuracion de Estados y propiedades 
import {PdfTypes,RootParams} from './app/stateAndProps/PropsRoot';

//Vistas 
import FirmaScreen from './app/views/FirmaScreen';
import FirmaHome from './app/views/HomeFirma';
import PDFScreen from './app/views/PDFScreen';

//Configuracion de Navigate 
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Acciones Api

export const Context = createContext<PdfTypes>({IdEvCom:"",firmaApliEv:"",firmaRespInf:""});


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
