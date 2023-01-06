import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput,TouchableOpacity, Button } from 'react-native';
import ButtonGradient from './ButtonGradient';


// Login 1, agregado LinearGradient, estilos, image, el input tiene securetextentry 


export default function App() {
  return (
    <View style={styles.container}>
     
      <Text style={styles.titulo}> Hola!!</Text>
      <Text style={styles.subtitulo}> Ingresa tu Cuenta</Text>
        <TextInput
          placeholder='Nombre de usuario'
            style={styles.textInput}          
          />
        <TextInput
          placeholder='Contraseña'
          style={styles.textInput}
          secureTextEntry={true}


          />

        <Text style={styles.subtitulo2}> Olvido Contraseña?</Text>

        <ButtonGradient/>

        <Text style={styles.subtitulo3}> No tiene Cuenta? Registrese</Text>
        
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize:100,
    color: '#333',
    fontWeight:'bold'
  },
  subtitulo: {
    fontSize:30,
    color: 'grey',
  },
  subtitulo2: {
    fontSize:15,
    color: 'grey',
    padding:10,
  },

  textInput : {
    padding:10,
    width:'80%',
    height: 50,
    marginTop: 10,
    borderRadius:20,
    backgroundColor:'white'
  },
  subtitulo3:{
    color: '#333',
    marginTop: 40,
    fontSize:20,
  
  }

});
