import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Importa aquí tus pantallas secundarias
// import TarjetasScreen from './TarjetasScreen';
// import SafeScreen from './SafeScreen';

export default function MenuScreen() {
  // Aseguramos que el estado inicial sea 'menu'
  const [screen, setScreen] = useState('menu');

  // Función para volver al menú desde cualquier pantalla
  const goBack = () => setScreen('menu');

  // Renders condicionales según la pantalla seleccionada
  if (screen === 'tarjetas') {
    return <TarjetasScreen goBack={goBack} />;
  }
  if (screen === 'safe') {
    return <SafeScreen goBack={goBack} />;
  }
  if (screen === 'pressable') {
    return <PressableScreen goBack={goBack} />;
  }
  if (screen === 'textinput') {
    return <TextInputScreen goBack={goBack} />;
  }
  if (screen === 'flatlist') {
    return <FlatScreen goBack={goBack} />;
  }
  if (screen === 'imagebackgroung') {
    return <ImageBackgroungScreen goBack={goBack} />;
  }
  if (screen === 'modal') {
    return <ModalScreen goBack={goBack} />;
  }
  if (screen === 'activity') {
    return <ActivityIndicatorScreen goBack={goBack} />;
  }

  // Vista principal del Menú
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu de Practicas</Text>

      <View style={styles.buttonContainer}>
        <Button title="PRACT: TARJETAS" onPress={() => setScreen('tarjetas')} />
        <Button title="PRACT: SAFEAREAVIEW" onPress={() => setScreen('safe')} />
        <Button title="PRACT: PRESSABLE" onPress={() => setScreen('pressable')} />
        <Button title="PRACT: TEXTINPUT" onPress={() => setScreen('textinput')} />
        <Button title="PRACT: FLATLIST" onPress={() => setScreen('flatlist')} />
        <Button title="PRACT: IMAGEBACKGROUND" onPress={() => setScreen('imagebackgroung')} />
        <Button title="PRACT: MODAL" onPress={() => setScreen('modal')} />
        <Button title="PRACT: ACTIVITYINDICATOR" onPress={() => setScreen('activity')} />
      </View>
    </View>
  );
}
//switch
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