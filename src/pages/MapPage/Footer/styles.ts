// Native
import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
    left: 24px;
    right: 24px;
    bottom: 32px;
    height: 56px;
    elevation: 3;
    position: absolute;
    padding-left: 24px;
    border-radius: 20px;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    justify-content: space-between;
`

export const Text = styled.Text`
    color: #8fa7b3;
    font-family: 'Nunito_700Bold';
`

export const Button = styled(RectButton)`
    width: 56px;
    height: 56px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    background-color: #15c3d6;
`

export const IconPlus = styled(Feather).attrs({
    size: 20, 
    name: 'plus',
    color: '#FFF'
})``

