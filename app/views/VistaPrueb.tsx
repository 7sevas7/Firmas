import { View ,Text} from "react-native";
import { NativeStackScreenProps} from "@react-navigation/native-stack";
import { RootParams } from "../../App";



  type Props = NativeStackScreenProps<RootParams,'Home'>;

export default function VistaPrueb({route,navigation}:Props){

console.log(route);

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor:'#656565'}}>
            <View >
            <Text style={{ fontSize: 30 }}></Text>

            </View>
            </View>
    );
}

