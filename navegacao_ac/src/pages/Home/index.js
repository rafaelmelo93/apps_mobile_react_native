import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';


export default function Home(){
  const navigation = useNavigation();


  function irCadastro(){
      navigation.navigate('Cadastro');
  }

  


  return(
    <View style = {styles.container}>
      
      <Text style = {styles.txt}>Bem vindo!</Text>

      <View >
      {/*Descrição */} 
      <Card style = {styles.carde}>
        <Text style={{color: '#FFF', fontSize: 14, fontWeight: 'bold'}}>O Banco Rafs oferece soluções financeiras completas para seus clientes, desde contas correntes até investimentos e empréstimos. Com atendimento personalizado e tecnologia avançada, o Banco Rafs está comprometido em proporcionar a melhor experiência bancária possível.</Text>      
      </Card>
      </View>
      
      <Button
      title="Abrir conta"
      onPress={irCadastro}
      style = {styles.botao}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    margin: 15,
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  carde: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#FFA500',
    padding: 10,    
  },  
});
