import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient () {
  return (
    <TouchableOpacity style={styles.Gardient}>
        <LinearGradient

    // Colores del gradient  por el boton en login
            colors={['#d6d4e0', '#b8a9c9']}
            start={{x:1, y:0}}
            end={{x:0, y:1}}
            style={styles.button}

        >
            <Text style={styles.text}>Ingresar</Text>
        </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    text: {
        fontSize:20,
        color:'gray',
        marginTop: 5,
        color: '#333',
        fontWeight:'bold',

    },
    button: {
        width: '80%',
        height: 60,
        borderRadius: 5,
        padding:10,
        marginTop:20,
        alignItems: 'center',
        justifyContent:'center',

    }
});


