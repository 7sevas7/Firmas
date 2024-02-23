
import React, { useState,createContext } from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,

} from 'react-native';

//Vistas 
import FirmaScreen from './app/views/FirmaScreen';
import FirmHome from './app/views/HomeFirma';

//Configuracion de Navigate 
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Acciones Api


var Stack = createNativeStackNavigator();


function App(): React.JSX.Element {
const [estado, setEstado] = useState();
  return (
    
     <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Firmas'
            component={FirmaScreen}
            options={{title:"Home"}}
          />
          
          <Stack.Screen 
          name="Home"
          component={FirmHome}
          options={{title:"El verdadero"}}
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
