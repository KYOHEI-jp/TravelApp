import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto"
      backgroundColor='yellow'/>
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
  safeView: {
    flex:1 ,
    backgroundColor: 'red',
  },
  view: {
    flex:1,
    backgroundColor:"yellow",
  }
});
