import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Zadaj úlohu... "/>
      <Button title="ADD"/>
      </View>
      <View style={styles.taskContainer}>
      <Text>UDALOSTI...</Text>
    </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'space-between', 
    flexDirection: 'row', 
    paddingHorizontal: 12,
    backgroundColor: '#753838',},

  taskContainer: {flex: 4, borderTopWidth: 3, padding: 24, backgroundColor: '#6f79e7' },

  container: {
    flex: 1,
  },
  
  input: {
    borderWidth: 3, 
    borderColor: '#6f79e7', 
    borderRadius: 8, 
    width: '80%'},
});
