import React from 'react'

// Native
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Pages
import MapPage from '../pages/MapPage'
import DetailPage from '../pages/DetailPage'
import SelectMapPosition from '../pages/Create/SelectMapPosition'
import OrphanageData from '../pages/Create/OrphanageData'

// Components
import Header from '../components/Header'

const { Navigator, Screen } = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#f2f3f5' }
            }}>
                <Screen name="MapPage" component={MapPage} /> 
                <Screen 
                    options={{
                        headerShown: true,
                        header: () => <Header title='Orfanato' />
                    }}
                    name="DetailPage" 
                    component={DetailPage} 
                />
                <Screen  
                    options={{
                        headerShown: true,
                        header: () => <Header 
                        showCancel={false} title='Selecione no mapa' />
                    }}
                    name="SelectMapPosition" 
                    component={SelectMapPosition} 
                />
                <Screen
                    options={{
                        headerShown: true,
                        header: () => <Header title='Informe os dados' />
                    }} 
                    name="OrphanageData" 
                    component={OrphanageData} 
                />
            </Navigator>
        </NavigationContainer>
    )
}