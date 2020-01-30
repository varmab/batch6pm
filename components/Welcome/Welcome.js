import React, { useState } from 'react'

import { Text } from 'react-native'

const Welcome=(props)=>{
    var [clicks,setClicks]=useState(0);

    var updateClicks=()=>{
        setClicks(clicks+1)
    }

    return(
        <Text onPress={updateClicks} style={{fontSize:30}}>Welcome to {props.name} ({clicks})</Text>
    )
}

export default Welcome;