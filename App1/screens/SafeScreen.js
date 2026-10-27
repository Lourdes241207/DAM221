/*1.Zona de importaciones*/
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/*2.Zona Render o main*/
export default function SafeScreen({ goBack }) {

  const canciones = ['1', '2', '3', '4', '5', '6', '7'];

  return (
    <SafeAreaView style={styles.container}>
      {goBack && <Button title=" Volver al Menú" onPress={goBack} />}

      <Text style={styles.titulo}>MUSICA</Text>
      
      <View style={styles.reproductor}>
        <Text style={styles.texto}>Lista de musica</Text>
        <Text>La musica mas escuchada</Text>
      </View>

      <Text style={styles.subtitulo}>Canciones disponibles</Text>

      <ScrollView 
        style={styles.lista}
        contentContainerStyle={styles.listaContainer}
        showsVerticalScrollIndicator={true}
      >
        {canciones.map((item, index) => (
          <View key={index} style={styles.tarjeta}>
            <Text style={styles.textLista}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

/*3.Zona de estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:20,

  },
  titulo:{
    fontSize:26,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:20,
  },
  reproductor:{
    backgroundColor:'white',
    padding:20,
    barderRadius:15,
    alignItems:'center',
  },

  texto:{
    fontSize:22,
    fontWeight:'bold',
    marginBottom:10,
  },
  subtitulo:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:20,
    marginBottom:10,
    textAlign:'center',
  },
  lista:{
    flex:1,
  },
  tarjetas:{
    backgroundColor:'white',
    padding:20,
    marginBottom:10,
    borderRadius:15,

  },
  textLista:{
fontSize:18,
textAling:'center',

  }
});