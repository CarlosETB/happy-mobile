// Native
import MapView, { 
    Marker as ReactMarker, 
    PROVIDER_GOOGLE 
} from 'react-native-maps'
import styled from 'styled-components/native'

// Shared
import { mapMarker } from '../../shared/images';
import { sizes } from '../../shared/sizes'

export const Map = styled(MapView).attrs({
    provider: PROVIDER_GOOGLE,
    initialRegion: {
        latitude: -27.2092052,
        longitude: -49.6401092,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
    }
})`
    width: ${sizes.width}px;
    height: ${sizes.height}px;
`

export const Marker = styled(ReactMarker).attrs({
    icon: mapMarker,
    calloutAnchor: {
        x: 2.2,
        y: 0.7
    }
})``