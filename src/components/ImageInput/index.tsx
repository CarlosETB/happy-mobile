import React from 'react'

// Native
import { Feather } from '@expo/vector-icons';

// Components
import { Label } from '../Text'

// Private
import { Container, Image, Touchable } from './styles'

interface LayoutProps {
    onPress: any;
    value: Array<string>;
}

const ImageInput: React.FC<LayoutProps> = (props) => {
    const { value, onPress } = props

    return (
        <>
            <Label>Fotos</ Label>
          
            <Container>
                {value.map(res => {
                    return  <Image key={res} source={{ uri: res }} />
                 })}
            </Container>

            <Touchable onPress={onPress}>
                <Feather name="plus" size={24} color="#15B6D6" />
            </Touchable>
        </>
    )
}

export default ImageInput