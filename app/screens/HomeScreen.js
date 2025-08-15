import { View, Text, StyleSheet, Button } from 'react-native'

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Bienvenido a mi aplicacion, Soy Mauricio</Text>
        <Text>Frase cualquiera</Text>
        <View style={styles.botones}>

            <View style={styles.boton1}>
                <Button
                    color="#e4b20dff"
                    title='CONTACTS'
                    onPress={() => {
                        navigation.navigate('CallNumber');
                    }}
                />
            </View>
            <Button
                color="#841584"
                title='PRODUCTOS'
                onPress={() => {
                    navigation.navigate('ProductNavigation');
                }}
            />

        </View>

    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6ed712ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,

    },
    boton1: {
        marginRight: 60,

    },
});
