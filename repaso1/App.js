import React, { useState } from 'react';
import { 
  StyleSheet,Text,View,TextInput,TouchableOpacity,ScrollView, Alert} from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  
  // Estados para las preguntas de Sí / No
  const [taller, setTaller] = useState('No');
  const [constancia, setConstancia] = useState('No');
  const [deportes, setDeportes] = useState('No');

  const handleSubmit = () => {
    // 1. Validar que no existan TextInput vacíos[span_3](start_span)[span_3](end_span)
    if (!nombre.trim() || !carrera.trim() || !semestre.trim()) {
      Alert.alert('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    // 2. Validar que el semestre sea numérico[span_4](start_span)[span_4](end_span)
    if (isNaN(semestre)) {
      Alert.alert('Error', 'El semestre debe ser un número.');
      return;
    }

    // 3. Mostrar el Alert con el resumen del registro[span_5](start_span)[span_5](end_span)
    Alert.alert(
      'Registro Exitoso',
      `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\nTaller: ${taller}\nConstancia: ${constancia}\nDeportes: ${deportes}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro de Evento Universitario</Text>
      <Text style={styles.subtitle}>Simular el registro a un congreso o evento.</Text>

      <Text style={styles.label}>Nombre completo</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.label}>Carrera</Text>
      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />

      <Text style={styles.label}>Cuatrimestre</Text>
      <TextInput
        style={styles.input}
        placeholder="Cuatrimestre"
        keyboardType="numeric"
        value={semestre}
        onChangeText={setSemestre}
      />

      {/* Pregunta 1: Taller */}
      <Text style={styles.label}>¿Asistirá al taller?</Text>
      <View style={styles.optionContainer}>
        <TouchableOpacity 
          style={[styles.optionBtn, taller === 'Si' && styles.selectedBtn]} 
          onPress={() => setTaller('Si')}>
          <Text style={[styles.optionText, taller === 'Si' && styles.selectedText]}>Sí</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.optionBtn, taller === 'No' && styles.selectedBtn]} 
          onPress={() => setTaller('No')}>
          <Text style={[styles.optionText, taller === 'No' && styles.selectedText]}>No</Text>
        </TouchableOpacity>
      </View>

      {/* Pregunta 2: Constancia */}
      <Text style={styles.label}>¿Requiere constancia?</Text>
      <View style={styles.optionContainer}>
        <TouchableOpacity 
          style={[styles.optionBtn, constancia === 'Si' && styles.selectedBtn]} 
          onPress={() => setConstancia('Si')}>
          <Text style={[styles.optionText, constancia === 'Si' && styles.selectedText]}>Sí</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.optionBtn, constancia === 'No' && styles.selectedBtn]} 
          onPress={() => setConstancia('No')}>
          <Text style={[styles.optionText, constancia === 'No' && styles.selectedText]}>No</Text>
        </TouchableOpacity>
      </View>

      {/* Pregunta 3: Deportes */}
      <Text style={styles.label}>¿Participará en actividades deportivas?</Text>
      <View style={styles.optionContainer}>
        <TouchableOpacity 
          style={[styles.optionBtn, deportes === 'Si' && styles.selectedBtn]} 
          onPress={() => setDeportes('Si')}>
          <Text style={[styles.optionText, deportes === 'Si' && styles.selectedText]}>Sí</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.optionBtn, deportes === 'No' && styles.selectedBtn]} 
          onPress={() => setDeportes('No')}>
          <Text style={[styles.optionText, deportes === 'No' && styles.selectedText]}>No</Text>
        </TouchableOpacity>
      </View>

      {/* Botón de Enviar */}
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitText}>Enviar Registro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d9534f',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    backgroundColor: '#f9f9f9',
  },
  optionContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  optionBtn: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
  selectedBtn: {
    backgroundColor: '#0275d8',
    borderColor: '#0275d8',
  },
  optionText: {
    color: '#333',
    fontWeight: '600',
  },
  selectedText: {
    color: '#fff',
  },
  submitBtn: {
    backgroundColor: '#0275d8',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});