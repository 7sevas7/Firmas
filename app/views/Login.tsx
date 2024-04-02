import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootParams } from "../stateAndProps/PropsRoot"
import { View ,Text,TextInput, TouchableHighlight} from "react-native";

type RuteProps = NativeStackScreenProps<RootParams,'Login'>;
export const Login = ({navigation,route}:RuteProps)=>{
    const ingresar = ()=>{
        navigation.navigate('Home');
    }
    return(
        <View style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'#e3e3e3'}}>
            <View style={{flex:1,flexDirection:'column', width:'60%',backgroundColor:'#282a3670', marginVertical:30,borderRadius:20,alignItems:'center'}}>
                <Text style={{fontSize:30,color:'#fff', margin:20}}>
                    Ingreso
                </Text>
                {/*para ingresar al parecer creare una lista de usuario*/}
                <View style={{width:'80%'}}>
                    <Text style={{fontSize:16}}>Usuario</Text>
                    <TextInput
                    style={{
                        fontSize:20,
                        backgroundColor:"transparent",
                        borderBottomColor:"#e3e3e390",
                        borderBottomWidth:6,                        
                        padding:2,
                        color:'#fff' 
                    }}
                    />
                </View>
              <View style={{width:'80%', marginTop:30}}>
                <TouchableHighlight 
                    style={{backgroundColor:'#31b329',alignItems:'center',padding:10,borderRadius:10}}
                    onPress={ingresar}>
                    <Text style={{color:'white',fontSize:16}}>Ingresar</Text>
                </TouchableHighlight>
              </View>
              
            </View>
        </View>
    );
    
}