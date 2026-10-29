import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import { ScrollView } from 'react-native';

export default function MenuScreen() {
  // Aseguramos que el estado inicial sea 'menu'
  const [screen, setScreen] = useState('menu');

 switch (screen){
  case 'tarjetas':
    contenido = <TarjetasScreen/>
  case 'safeScreen':
    contenido = <SafeScreen/>;
    break;
  case 'pressable':
    contenido = <PressableScreen/>;
  break;
  case 'textinput':
    contenido = <TextInputScreen/>
  break;
  case 'flat':
    contenido = <FlatScreen/>;
  break;
  case 'image':
    contenido = <ImageBacgroundScreen/>;
  break;
  case 'modal':
    contenido = <ModalScreen/>;
  break;
  default:
  // Vista principal del Menú
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Menu de Practicas</Text>

      
        <Button title="PRACT: TARJETAS" onPress={() => setScreen('tarjetas')} />
        <Button title="PRACT: SAFEAREAVIEW" onPress={() => setScreen('safe')} />
        <Button title="PRACT: PRESSABLE" onPress={() => setScreen('pressable')} />
        <Button title="PRACT: TEXTINPUT" onPress={() => setScreen('textinput')} />
        <Button title="PRACT: FLATLIST" onPress={() => setScreen('flatlist')} />
        <Button title="PRACT: IMAGEBACKGROUND" onPress={() => setScreen('imagebackgroung')} />
        <Button title="PRACT: MODAL" onPress={() => setScreen('modal')} />
        <Button title="PRACT: ACTIVITYINDICATOR" onPress={() => setScreen('activity')} />
    </ScrollView> 
    
  );

}
}//switch
//funcion

/*3.Zona de estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'colum',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    gap:10,
  },
  title:{
  fontSize:20,
  fontWeight:'bold',
  textAlign:'center',
  marginBottom:10,
  },
  contenidoBoton:{
  width:'100%',
  maxHeight:300,
  gap:10,
  }
});