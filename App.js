import { StyleSheet, Text, View, Image } from 'react-native';
import HeaderView from './componentes/header';
import BodyView from './componentes/body';
import FooterView from './componentes/footer';
import React, { useState } from 'react';

export default function App() {
  const equipos = {
    equipo1: [
        { nombre: "Bulbasaur", imagen: 1 },
        { nombre: "Ivysaur", imagen: 2 },
        { nombre: "Venusaur", imagen: 3},
        { nombre: "Charmander", imagen: 4},
        { nombre: "Charmaleon", imagen: 5 },
    ],
    equipo2: [
        { nombre: "Charizard", imagen: 6 },
        { nombre: "Squirtle", imagen: 7 },
        { nombre: "Wartortle", imagen: 8 },
        { nombre: "Blastoise", imagen: 9 },
        { nombre: "Caterpie", imagen: 10 },
    ],
    equipo3: [
        { nombre: "Metapod", imagen: 11 },
        { nombre: "Butterfree", imagen: 12},
        { nombre: "Weedle", imagen: 13 },
        { nombre: "Kakuna", imagen: 14 },
        { nombre: "Kakuna", imagen: 15 },

    ]
};

const [equipoSeleccionado, setEquipoSeleccionado] = useState('equipo1');
const [pokemonSeleccionado, setPokemonSeleccionado] = useState(0);

  return (
    <View style={styles.container}>
      <HeaderView equipos= {equipos} equipoSeleccionado={equipoSeleccionado} onEquipoSeleccionado={setEquipoSeleccionado}></HeaderView>
      <BodyView equipos={equipos} equipoSeleccionado={equipoSeleccionado} pokemonSeleccionado={pokemonSeleccionado} setPokemonSeleccionado={setPokemonSeleccionado}></BodyView>
      <FooterView></FooterView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },

});
