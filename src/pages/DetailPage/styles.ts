import styled from 'styled-components/native'

// Shared
import { sizes } from '../../shared/sizes'

export const Container = styled.ScrollView`
    flex: 1;
`

export const CarouselView = styled.View`
    height: 240px;
`

export const Carousel = styled.ScrollView.attrs({
    horizontal: true,
    pagingEnabled: true
})``

export const Image = styled.Image.attrs({
    resizeMode: 'cover'
})`
    height: 240px;
    width: ${sizes.width}px;
`

export const Content = styled.View`
    padding: 24px;
`

export const BoxContainer = styled.View`
    margin-top: 24;
    flex-direction: row;
    justify-content: space-between;
`

export const Box = styled.View`
    width: 48%;
    padding: 20px;
    border-width: 1px;
    border-radius: 20px;
`