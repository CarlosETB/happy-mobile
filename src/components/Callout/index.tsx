import React from 'react'

// Native
import { MapCalloutProps } from 'react-native-maps'

// Private
import { CalloutStyled, Container, Text } from './styles'

const Callout: React.FC<MapCalloutProps> = (props) => {
    const { onPress, children } = props

    return (
        <CalloutStyled onPress={onPress}>
            <Container>
                <Text>{children}</Text>
            </Container>
        </CalloutStyled>
    )
}

export default Callout