import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const EquipoView = ({ equipos, equipoSeleccionado, onEquipoSeleccionado }) => {
  const [hoveredEquipo, setHoveredEquipo] = useState(null);

  return (
    <View style={styles.equiposContainer}>
      {Object.keys(equipos).map((nombreEquipo, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onEquipoSeleccionado(nombreEquipo)}
          onMouseEnter={() => setHoveredEquipo(nombreEquipo)}
          onMouseLeave={() => setHoveredEquipo(null)}
        >
          <Text style={[
            styles.nombreEquipo,
            nombreEquipo === equipoSeleccionado ? styles.selectedNombreEquipo : null,
            nombreEquipo === hoveredEquipo ? styles.hoveredNombreEquipo : null
          ]}>
            {nombreEquipo}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  equiposContainer: {
    height: 100,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
  },
  nombreEquipo: {
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    maxWidth: 125,
    margin: 10,
  },
  selectedNombreEquipo: {
    backgroundColor: 'yellow',
  },
  hoveredNombreEquipo: {
    backgroundColor: 'lightblue',
  },
});

export default EquipoView;
