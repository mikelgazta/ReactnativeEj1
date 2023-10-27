import { StyleSheet, Text, View, Image } from 'react-native';
import EquipoView from './equipo';

export default function HeaderView({equipos, equipoSeleccionado, onEquipoSeleccionado}) {
    return (
        <View>
            <EquipoView equipos={equipos} equipoSeleccionado={equipoSeleccionado} onEquipoSeleccionado={onEquipoSeleccionado}></EquipoView>
        </View>
    );
}

const styles = StyleSheet.create({

});