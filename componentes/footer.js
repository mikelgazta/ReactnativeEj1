import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function FooterView() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerTex}>www.equipo.com</Text>
            <Text style={styles.footerTex}>123456789</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        height: 100,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    footerTex: {
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 1,
        height: 30,
        margin: 10,
    }
});