// Native
import styled from 'styled-components/native'

// Components
import Map from '../../../components/Map'

export const Container = styled.View`
    overflow: hidden;
    margin: 40px 0px;
    border-width: 1.2px;
    border-radius: 20px;
    border-color: #B3DAE2;
    background-color: #E6F7FB;
`

export const MapStyled = styled(Map).attrs({
    zoomEnabled: false,
    pitchEnabled: false,
    scrollEnabled: false,
    rotateEnabled: false,
})`
    width: 100%;
    height: 150px;
`

export const Button = styled.TouchableOpacity`
    padding: 16px;
    align-items: center;
    justify-content: center;
`

export const Text = styled.Text`
    color: #0089a5;
    font-family: 'Nunito_700Bold';
`