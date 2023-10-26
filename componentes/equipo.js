import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function EquipoView() {
    const equipos = ["Equipo 1", "Equipo 2", "Equipo 3"];
    
    return (
        <View style={styles.navbar}>
            {equipos.map((equipo, index) => (
                <Text key={index} style={styles.navbarText}>{equipo}</Text>
            ))}
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
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
    }
});
