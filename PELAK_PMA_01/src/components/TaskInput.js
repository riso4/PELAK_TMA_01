import { Button, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function TaskInput(props) {
    const [inputText, setInputText] = useState('');

    function inputTextHandler(text) {
        setInputText(text);
    }

    function addTaskHandler() {
        props.onAddTask(inputText);
        setInputText("");
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={inputTextHandler}
                style={styles.input}
                placeholder="Zadaj úlohu... "
                value={inputText}
            />
            <Button onPress={addTaskHandler} title="ADD" />
        </View>
    )
}



const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 12,
        backgroundColor: '#753838',
    },

    input: {
        borderWidth: 3,
        borderColor: '#6f79e7',
        borderRadius: 8,
        width: '80%'
    },
});
