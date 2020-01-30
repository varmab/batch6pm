import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Welcome from './components/Welcome/Welcome'
import Counter from './components/Counter/Counter'


const App=()=>{
  return(
    <View style={styles.container}>
      <Counter/>
    </View>
  )
}

var styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})

export default App;