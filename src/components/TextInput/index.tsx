import React from 'react'

// Native
import { TextInputProps } from 'react-native'

// Components
import { Label } from '../Text'

// Private
import { Input } from './styles'

interface LayoutProps extends TextInputProps {
    label?: string;
    textarea?: boolean;
}

const TextInput: React.FC<LayoutProps> = (props) => {
    const { label, textarea, value, onChangeText } = props

    return (
        <>
            <Label>{label}</Label>
            <Input 
                value={value}
                multiline={textarea}
                onChangeText={onChangeText}
            />
        </>
    )
} 

export default TextInput