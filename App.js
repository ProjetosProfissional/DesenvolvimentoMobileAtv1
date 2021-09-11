import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.oTexto}>Atividade 1</Text>
      <Text>José Antonio Favaro Trugilio Filho</Text>
      <Text>2019100592</Text>
      <Text>11/09/2021</Text>
      <TouchableOpacity style={styles.button} 
                        onPress={ () => {}}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oTexto:{
    fontWeight: "bold"
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 180,
    width: 40,
    height: 40,
    margin: 5,
    marginBottom: 0,
  },
});
