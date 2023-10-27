import { StyleSheet, Text, View, Image } from 'react-native';
import JugadorView from './jugador';
import PerfilView from './perfil';

export default function BodyView({equipos, equipoSeleccionado, pokemonSeleccionado, setPokemonSeleccionado}) {
    
    const url = equipos[equipoSeleccionado][pokemonSeleccionado].imagen;
    
    return (
        <View style={styles.body}>
            <JugadorView equipos={equipos} equipoSeleccionado={equipoSeleccionado} pokemonSeleccionado={pokemonSeleccionado} setPokemonSeleccionado={setPokemonSeleccionado}></JugadorView>
            <PerfilView pokemonSeleccionado={url}></PerfilView>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'row',
    },
});