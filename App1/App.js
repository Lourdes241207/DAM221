/*1.Zona de importaciones*/
import { StyleSheet, View } from 'react-native';
import MenuScreen from './screens/MenuScreen';
/*2.Zona Render o main*/
export default function App() {
  return (
    <View style={styles.container}>
      <MenuScreen></MenuScreen>
      
    </View>
  );
}

/*3.Zona de estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
  
});
