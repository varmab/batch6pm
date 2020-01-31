import React from 'react'

import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'

const Todo = (props) => {
    return (<View style={styles.todoView}>
                <Text style={styles.todoText}>{props.todo}</Text>
                <View style={styles.removeButtonView}>
                    <Button color="white" title="x" onPress={() => props.removeTodo(props.todo)} />
                </View>
            </View>)
}

var styles=StyleSheet.create({
    todoView:{
        marginTop:10,
        borderColor:"white",
        borderWidth:1,
        height:40,
        borderRadius:20,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    todoText:{
        color:"white",
        fontSize:10,
        paddingLeft:10
    },
    removeButtonView:{
        width:"10%",
        marginRight:10
    }
})

export default Todo;