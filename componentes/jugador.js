

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function JugadorView() {
    return (
        <View style={styles.divJug}>
            <Text style={styles.divJugText}>Jugador 1.1</Text>
            <Text style={styles.divJugText}>Jugador 1.2</Text>
            <Text style={styles.divJugText}>Jugador 1.3</Text>
            <Text style={styles.divJugText}>Jugador 1.4</Text>
            <Text style={styles.divJugText}>Jugador 1.5</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    divJug: {
        flex: 1,
        padding: 5,
        flexDirection: 'column',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
    },
    divJugText: {
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 1,
        maxWidth: 125,
        margin: 5,
    },
});