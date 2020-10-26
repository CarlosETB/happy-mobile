import styled from 'styled-components/native'

interface InputProps {
    multiline?: boolean;
}

export const Input = styled.TextInput.attrs({
    textAlignVertical: 'top',
})<InputProps>`
    background-color: #fff;
    border-width: 1.4px;
    border-color: #d3e2e6;
    border-radius: 10px;
    padding: 18px 24px;
    margin-bottom: 16px;
    height: ${({ multiline }) => multiline ? 110 : 56 }px;
`