import React, { useEffect, useState } from 'react';

// Native
import { useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';

// Components
import { Title, Text } from '../../components/Text'

// Services
import api from '../../services/api';

// Private
import MapView from './MapView'
import { 
  Container, 
  CarouselView, 
  Carousel, 
  Image,
  Content,
  BoxContainer,
  Box
} from './styles'

interface ParamsProps {
  id: number;
}

interface DataProps {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  image: Array<{
    id: number;
    url: string;
  }>
}

const DetailPage: React.FC = () => {
  const route = useRoute()
  const [data, setData] = useState<DataProps>()

  const params = route.params as ParamsProps

  useEffect(() => {
    api.get(`/orphanages/${params.id}`).then(response => {
      setData(response.data)
    })
  }, [params.id])

  if (!data) {
    return (
      <Container>
        <Text>
          Carregando...
        </Text>
      </Container>
    )
  }

  return (
    <Container>
      <CarouselView>
        <Carousel>
          {data.image.map(res => {
            return <Image key={res.id} source={{ uri: res.url }} />
          })}
        </Carousel>
      </CarouselView>

      <Content>
        <Title>{data.name}</Title>
        <Text>{data.about}</Text>
      
        <MapView data={data} />

        <Title>Instruções para visita</Title>
        <Text>{data.instructions}</Text>

        <BoxContainer>
          <Box style={{
            borderColor: '#B3DAE2',
            backgroundColor: '#E6F7FB',
          }}>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <Text style={{ color: "#2AB5D1"  }}>
              {data.opening_hours}
            </Text>
          </Box>
         
          {data.open_on_weekends 
            ? (
              <Box style={{
                borderColor: '#A1E9C5',
                backgroundColor: '#EDFFF6',
              }}>
                <Feather name="info" size={40} color="#39CC83" />
                <Text style={{ color: "#39CC83"  }}>
                  Atendemos fim de semana
                </Text>
              </Box>
            ) : (
              <Box style={{
                borderColor: '#FF8CD4',
                backgroundColor: '#FEF6F9',
              }}>
                <Feather name="info" size={40} color="#FF6690" />
                <Text style={{ color: "#FF6690"  }}>
                  Não atendemos fim de semana
                </Text>
              </Box>
            )}
        </BoxContainer>
      </Content>
    </Container>
  )
}

export default DetailPage