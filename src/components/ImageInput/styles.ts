import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
`

export const Image = styled.Image`
    width: 64px;
    height: 64px;
    margin-right: 8px;
    border-radius: 20px;
    margin-bottom: 32px;
`

export const Touchable = styled.TouchableOpacity`
    height: 56px;
    border-width: 1.4px;
    border-radius: 10px;
    align-items: center;
    margin-bottom: 32px;
    border-style: dashed;
    border-color: #96D2F0;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
`