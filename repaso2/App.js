import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, FlatList, ImageBackground, ActivityIndicator, TouchableOpacity } from 'react-native';

export default function App() {

  //splash 2 segundos
  const [isLoadingSplash, setIsLoadingSplash] = useState(true);

  //estados del formulario
  const [Título, setTítulo] = useState('');
  const [Autor, setAutor] = useState('');
  const [Genero, setGenero] = useState('');

  //estado lista (agregamos setLibros para poder actualizar la lista)
  const [libros, setLibros] = useState([
    { id:'1', título: 'Antes de diciembre', autor: 'Johana Marcus', genero: 'Romance'},
    { id:'2', título: 'Los ojos de mi princesa', autor: 'Carlos Cuauhtémoc Sánchez', genero: 'Romance'},
    { id: '3', título: 'La teoria de la relatividad', autor: 'Cristhian Daniel Gaona', genero: 'Filosofía'}
  ]);

  //estado para controlar la espera de 4 segundos
  const [isAdding, setIsAdding] = useState(false);

  //efecto para el splash de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  //pantalla de bienvenida
 // Pantalla de bienvenida
if (isLoadingSplash) {
  return (
    <ImageBackground
      source={require('./assets/bienvenida.jpg')}
      style={styles.splashContainer}
      resizeMode="cover"
    >
      <View style={styles.splashOverlay}>
        <Text style={styles.splashTitle}>
          Bienvenido a Repaso2
        </Text>

        <Text style={styles.splashSubtitle}>
          Preparando tu biblioteca...
        </Text>

        <ActivityIndicator
          size="large"
          color="#002D62"
          style={{ marginTop: 20 }}
        />
      </View>
    </ImageBackground>
  );
}

  //funcion para validacion y espera 4s
  const handleSubmit = () => {
    //no hay campos vacios
    if (!Título.trim() || !Autor.trim() || !Genero.trim()) {
      Alert.alert('Campos incompletos', 'Se deben llenar todos los campos requeridos.')
      return;
    }

    setIsAdding(true);

    //simular espera 4s
    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        título: Título,
        autor: Autor,
        genero: Genero,
      };

      //agregar a la flatlist (corregido de nuevolibro a nuevoLibro)
      setLibros([...libros, nuevoLibro]);
      setTítulo('');
      setAutor('');
      setGenero('');
      setIsAdding(false);
      
      //alert exitoso (Corregido con backticks `` para que reconozca las variables)
      Alert.alert(
        'Tu registro fue exitoso',
        `Título: ${Título}\nAutor: ${Autor}\nGenero: ${Genero}`
      )
    }, 4000);
  }

  return (
    <ImageBackground
      source={require('./assets/fondo.jpg')}
      style={styles.background} // Corregido de backgroud a background en los estilos
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Registro de libros leídos</Text>
          <Text style={styles.subtitle}>Tus libros favoritos</Text>

          {/* Formulario corregido */}
          <View style={styles.formContainer}>
            <Text style={styles.label}>Título</Text>
            <TextInput
              style={styles.input}
              placeholder="Título del libro"
              placeholderTextColor="#888"
              value={Título}
              onChangeText={setTítulo}
            />
            <Text style={styles.label}>Autor</Text>
            <TextInput
              style={styles.input}
              placeholder="Autor del libro"
              placeholderTextColor="#888"
              value={Autor}
              onChangeText={setAutor}
            />
            <Text style={styles.label}>Género</Text>
            <TextInput
              style={styles.input}
              placeholder="Género del libro"
              placeholderTextColor="#888"
              value={Genero}
              onChangeText={setGenero}
            />

            {/* Botón condicional */}
            {isAdding ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#002D62" />
                <Text style={styles.loadingText}>Guardando libro...</Text>
              </View>
            ) : (
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Agregar libros</Text>
              </TouchableOpacity>
            )}

          </View>

          {/* Flatlist corregido */}
          <Text style={styles.subtitle}>Libros agregados</Text>
          <FlatList
            data={libros}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.cardText}>
                  {item.título} <Text style={styles.cardCategory}>({item.genero})</Text>
                </Text>
                <Text style={styles.cardAuthor}>Autor: {item.autor}</Text>
              </View>
            )}
            contentContainerStyle={styles.listContainer}
          />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashOverlay: {
    flex:1,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#002D62',
  },
  splashSubtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  background: { // Corregido el nombre del estilo
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: { // Corregido para que coincida con styles.subtitle
    fontSize: 14,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 15,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#002D62',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loadingContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  loadingText: {
    color: '#002D62',
    marginTop: 5,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 30,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardCategory: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#002D62',
  },
  cardAuthor: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});
