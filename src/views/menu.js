import { Text, View } from "react-native";
import style from "../stylesheets/style";

import gatoRobo from "../../assets/products/doritos.png"
import CardMenu from "../components/CardMenu";
import { TextInput } from "react-native";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import CardMenuCategoria from "../components/CardMenuCategoria";

import caderno from "../../assets/shortcuts/caderno.webp"
import caixa from "../../assets/shortcuts/caixa.jpg"
import copo from "../../assets/shortcuts/copo.webp"
import livro from "../../assets/shortcuts/livro.webp"
import sacola from "../../assets/shortcuts/sacola.jpg"
import webcam from "../../assets/shortcuts/webcam.jpg"

import cachorro from "../../assets/category/cachorro.jpg"
import caixas from "../../assets/category/caixas.jpg"
import caveira from "../../assets/category/caveira.webp"
import comida from "../../assets/category/comida.jpeg"
import etiqueta from "../../assets/category/etiqueta.png"
import presente from "../../assets/category/presente.png"

export default function Menu() {
    return (
        <View style={style.tela}>
            <View style={style.divHeader}>
                <MagnifyingGlassIcon style={style.icon} />
                <View style={style.searchItensDiv}>
                    <TextInput style={style.searchItensInput} placeholder='Pesquisar em Amazom.com.br' placeholderColor={'grey'} />
                </View>
            </View>
            <View style={style.menuGridWrapper}>
                <View style={style.menuDiv}>
                    <Text style={style.menuHeaderText}>Seus atalhos</Text>
                    <View style={style.menuGrid}>
                        <CardMenu image={caixa} description={'Seus pedidos'} />
                        <CardMenu image={caderno} description={'Suas Listas'} />
                        <CardMenu image={webcam} description={'Eletrônicos, TV e Áudio'} />
                        <CardMenu image={copo} description={'Mais por Menos'} />
                        <CardMenu image={livro} description={'Livros'} />
                        <CardMenu image={sacola} description={'Comprar Novamente'} />
                    </View>
                </View>
                <View style={style.menuDiv}>
                    <Text style={style.menuHeaderText}>Comprar por categoria</Text>
                    <View style={style.menuGrid}>
                        <CardMenuCategoria image={caixas} description={'Amazom Prime'} />
                        <CardMenuCategoria image={presente} description={'Presentes'} />
                        <CardMenuCategoria image={etiqueta} description={'Ofertas e Descontos'} />
                        <CardMenuCategoria image={comida} description={'Bebidas e Alimentos'} />
                        <CardMenuCategoria image={caveira} description={'Sáude e Cuidados Pessoais'} />
                        <CardMenuCategoria image={cachorro} description={'Pet Shop'} />
                    </View>
                </View>
            </View>
        </View>
    )
}