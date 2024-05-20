import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/16/solid";
import { Text, TextInput, View } from "react-native";
import style from "../stylesheets/style";

import doritos from '../../assets/products/doritos.png';
import gatoRobo from '../../assets/products/gatoRobo.webp';
import lamborghini from '../../assets/products/lamborghini.webp';
import motoserra from '../../assets/products/motoserra.png';
import perfume from '../../assets/products/perfume.png';
import play5 from '../../assets/products/play5.webp';
import pneu from '../../assets/products/pneu.png';
import nSwitch from '../../assets/products/switch.png';
import xboxOne from '../../assets/products/xboxOne.png';
import Card from '../components/Card.js';

export default function Home() {
    return (
        <View style={style.tela}>
            <View style={style.divHeader}>
                <MagnifyingGlassIcon style={style.icon} />
                <View style={style.searchItensDiv}>
                    <TextInput style={style.searchItensInput} placeholder='Pesquisar em Amazom.com.br' placeholderColor={'grey'} />
                </View>
            </View>
            <View style={style.adressDiv}>
                <MapPinIcon style={style.icon} />
                <Text style={style.adressText}>Enviar para Juan Carlos - Cacetinho 59078-500</Text>
            </View>
            <View style={style.itensDivVertical}>
                <View style={style.itensDivHorizontal}>
                    <Card description={'Continuar Comprando'} image={gatoRobo} />
                    <Card description={'Continuar Comprando'} image={play5} />
                    <Card description={'Continuar Comprando'} image={lamborghini} />
                </View>
                <View style={style.itensDivHorizontal}>
                    <Card description={'Continuar Comprando'} image={doritos} />
                    <Card description={'Continuar Comprando'} image={perfume} />
                    <Card description={'Continuar Comprando'} image={pneu} />
                </View>
                <View style={style.itensDivHorizontal}>
                    <Card description={'Continuar Comprando'} image={nSwitch} />
                    <Card description={'Continuar Comprando'} image={xboxOne} />
                    <Card description={'Continuar Comprando'} image={motoserra} />
                </View>
            </View>
            <View style={style.divAppDay}>
                <Text style={style.textAppDay}>O App Day começa em 18:55:02</Text>
            </View>
        </View>
    )
}