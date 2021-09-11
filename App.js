import React from 'react';
import { StyleSheet, Text, View, ScrollView,  } from 'react-native';
export default function App() {
  return (
    <>
      <ScrollView>
        
        <View style={[styles.section1]}>
          <Text style={styles.oTexto}>Atividade 1</Text>
          <Text>José Antonio Favaro Trugilio Filho</Text>
          <Text>2019100592</Text>
          <Text>11/09/2021</Text>
        </View>
        
        <View style={styles.section2}>
          <View style={(styles.qVermelho)}/>
          <View style={(styles.qVerde)}/>
          <View style={(styles.qAzul)}/>
        </View>

      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create(
  {
    section1: {
      height: 950,
      top: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    section2: {
      height: 900,
      backgroundColor: '#EEE',
      flexDirection: 'row'
    },
    oTexto:{
      fontWeight: "bold"
    },
    qVermelho:{
      elevation:2,
      zIndex:2,
      backgroundColor: '#A20202',
      width: 50,
      height: 50,
      top:150,
      left:200
    },
    qVerde:{
      elevation:3,
      zIndex:3,
      backgroundColor: '#02FA2F',
      width: 50,
      height: 50,
      top:150,
      left: 140
    },
    qAzul:{
      elevation:1,
      zIndex:1,
      backgroundColor: '#00AAFF',
      width: 50,
      height: 50,
      top:190,
      left:100
    }
  }
);
