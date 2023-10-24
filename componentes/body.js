import { StyleSheet, Text, View, Image } from 'react-native';
import JugadorView from './jugador';
import PerfilView from './perfil';

export default function BodyView() {
    return (
        <View style={styles.body}>
            <JugadorView></JugadorView>
            <PerfilView></PerfilView>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'row',
    },
});