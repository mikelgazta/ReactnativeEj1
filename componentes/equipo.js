import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function EquipoView() {
    return (
        <View style={styles.navbar}>
            <Text style={styles.navbarText}>Equipo 1</Text>
            <Text style={styles.navbarText}>Equipo 2</Text>
            <Text style={styles.navbarText}>Equipo 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 100,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
    },
    navbarText: {
        flexDirection: 'row',
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
    }
});