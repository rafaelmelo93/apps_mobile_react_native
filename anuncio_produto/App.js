import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image} from 'react-native';


export default function App(){


  return(
    <View style={styles.container}>
        <View style={styles.topView}>

        <Text style={{marginBottom: 20, marginTop: 50, fontSize: 30, fontWeight: 'bold'}}>Anúncios</Text>
          <ScrollView horizontal={true}>          
            <View style={styles.item}>
              <Image 
                source={{uri: 'https://m.media-amazon.com/images/I/818YqncgW9L._AC_SX695_.jpg'}}
                style={{width: 200, height: 150}}
              />
              <Text style={styles.itemText}>Dino Tênis</Text>
              <Text style={styles.itemText}>Transforme seus passeios em aventuras pré-históricas com o nosso incrível tênis dino!</Text>
              <Text style={styles.itemText}>R$150,00</Text>
            </View>
            <View style={styles.item}>
              <Image 
                source={{uri: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/226/115/products/tenis-nike-lebron-12-what-the-51-93bce7966e1e87387415924324231439-480-0.jpg'}}
                style={{width: 200, height: 150}}
              />
              <Text style={styles.itemText}>Tênis do LeBron</Text>
              <Text style={styles.itemText}>Entre no jogo com o poder e a precisão de LeBron James usando os novos tênis do LeBron.</Text>
              <Text style={styles.itemText}>R$877,00</Text>
            </View>
            <View style={styles.item}>
              <Image 
                source={{uri: 'https://sneakernews.com/wp-content/uploads/2012/11/nike-hyperposite-team-brown-total-orange-1.jpg'}}
                style={{width: 200, height: 150}}
              />
              <Text style={styles.itemText}>Tênis do Naldo</Text>
              <Text style={styles.itemText}>Tênis q o LeBron não tem</Text>
              <Text style={styles.itemText}>Valor Inestimável</Text>
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
    height: 540,
    backgroundColor: '#FFA500',
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
    width: 220,
    height: 370,
    backgroundColor: '#ffe8d8',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginRight: 25
  },
  itemText: {
    color: 'black',
    fontSize: 20,
    marginTop: 10,
  },
});


