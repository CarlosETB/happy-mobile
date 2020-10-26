import styled from 'styled-components/native'
import { Callout } from 'react-native-maps'

export const CalloutStyled = styled(Callout).attrs({
    tooltip: true
})``

export const Container = styled.View`
    width: 160px;
    height: 46px;
    padding: 0px 16px;
    border-radius: 16px;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);
`

export const Text = styled.Text`
    color: #0089a5;
    font-size: 14px;
    font-family: 'Nunito_700Bold';
`