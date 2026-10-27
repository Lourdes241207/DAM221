/*1.Zona de importaciones*/
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet} from 'react-native';
import {Perfil} from '../components/Perfil.js';
import React from 'react';

/*2.Zona Render o main*/
export default function TarjetasScreen({goBack}) {
  return (

    <View style={styles.container}>

      <Text>Contenido de Tarjetas</Text>

      <Button title="Volver al menu" onPress={goBack}/>
      {/* 
      <Text>Hola mundo React Native!</Text>
      <Image source={require('./assets/wave.png')}></Image>
      <Text>--------------------------------------------------</Text>

      <Saludo></Saludo>
      <Text>--------------------------------------------------</Text>
      <Saludo2></Saludo2> 
      
      
      <Perfil style={styles.tarjeta1}nombre="Lourdes" carrera="ITIID" materia="Moviles" cuatrimestre="4"/>

      <Perfil style={styles.tarjeta2}nombre="Renata" carrera="ITIID" materia="Moviles" cuatrimestre="4"/>

      <Perfil style={styles.tarjeta3}nombre="Luisa" carrera="ITIID" materia="Moviles" cuatrimestre="4"/>

      <StatusBar style="auto" />*/}
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
    justifyContent: 'center',
  },
  tarjeta1:{backgroundColor:'lightblue'},
  tarjeta2:{backgroundColor:'lightpink'},
  tarjeta3:{backgroundColor:'blueviolet'}
});
