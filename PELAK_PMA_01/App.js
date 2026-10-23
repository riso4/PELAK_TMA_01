import { StatusBar } from 'expo-status-bar';
import { v4 as uuidv } from 'uuid';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Item from './src/components/Item';
import TaskInput from './src/components/TaskInput';

export default function App() {
  const [taskList, setTaskList] = useState([]);

  function addTaskHandler() {
    let id = "id" + Math.random().toString(16).slice(2);
    setTaskList((currentTaskList) => [...currentTaskList, { id: id, title: inputText, done: false }]);
  }


  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTaskHandler} />
      <View style={styles.taskContainer}>
        {taskList.map((task) => (
          <View style={styles.taskItem} key={task.id}>
            <Text>
              {task.id}: {task.title}
            </Text>
          </View>
        ))}
      </View>
      <FlatList
        data={taskList}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  taskContainer: {
    flex: 4,
    borderTopWidth: 3,
    padding: 24,
    backgroundColor: '#6f79e7'
  },

  taskItem: {
    margin: 10,
    padding: 5,
    backgroundColor: 'orange',
    borderRadius: 5,
  },
});
