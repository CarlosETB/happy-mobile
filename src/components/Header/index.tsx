import React from 'react'

// Native
import { StyleSheet, Text, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

interface HeaderProps {
    title: string;
    showCancel?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
    const { title, showCancel } = props
    
    const navigation = useNavigation()

    const handleNavigationToHome = () => {
        navigation.navigate('DetailPage')
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name='arrow-left' size={24} color='#15b5d6' />
            </BorderlessButton>
            
            <Text style={styles.title}>{title}</Text>
        
            {showCancel ? (
                <BorderlessButton onPress={handleNavigationToHome}>
                    <Feather name='x' size={24} color='#ff669d' />
                </BorderlessButton>
            ) : (
                <View />
            )}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#8fa7b3',
    },
})