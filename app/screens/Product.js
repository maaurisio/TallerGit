import {View, Text, StyleSheet, Button} from 'react-native'


export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text>Bienvenidos a mi tienda, soy Brayan</Text>
        <Text style={styles.producto1}>Papitas</Text>
        <Text style={styles.producto2}>Cueritos</Text>
        <Text style={styles.producto3}>CocaCola</Text>
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('HomeNav');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    producto1:{
        backgroundColor: 'lightgreen',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    producto2:{
        backgroundColor: 'lightyellow',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    producto3:{
        backgroundColor: 'lightcoral',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    }
  });