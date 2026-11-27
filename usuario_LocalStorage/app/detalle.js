
import React, { useState } from 'react';
import {SafeAreaView,View,Text,StyleSheet,Pressable,Modal,Alert} from 'react-native';
import { useLocalSearchParams,router} from 'expo-router';
import {eliminarUsuario} from '../services/usuariosService';

export default function DetalleUsuarioScreen() {

  const { id, nombre, edad } = useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState(false);

  // IR A ACTUALIZAR
  const actualizar = () => {
    router.push({pathname: '/actualizar',params: {id,nombre,edad}});
  };

  // CONFIRMAR ELIMINACIÓN
  const confirmarEliminacion = async () => {
    try {
      await eliminarUsuario(id);
      setModalVisible(false);
      Alert.alert(
        'Éxito',
        'Usuario eliminado correctamente'
      );
      router.replace('/(tabs)/consulta');
    } catch (error) {

      setModalVisible(false);
      Alert.alert('Error', error.message);

    }

  };

  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Detalles del Usuario
      </Text>
      <View style={styles.card}>
        <Text style={styles.label}>
          Nombre
        </Text>
        <Text style={styles.valor}>
          {nombre}
        </Text>
        <View style={styles.linea} />
        <Text style={styles.label}>
          Edad
        </Text>
        <Text style={styles.valor}>
          {edad} años
        </Text>
        <View style={styles.linea} />
        <View style={styles.contenedorBotones}>
          <Pressable  
            style={styles.botonActualizar}
            onPress={actualizar}
          >
            <Text style={styles.textoBotonActualizar}>
              Actualizar
            </Text>
          </Pressable>

          <Pressable
            style={styles.botonEliminar}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textoBotonEliminar}>
              Eliminar
            </Text>
          </Pressable>
        </View>
      </View>
      
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >

        <View style={styles.modalFondo}>
          <View style={styles.modalContenido}>
            <Text style={styles.modalTitulo}>
              Confirmar eliminación
            </Text>
            <Text style={styles.modalTexto}>
              ¿Estás seguro de que deseas eliminar al usuario {nombre}?
            </Text>
            <View style={styles.modalBotones}>
              <Pressable
                style={styles.botonCancelar}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textoCancelar}>
                  Cancelar
                </Text>
              </Pressable>

              <Pressable
                style={styles.botonConfirmar}
                onPress={confirmarEliminacion}
              >
                <Text style={styles.textoConfirmar}>
                  Sí, eliminar
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 25,
    elevation: 5,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 8,
  },

  valor: {
    fontSize: 19,
    color: '#1F2937',
    marginBottom: 15,
  },

  linea: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 10,
  },

  contenedorBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  botonActualizar: {
    backgroundColor: '#FACC15',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },

  botonEliminar: {
    backgroundColor: '#EF4444',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginLeft: 8,
    alignItems: 'center',
  },

  textoBotonActualizar: {
    color: '#1F2937',
    fontWeight: 'bold',
  },

  textoBotonEliminar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  modalFondo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  modalContenido: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    width: '100%',
  },

  modalTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1F2937',
  },

  modalTexto: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 25,
  },

  modalBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  botonCancelar: {
    backgroundColor: '#D1D5DB',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },

  botonConfirmar: {
    backgroundColor: '#EF4444',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginLeft: 8,
    alignItems: 'center',
  },

  textoCancelar: {
    color: '#1F2937',
    fontWeight: 'bold',
  },

  textoConfirmar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

});