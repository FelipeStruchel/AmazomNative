import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import amazomLogo from '../../assets/amazom_logo.png'
import style from "../stylesheets/style";

export default function Login() {
    return (
        <View style={style.tela}>
            <Image source={amazomLogo} style={style.imagemTopo}/>
            <View style={style.divInput}>
                <TextInput placeholder="Digite seu úsuario" style={style.input} placeholderTextColor={'grey'}/>
                <TextInput placeholder="Digite sua Senha" style={style.input} placeholderTextColor={'grey'}/>
            </View>
            <TouchableOpacity style={style.botaoLogin}>
                <Text style={style.textoBotao}>Login</Text>
            </TouchableOpacity>
            <Text style={style.textoLogin}>Todos os direitos reservados - Pau Gordinho Soluções Tech</Text>
        </View>
    )
}