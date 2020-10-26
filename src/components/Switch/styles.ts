import styled from 'styled-components/native'

export const Container = styled.View`
    margin-top: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ReactSwitch = styled.Switch.attrs({
    thumbColor: '#fff', 
    trackColor: { 
        false: '#ccc', 
        true: '#39CC83' 
    }
})``