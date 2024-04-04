
import React, { useState,createContext, useEffect } from 'react';
//Configuracion de estilos
import { AppRegistry, StyleSheet} from 'react-native';

//Configuracion de Estados y propiedades 
import {RootParams} from './app/stateAndProps/PropsRoot';

//Vistas 
import FirmaScreen from './app/views/FirmaScreen';
import FirmaHome from './app/views/HomeFirma';
import PDFScreen from './app/views/PDFScreen';

//Configuracion de Navigate 
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { Login } from './app/views/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

//
//Acciones Api




var Stack = createNativeStackNavigator<RootParams>();

function App(): React.JSX.Element {
  const [stateShow,setShow] = useState<boolean>(false);

useEffect(()=>{

});
const VerificacionLogin =async()=>{
 
}
  return (
     <NavigationContainer>
        <Stack.Navigator initialRouteName={stateShow?'Home':'Login'}>          
       <Stack.Screen 
          name='Login' 
          component={Login}
          options={{headerShown:false}}
          />           
          <Stack.Screen 
            name="Home"
            options={{headerShown:false}}
            component={FirmaHome}
          />
          <Stack.Screen 
            name="FirmaInput"
            options={{title:"Firmas"}}
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
//AppRegistry.registerComponent('App',()=>App);
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
