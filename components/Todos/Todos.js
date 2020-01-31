import React, { useState, Fragment } from 'react'

import {
    View,
    Text,
    TextInput,
    Button,
    ScrollView,
    StyleSheet,
    SafeAreaView
} from 'react-native'

import Todo from './Todo'

const Todos = () => {
    let [todos, setTodos] = useState([]);
    let [todo, setTodo] = useState('')

    var addTodo = () => {
        setTodos([...todos, todo])
        setTodo('')
    }

    var removeTodo = (todo) => {
        setTodos(todos.filter((currentTodo) => {
            return todo != currentTodo;
        }))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Todos</Text>
            <TextInput style={styles.input} placeholderTextColor="grey"
                placeholder="Enter your todo" value={todo} onChangeText={(text) => {
                    setTodo(text)
                }} />
            <View style={styles.buttonView}>
                <Button color="white" title="Add Todo" onPress={addTodo} />
            </View>
            <ScrollView style={styles.todosListView}>
                {
                    todos.map((todo) => {
                        return (<Todo key={todo} todo={todo} removeTodo={removeTodo}/>)
                    })
                }
            </ScrollView>
        </View>

    )

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: "#3E50B4",
        width: "100%"
    },
    heading: {
        fontSize: 50,
        fontWeight: "bold",
        paddingTop: 100,
        color: "white"
    },
    input: {
        height: 40,
        borderColor: "white",
        width: "80%",
        fontSize: 25,
        color: "white"
    },
    buttonView: {
        marginTop: 10,
        backgroundColor: "#36474F",
        width: "50%"
    },
    todosListView: {

    }
})

export default Todos;