import React from 'react'

// Native
import { Linking } from 'react-native'
 
// Components
import { Marker } from '../../../components/Map'
 
// Private
import { Container, MapStyled, Button, Text } from './styles'

interface LayoutProps {
    data: {
        latitude: number;
        longitude: number;
    },
}

const MapView: React.FC<LayoutProps> = (props) => {
    const { data } = props

    const handleOpenGoogleMaps = () => {
        Linking.openURL(`https://google.com/maps/dir/?api=1&destination=${data?.latitude},${data?.longitude}`)
      }

    return (
        <Container>
          <MapStyled 
            initialRegion={{
              latitude: data.latitude,
              longitude: data.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }} 
          >
            <Marker 
              coordinate={{ 
                latitude: data.latitude,
                longitude: data.longitude,
              }}
            />
          </MapStyled>

          <Button onPress={handleOpenGoogleMaps}>
            <Text>Ver rotas no Google Maps</Text>
          </Button>
        </Container>
    )
}

export default MapView