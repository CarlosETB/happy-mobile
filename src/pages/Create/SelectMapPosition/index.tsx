import React, { useState } from 'react';

// Native
import { useNavigation } from '@react-navigation/native';
import { MapEvent, Marker } from 'react-native-maps';

// Components
import Button from '../../../components/Button'
import Map from '../../../components/Map'

// Shared
import { mapMarker } from '../../../shared/images';

// Private
import { Container, Footer } from './styles'

const SelectMapPosition: React.FC = () => {
  const navigation = useNavigation();

  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0
  })

  const handleNextStep = () => {
    navigation.navigate('OrphanageData', { position });
  }

  const handleSelectPosition = (event: MapEvent) => {
    setPosition(event.nativeEvent.coordinate)
  }

  return (
    <Container>
      <Map onPress={handleSelectPosition}>
        {
          position.latitude !== 0 && (
            <Marker 
              icon={mapMarker}
              coordinate={{ 
                latitude: position.latitude, 
                longitude: position.longitude 
              }}
            />
          )
        } 
      </Map>

      {
        position.latitude !== 0 && (
          <Footer>
            <Button onPress={handleNextStep}>Próximo</Button>
          </Footer>
        )
      } 
    </Container>
  )
}

export default SelectMapPosition
