import React, { useState } from 'react'

// Native
import { useNavigation, useFocusEffect } from '@react-navigation/native'

// Components
import Map, { Marker } from '../../components/Map'
import Callout from '../../components/Callout'

// Services
import api from '../../services/api'

// Private
import { Container } from './styles'
import Footer from './Footer'

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const MapPage: React.FC = () => {
  const navigation = useNavigation()

  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useFocusEffect(() => {
    api.get('/orphanages').then(response => {
      setOrphanages(response.data)
    })
  } )
  
  const handleNavigationToDetail = (id: number) => {
    navigation.navigate('DetailPage', { id })
  }

  const handleNavigationToCreate = () => {
    navigation.navigate('SelectMapPosition')
  }

  return (
    <Container>
      <Map>
        {orphanages.map(data => {
            return (
              <Marker 
                key={data.id}
                coordinate={{
                  latitude: data.latitude,
                  longitude: data.longitude,
                }}>
                  <Callout onPress={() => handleNavigationToDetail(data.id)}>
                    {data.name}
                  </Callout>
                </Marker>
            )
        })}
      </Map>

      <Footer onPress={handleNavigationToCreate}>
        {orphanages.length} orfanatos encontrados
      </Footer>
    </Container>
  )
}
  
export default MapPage