import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function PerfilView({ pokemonSeleccionado }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.pokemonImagen}
                source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonSeleccionado}.png` }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pokemonImagen: {
        width: "50%",
        height: "50%",
        margin: 5,
    },

});
