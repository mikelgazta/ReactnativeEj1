import { StyleSheet, Text, View, Image } from 'react-native';
import HeaderView from './componentes/header';
import BodyView from './componentes/body';
import FooterView from './componentes/footer';

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderView></HeaderView>
      <BodyView></BodyView>
      <FooterView></FooterView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },

});
