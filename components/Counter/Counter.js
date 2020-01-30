import React, { useState, Fragment } from 'react';

import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'

const Counter=()=>{
    let [count, setCount]=useState(0);
    let [disabled, setDisabled]=useState(true);

    var increment=()=>{
        setCount(count+1)
        setDisabled(false);
    }

    var decrement=()=>{
        setCount(count-1)
        if(count==1){
            setDisabled(true);
        }
    }

    return(
        <Fragment>
            <Text style={styles.heading}>Counter</Text>
            <Text style={styles.countText}>{count}</Text>
            <View style={styles.buttonView}>
                <Button color="white" title="Increment" onPress={increment}/>
            </View>
            <View style={styles.buttonView}>
                <Button color="white" title="Decrement" onPress={decrement} disabled={disabled}/>
            </View>
        </Fragment>
    )
}

var styles=StyleSheet.create({
    heading:{
        fontSize:48,
        fontWeight:"bold"
    },
    countText:{
        fontSize:96,
        fontWeight:"bold"
    },
    buttonView:{
        backgroundColor:"#36474F",
        width:"90%",
        marginBottom:20
    },
    disabledButtonView:{
        backgroundColor:"#36474F",
        width:"90%",
        marginBottom:20
    }
})

export default Counter;