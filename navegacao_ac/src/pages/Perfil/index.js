import React, {useState} from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';


export default function Contato({ route }) {
 const navigation = useNavigation();

 navigation.setOptions({
   title: `Dados da conta ${route.params?.nomeC}`
 })



 return (
   <View style = {styles.container}>
   {/*Dados passados por json*/}
      <View style = {styles.flex1}>
          <Text style = {styles.txt}>Nome: </Text>
          <Text>{route.params?.nomeC}</Text>
      </View>

      <View style = {styles.flex1}>   
          <Text style = {styles.txt}>Idade: </Text>   
          <Text>{route.params?.idade}</Text>
      </View>

      <View style = {styles.flex1}>   
          <Text style = {styles.txt}>Gênero: </Text>
          <Text>{route.params?.selecionaGenero}</Text>
      </View>

      <View style = {styles.flex1}>   
          <Text style = {styles.txt}>Grau de ensino: </Text>
          <Text>{route.params?.escolaridade}</Text>
      </View>

      <View style = {styles.flex1}>
          <Text style = {styles.txt}>Limite escolhido: </Text>
          <Text>{route.params?.limite}</Text>
      </View>
      
      <View style = {styles.flex1}>
          <Text style = {styles.txt}>Nacionalidade: </Text>
          <Text>{route.params?.nacionalidade}</Text>
      </View>   
    
     <View style={{ width: 150, marginLeft: 10, flexDirection: 'row'}}>
     <Button
     title="Voltar"
     onPress={ () => navigation.goBack() }
     style={{ width: 150, flex: 1}}
     />
     <Text style={{marginRight: 90}}> </Text>
     <Button
     title="Tela Inicial"
     onPress={ () => navigation.dispatch(StackActions.popToTop())}
     style={{ width: 150, flex: 1}}  
     />
     </View>
   </View>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flexDirection: 'row',
    margin: 5
  },
  container: {
    marginTop: 10
  },
  txt: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});