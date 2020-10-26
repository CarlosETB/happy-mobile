import React from 'react'

// Native
import { SwitchProps } from 'react-native';

// Components
import { Label } from '../Text'

// Private
import { Container, ReactSwitch } from './styles'

const Switch: React.FC<SwitchProps> = (props) => {
    const { value, onValueChange } = props

    return (
        <Container>
            <Label>Atende final de semana?</Label>
            
            <ReactSwitch 
              value={value}
              onValueChange={onValueChange}
            />
        </Container>
    )
}

export default Switch