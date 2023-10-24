import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function PerfilView() {
    return (
        <View style={styles.divImg}>
            <Image style={styles.divImg} source={require('../img/messi.jpg')}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    divImg: {
        flex: 3,
        flexDirection: 'column',
        margin: 5,
    },
});