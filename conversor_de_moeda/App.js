import React, { useState } from 'react';
import { View, Text, TextInput,Button, Pressable, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function App(){
  const [valorMoeda, setMoeda] = useState('USD');
  const [moedaPara, setMoedaPara] = useState('EUR');
  const [valor, setValor] = useState('');
  const [valorConvertido, setValorConvertido] = useState('');

  const taxasDeConversao = {
    USD: {
      EUR: 0.90,
      BRL: 4.91,
      USD: 1,
    },
    EUR: {
      USD: 1.11,
      BRL: 5.45,
      EUR: 1,
    },
    BRL: {
      USD: 0.20,
      EUR: 0.18,
      BRL: 1,
    },
  };

  const converterMoeda = () => {
    const taxa = taxasDeConversao[valorMoeda][moedaPara];
    const resultado = (taxa * valor).toFixed(2);
    setValorConvertido(resultado);
  };

  return (
    <View style = {styles.container}>
    {/*Título*/}
      <Text style = {styles.titulo}>Conversor de Moedas</Text>

      {/*Valor a Digitar*/}
      <View style={{flexDirection: 'row'}}>
      <Text style = {styles.txt}>Valor: </Text>
      <TextInput
        style = {styles.input}
        value={valor}
        keyboardType="numeric"
        onChangeText={(valor) => setValor(valor)}
      />
      </View>

      {/*Primeira Moeda*/}
      <Picker
        selectedValue={valorMoeda}
        onValueChange={(valor) => setMoeda(valor)}
        style = {styles.selecionarMoeda}
      >
        <Picker.Item label="USD - Dólar Americano" value="USD" />
        <Picker.Item label="EUR - Euro" value="EUR" />
        <Picker.Item label="BRL - Real Brasileiro" value="BRL" />
      </Picker>

      {/*Segunda Moeda*/}
      <Picker
        selectedValue={moedaPara}
        onValueChange={(valor) => setMoedaPara(valor)}
        style = {styles.selecionarMoeda}
      >
        <Picker.Item label="USD - Dólar Americano" value="USD" />
        <Picker.Item label="EUR - Euro" value="EUR" />
        <Picker.Item label="BRL - Real Brasileiro" value="BRL" />
      </Picker>

      {/*Botão Conversor de Moeda*/}
      
      <Pressable onPress={converterMoeda} style={styles.botao}><Text style ={{color: 'white'}}>Converter</Text></Pressable>

      {/*Resultado da Conversão*/}
      <View>
        <Text style = {styles.txt}>Resultado</Text>
        <Text style = {styles.resultado}>{valorConvertido}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#f5f1e8',
    height: 737
    
    },
    titulo: {
      fontSize: 25,
      marginTop: 25 
    },
    txt: {
      fontSize: 20,
      marginTop: 15      
    },
    input: {
      borderWidth: 1,      
      marginTop: 20,      
      width: 180
    },
    selecionarMoeda: {
      marginTop: 10,
      width: 200,
     
      
    },
    botao: {
      backgroundColor: '#4B6ADB',
      borderWidth: 2,
      borderRadius: 10,
      padding: 3,
      marginTop: 20
    },
    resultado: {      
      fontSize: 35
    }
});

