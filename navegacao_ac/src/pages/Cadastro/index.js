import React, {useState} from 'react';
import { View, Text, Button, TextInput, Switch, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


export default function Sobre({ route }) {
 const navigation = useNavigation();

 {/*Variaveis de nome e idade */}
 const [nomeC, setNomeC] = useState('');
 const [idade, setIdade] = useState('');

 {/*Variaveis Picker - genêro e escolaridade */}
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('');

  

  {/*Variavel do Slider */}
  const [limite, setLimite] = useState('');

  {/*Variavel Switch*/}
  const [nacionalidade, setNacionalidade] = useState(''); 



{/*Função que passa os daddos cadastrados por Json */}
function dadosCadastrados(){
      {/*Json registraDados */}
      const registraDados = {
        nomeC: nomeC,
        idade: idade,
        selecionaGenero: selectedValue,
        escolaridade: selectedValue1,
        limite: limite,
        nacionalidade: nacionalidade? "Brasileiro" : "Estrangeiro"
      }
      {/*Navigation passando o registraDados */}
      navigation.navigate('Perfil', registraDados);
  }

  

 return (
   <View>
     
      {/* Nome + Idade*/}
      <View style = {styles.flex1}>          
          <Text style = {styles.txt}>Nome:  </Text>
          <TextInput
            style={{borderWidth: 1, width: 150}}
            value={nomeC}
            onChangeText={(nomeC) => setNomeC(nomeC)}
          />
      </View>      

      <View style = {styles.flex1}>          
          <Text style = {styles.txt}>Idade:   </Text>
          <TextInput
          style={{borderWidth: 1, width: 150}}
            keyboardType="numeric"
            value={idade}
            onChangeText={(idade) => setIdade(idade)}
          />
      </View>

      <View style = {styles.flex1}>
          {/*Picker's */}
          <Text style = {styles.txt}>Gênero </Text>
          <Picker          
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}          
          style={{width: 250}}
          >
          <Picker.Item key={1} value={'Feminino'} label='Feminino'/>
          <Picker.Item key={2} value={'Masculino'} label='Masculino'/>
          </Picker>
      </View>

      <View style = {styles.flex1}>
          <Text style = {styles.txt}>Escolaridade  </Text>
          <Picker
          selectedValue={selectedValue1}
          onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
          style={{width: 250}}
          >
          <Picker.Item key={1} value={'Fundamental'} label='Fundamental'/>
          <Picker.Item key={2} value={'Ensino Médio incompleto'} label='Ensino Médio incompleto'/>
          <Picker.Item key={3} value={'Ensino Médio completo'} label='Ensino Médio completo'/>
          <Picker.Item key={4} value={'Superio completo'} label='Superio incompleto'/>
          <Picker.Item key={5} value={'Superio completo'} label='Superio completo'/>
          <Picker.Item key={6} value={'Mestrado'} label='Mestrado'/>
          </Picker>
      </View>

      <View>
              {/*Slider */}
              <Text style = {styles.txt}>Limite disponível</Text>
          <View style = {styles.flex1}>            
              <Slider              
              minimumValue={500}
              maximumValue={2100}
              minimumTrackTintColor='orange'
              maximumTrackTintColor='blue'
              thumbTintColor='orange'
              onValueChange={(limite) => setLimite('R$' + limite.toFixed(2))}
              style={{ flex: 1 }}
              />              
          </View>
              <Text>{limite}</Text>
      </View> 

      <View style = {styles.flex1}>
          {/*Switch */}
          
          <Switch
          value= {nacionalidade}
          onValueChange={(nacionalidade) => setNacionalidade(nacionalidade)}
          />
          <Text style = {styles.txt}>  {nacionalidade? "Brasileiro" : "Estrangeiro"}</Text>
      </View>
      
      <View style={{ width: 150, marginLeft: 10, flexDirection: 'row'}}>
        <Button
          title="Cadastrar"
          onPress={dadosCadastrados}
          style={{ width: 30, flex: 1}}
        />
        <Text style={{marginRight: 90}}> </Text>
        <Button
          title="Tela inicial"
          onPress={() => navigation.goBack()}
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
  txt: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});
