import React from 'react'

// Native
import { RectButtonProperties } from 'react-native-gesture-handler'

// Private
import { Container, Text, Button, IconPlus } from './styles'
 
const Footer: React.FC<RectButtonProperties> = (props) => {
    const { children, onPress } = props

    return (
      <Container>
        <Text>{children}</Text>
        <Button onPress={onPress}>
          <IconPlus />
        </Button>
    </Container>
    )
}

export default Footer