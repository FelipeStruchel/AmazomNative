import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Pressable, Text, TextInput, View } from "react-native";
import style from "../stylesheets/style";
import { useState } from "react";
import { CheckBox } from "react-native-web";
import Card from "../components/Card";
import motoserra from "../../assets/products/motoserra.png"

export default function Cart() {

    const [quantity, setQuantity] = useState(1)

    const handleClickAdd = () => {
        setQuantity(quantity + 1)
    }
    const handleClickSubtract = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }else{
            alert('Viado detectado!!!')
        }
    }

    return (
        <View style={style.tela}>
            <View style={style.divHeader}>
                <MagnifyingGlassIcon style={style.icon} />
                <View style={style.searchItensDiv}>
                    <TextInput style={style.searchItensInput} placeholder='Pesquisar em Amazom.com.br' placeholderColor={'grey'} />
                </View>
            </View>
            <View style={style.carrinhoContentDiv}>
                <Text style={style.pedidosCarrinhoText}>Mensagens sobre produtos em seu carrinho</Text>
                <View style={style.carrinhoSubtotalDiv}>
                    <Text style={style.carrinhoSubtotalText}>Subtotal</Text>
                    <Text style={style.carrinhoSubtotalTextBold}>R$ {400 * quantity}</Text>
                </View>
                <Pressable style={style.fecharPedidoButton}>
                    <Text>Fechar pedido {quantity} itens</Text>
                </Pressable>
                <View style={style.presenteDiv}>
                    <CheckBox style={style.checkBox} />
                    <Text style={style.presentText}>Enviar como presente, incluir mensagem personalizada</Text>
                </View>
                <Text style={style.desmarcarItensText}>Desmarcar todos os itens</Text>
                <View style={style.itemCartDiv}>
                    <Card image={motoserra} customStyle={style.cartCard} />
                    <View style={style.productDescriptionCart}>
                        <Text style={{ fontSize: 15 }}>Motoserra Makita muito foda</Text>
                        <Text style={{
                            ...style.carrinhoSubtotalTextBold,
                            marginTop: 10,
                            fontSize: 18,
                            marginLeft: 0
                        }}>R$ 400,00</Text>
                        <Text style={{ color: '#1b9106', marginTop: 10 }}>Em estoque</Text>
                        <Text style={{ marginTop: 10 }}>Vendido por:</Text>
                        <Text style={{ marginTop: 10, color: '#07b7f8' }}>Pochita o Demonio da motoserra</Text>
                    </View>
                </View>
                <View style={style.cardButtonsDiv}>
                    <Pressable style={style.buttonCartQuantity} onPress={handleClickSubtract}>
                        <span>-</span>
                    </Pressable>
                    <Pressable style={{
                        ...style.buttonCartQuantity,
                        color: 'blue',
                        fontSize: '12px'
                    }}>
                        <span>{quantity}</span>
                    </Pressable>
                    <Pressable style={style.buttonCartQuantity} onPress={handleClickAdd}>
                        <span>+</span>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}