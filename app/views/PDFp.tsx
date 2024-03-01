
import React,{Component} from "react";
import { View, Text, Dimensions, TouchableHighlight, StyleSheet, } from "react-native";
import Pdf from "react-native-pdf";
import { RootParams } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {Buffer} from 'buffer';

type RuteProps= NativeStackScreenProps<RootParams,'PdfP'>;

export default class PDFp extends Component<RuteProps>{


    render(){
        //console.log(this.props.route.params.firmaApliEv);
        const styles = StyleSheet.create({
            container: {
              flex: 1,
              marginTop: 25,
              backgroundColor:'red'
            },
            pdf: {
              flex: 1,
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
              backgroundColor:'red'
            }
          });
          //Las firmas son en formato de imagen 
          const pdfs =  Buffer.from(this.props.route.params.firmaApliEv).toString('base64');
          const source:Object = {uri:"data:application/pdf;base64,"};
          console.log(source);
        return(
            <View style={styles.container}>
                    <Pdf 
                    source={source}
                      onLoadComplete={(numberOfPages, filePath) => {
                        console.log(`number of pages: ${numberOfPages}`);
                      }}
                      onPageChanged={(page, numberOfPages) => {
                        console.log(`current page: ${page}`);
                      }}
                      onError={(error) => {
                        console.log(error);
                      }}
                      onPressLink={(uri) => {
                        console.log(`Link presse: ${uri}`)
                      }}
                      style={styles.pdf}/>
            </View>
        );
        
          
    }
    
    
}