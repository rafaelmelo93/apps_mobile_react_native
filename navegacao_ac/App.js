import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro';
import Perfil from './src/pages/Perfil';


const Stack = createStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">        
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title:'BANCO RAFS',
          headerStyle:{
            backgroundColor: 'orange',
            
          },
          headerTintColor: '#FFF',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold'
          }                   
          //headerShown: false,
        }}
        />
        
        <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          title: 'Cadastro',
        headerStyle:{
            backgroundColor: 'orange'
          },
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
        headerLeft: null,
        headerTitleStyle: {
            fontWeight: 'bold'
          }  
        }}
        />


        <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{          
          headerStyle:{
            backgroundColor: 'orange'
          },
          headerTintColor: '#FFF',
          headerTitleAlign: 'center',
          headerLeft: null,
          headerTitleStyle: {
            fontWeight: 'bold'
          }          
        }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  )
}
