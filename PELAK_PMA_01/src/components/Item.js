import { Pressable } from "react-native"

const Item = ({ item }) => {
    return(
        <Pressable onPress={handleDone} style={item.done ? styles.taskContainerT : styles.taskContainer}>
            <Text>{item.title}</Text>
        </Pressable>
    );
};

export default Item;

const styles = StyleSheet.create({
    taskContainer: {
        borderRadius: 8,
        borderColor: 'red',
        padding: 20,
        margin: 4,
    },

    taskContainerT: {
        backgroundColor: 'green',
        padding: 20,
    },
});