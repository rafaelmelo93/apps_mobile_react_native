import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable} from 'react-native';


export default function App(){


  return(
    <View style={styles.container}>
        <View style={styles.topView}>

        <Text style={{marginBottom: 20, marginTop: 50, fontSize: 30, fontWeight: 'bold'}}>Vagas</Text>

          <ScrollView vertical={true}>


            {/*Vagas de emprego */}
            <View style={styles.item}>
              <Text style={styles.vaga}>Desenvolvedor Backend</Text>
              <Text style={styles.itemText}>Salário: R$3000,00 </Text>
              <Text style={styles.itemText}>Descrição: O desenvolvedor backend é responsável pela programação e manutenção da parte do sistema que fica nos bastidores.</Text>
              <Text style={styles.itemText}>Contato: +55 (11) 4002-8922</Text>
              <Pressable style={styles.botao}><Text style={styles.btnText}>Candidatar-se</Text></Pressable>
            </View>

            <View style={styles.item}>
              <Text style={styles.vaga}>Engenheiro de Dados</Text>
              <Text style={styles.itemText}>Salário: R$4500,00 </Text>
              <Text style={styles.itemText}>Descrição: Vaga para Engenheiro(a) de Dados para desenvolvimento de soluções de armazenamento e processamento distribuído de dados.</Text>
              <Text style={styles.itemText}>Contato: +55 (11) 4002-8922</Text>
              <Pressable style={styles.botao}><Text style={styles.btnText}>Candidatar-se</Text></Pressable>
            </View>

            <View style={styles.item}>
              <Text style={styles.vaga}>Dev. Full Stack</Text>
              <Text style={styles.itemText}>Salário: R$7570,00 </Text>
              <Text style={styles.itemText}>Descrição:Procura-se Dev. Full Stack para desenvolver aplicações web escaláveis, seguras e de alta qualidade, desde o front-end até o back-end.</Text>
              <Text style={styles.itemText}>Contato: +55 (11) 4002-8922</Text>
              <Pressable style={styles.botao}><Text style={styles.btnText}>Candidatar-se</Text></Pressable>
            </View>     
            
          </ScrollView>
          
        </View>
      </View>
  )

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    height: 830,
    backgroundColor: '#0e76a8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    width: 270,
    height: 370,
    backgroundColor: '#87CEFA',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginRight: 25,
  },
  itemText: {
    color: 'black',
    fontSize: 18,
    marginTop: 10,
    margin: 10
  },
  vaga: {
    fontSize: 23,
    fontWeight: 'bold'
  },
  botao: {
    backgroundColor: 'white',
    width: 120,
    borderRadius: 10,
    borderWidth: 1.5
  },
  btnText: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
});


