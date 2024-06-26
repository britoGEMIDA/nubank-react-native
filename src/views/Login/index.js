import React, {useState, NavigationContainer} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Linking } from "react-native";

//Componente de Login
export default function Login({navigation, route}) {
    //Estado para armazenar o nome do usuario
    const [name, setName] = useState('Cliente');

    return (
        <View style={styles.container}>
            {/* Componente de login */}
            <View style={styles.cardLogin}>
                {/* Titulo */}
                <Text style={styles.title}>Bem vindo(a) ao NTPET!</Text>
                {/* Campo para entrada do nome */}
                <Text style={styles.label}>Digite seu nome:</Text>
                {/* Campo para entrada do usuario */}
                <TextInput style={styles.input} placeholder={'Digite seu nome aqui...'} onChangeText={setName}></TextInput>
                <Text style={styles.label}>Digite seu CPF:</Text>
                {/* Campo para entrada do usuario */}
                <TextInput style={styles.input} placeholder={'Digite seu CPF...'} onChangeText={setName}></TextInput>
                {/* Botão para o login */}
                <Text style={styles.label}>Digite seu telefone:</Text>
                {/* Campo para entrada do usuario */}
                <TextInput style={styles.input} placeholder={'Digite seu telefone...'} onChangeText={setName}></TextInput>
                {/* Botão para o login */}
                <Text style={styles.label}>Digite seu e-mail:</Text>
                {/* Campo para entrada do usuario */}
                <TextInput style={styles.input} placeholder={'Digite seu e-mail...'} onChangeText={setName}></TextInput>
                {/* Botão para o login */}
                <TouchableOpacity>
                    <Text style={styles.buttonLogin} onPress={() => {navigation.navigate("Home", {name:name})}}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            {/* Link para o Github*/}
            <TouchableOpacity onPress={() => {Linking.openURL('https://github.com/SesiSenai1DE');}}>
                <Text style={styles.link}>
                    Voltar
                </Text>
            </TouchableOpacity>
        </View>
    );
}

//Estilos CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#699bf7',
        flexDirection: 'column',
        justifyContent: 'center',
        tintColor: 'red',
        paddingHorizontal: 10,
    },
    logo: {
        color: 'white',
        textAlign: 'center',
    },
    cardLogin: {
        paddingTop: 30,
        paddingStart: 30,
        paddingEnd: 30,
        backgroundColor: 'white',
        borderRadius: 30,
    },
    title: {
        fontSize: 25,
        marginBottom: 30,
    },
    label: {
        color: '#616161',
        marginTop: 10,
        fontSize: 20,
    },
    input: {
        marginTop: 5,
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderColor: '#5e5e5e',
        marginBottom: 23,
        borderRadius: 4,
    },
    buttonLogin: {
        backgroundColor: '#699bf7',
        fontSize: 15,
        textAlign: 'center',
        alignSelf: 'flex-end',
        paddingHorizontal: 15,
        paddingTop:10,
        paddingVertical: 15,
        borderRadius: 25,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 25,
    },
    link: {
        backgroundColor: 'white',
        fontSize: 13,
        textAlign: 'center',
        alignSelf: 'flex-end',
        marginTop: 10,
        paddingTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        fontWeight: 'bold',
        marginBottom: 30,
    }
})