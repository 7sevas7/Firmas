
import React, { useState,createContext } from 'react';

import {
  StyleSheet,

} from 'react-native';

//Vistas 
import FirmaScreen from './app/views/FirmaScreen';
import FirmaHome from './app/views/HomeFirma';


//Configuracion de Navigate 
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VistaPrueb from './app/views/VistaPrueb';

//Acciones Api

export type RootParams = {
  Home: undefined;
  FirmaInput:{Nombre:string};
  Prueba:undefined;


};
var Stack = createNativeStackNavigator<RootParams>();


function App(): React.JSX.Element {


  return (
    
     <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home"
            component={FirmaHome}
          />
          <Stack.Screen 
            name="FirmaInput"
            component={FirmaScreen}
            
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
