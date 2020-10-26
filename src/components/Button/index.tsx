import React from 'react'

// Native
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Touchable, Text } from './styles'

const Button: React.FC<RectButtonProperties> = (props) => {
    const { children, onPress } = props
 
    return (
        <Touchable onPress={onPress}>
            <Text>{children}</Text>
        </Touchable>
    )
}

export default Button