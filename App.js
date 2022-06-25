import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FirstScreen from './src/components/screens/Getting Started';
import Weather from './src/components/screens/Main Layout';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <FirstScreen /> */}
      <Weather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030335',
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor:'red',
    // borderWidth:1
  },
});
