import { View ,Text} from "react-native";
import { NativeStackScreenProps} from "@react-navigation/native-stack";


export type RootParams = {
    Nombre: undefined;

  };

  type Props = NativeStackScreenProps<RootParams,'Nombre'>;

export default function VistaPrueb({route,navigation}:Props){


    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor:'#656565'}}>
            <View >
            <Text style={{ fontSize: 30 }}></Text>

            </View>
            </View>
    );
}

