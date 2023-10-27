import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const EquipoView = ({equipos, equipoSeleccionado, onEquipoSeleccionado}) => {
  return (
    <View style={styles.equiposContainer}>
      {Object.keys(equipos).map((nombreEquipo, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onEquipoSeleccionado(nombreEquipo)}
        >
          <Text style={[
            styles.nombreEquipo,
            nombreEquipo === equipoSeleccionado ? styles.selectedNombreEquipo : null
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
    flexDirection: "row",
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
  },
  nombreEquipo: {
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    maxWidth: 125,
    margin: 5,
  },
  selectedNombreEquipo: {
    backgroundColor: 'yellow',
  },
});

export default EquipoView;
