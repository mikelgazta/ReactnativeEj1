import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function JugadorView({
  equipos,
  equipoSeleccionado,
  pokemonSeleccionado,
  setPokemonSeleccionado,
}) {
  const pokemons = equipos[equipoSeleccionado];

  return (
    <View style={styles.equiposContainer}>
      {pokemons.map((pokemon, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setPokemonSeleccionado(index)}
        >
          <Text style={[
            styles.nombrePokemon,
            index === pokemonSeleccionado ? styles.selectedNombreEquipo : null
          ]}>
            {pokemon.nombre}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  equiposContainer: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
  },
  nombrePokemon: {
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    maxWidth: 125,
    margin: 15,
  },
  selectedNombreEquipo: {
    backgroundColor: 'yellow',
  },
});
