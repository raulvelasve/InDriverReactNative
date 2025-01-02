import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.ImageBackground}
      source={require('./assets/city.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7
  }
});
