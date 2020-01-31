import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Welcome from './components/Welcome/Welcome'
import Counter from './components/Counter/Counter'
import Todos from './components/Todos/Todos'


const App=()=>{
  return(
    <View style={styles.container}>
      <Todos/>
    </View>
  )
}

var styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:"100%"
  }
})

export default App;