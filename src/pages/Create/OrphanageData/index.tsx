import React, { useState } from 'react';

// Native
import { useNavigation, useRoute } from '@react-navigation/native';

// Components
import ImageInput from '../../../components/ImageInput'
import TextInput from '../../../components/TextInput'
import { Title } from '../../../components/Text'
import Switch from '../../../components/Switch'
import Button from '../../../components/Button'

// Hooks
import { useSelectImage } from '../../../hooks'

// Services
import api from '../../../services/api';

// Private
import { Container } from './styles'

interface ParamsProps {
  position: {
    latitude: number;
    longitude: number;
  }
}

const OrphanageData: React.FC = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const params = route.params as ParamsProps

  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpeningHours] = useState('')
  const [open_on_weekends, setOpenOnWeekends] = useState(false)
  const [image, setImage] = useState<string[]>([])

  const { handleSelectImages } = useSelectImage(setImage)

  const handleSubmit = async () => {
    const { latitude, longitude } = params.position

    const data = new FormData()

    data.append('name', name)
    data.append('about', about)
    data.append('instructions', instructions)
    data.append('opening_hours', opening_hours)
    data.append('open_on_weekends', String(open_on_weekends))
    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))
    image.forEach((res, index) => {
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: res,
      } as any)
    }) 

    await api.post('orphanages', data)

    navigation.navigate('DetailPage')
  }

  return (
    <Container>
      <Title>dados</Title>

      <TextInput 
        label='Nome'
        value={name}
        onChangeText={setName}
      />

      <TextInput 
        multiline
        label='Sobre'
        value={about}
        onChangeText={setAbout}
      />
      
      <ImageInput 
        value={image}
        onPress={handleSelectImages}
      />

      <Title>visitação</Title>

      <TextInput 
        multiline
        label='Instruções'
        value={instructions}
        onChangeText={setInstructions}
      />

      <TextInput 
        multiline
        value={opening_hours}
        label='Horario de visitas'
        onChangeText={setOpeningHours}
      />  

      <Switch 
        value={open_on_weekends}
        onValueChange={setOpenOnWeekends}
      />

      <Button onPress={handleSubmit}>Cadastrar</Button>
    </Container>
  )
}

export default OrphanageData
