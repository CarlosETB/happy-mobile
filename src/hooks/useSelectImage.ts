import * as ImagePicker from 'expo-image-picker'

export default (setImage?: any) => {
    const handleSelectImages = async () => {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync()
        
        if (status !== 'granted') {
          alert('Precisamos de acesso às suas fotos...') 
    
          return
        } 
    
        const result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
          mediaTypes: ImagePicker.MediaTypeOptions.Images
        })
    
        if (result.cancelled) {
          return
        }
    
        const { uri: newImage } = result
    
        setImage((image?: Array<string>) => { return { ...image, newImage } })
      }

    return { handleSelectImages }
}