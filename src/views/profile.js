import { Image, Text, View, TouchableOpacity } from 'react-native'
import style from '../stylesheets/style'
import amazomLogo from '../../assets/amazom_logo.png'
import { ArrowDownIcon, BellIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/16/solid'
import Card from '../components/Card.js';
import gatoRobo from '../../assets/products/gatoRobo.webp'
import pneu from '../../assets/products/pneu.png'
import motoserra from '../../assets/products/motoserra.png'

export default function Profile() {
    return (
        <View style={style.tela}>
            <View style={style.divHeader}>
                <Image source={amazomLogo} style={style.imageHeader} />
                <View style={style.divIconsHeader}>
                    <BellIcon style={style.icon} />
                    <MagnifyingGlassIcon style={style.icon} />
                </View>
            </View>
            <View style={style.profileHeader}>
                <UserIcon style={style.icon} />
                <Text>{'Olá Amoebo'}</Text>
                <ArrowDownIcon style={{
                    width: '25px',
                    height: '25px'
                }} />
            </View>
            <View style={style.buttonDivVertical}>
                <View style={style.buttonDivHorizontal}>
                    <TouchableOpacity style={style.profileButton}>
                        <Text>Seus Pedidos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.profileButton}>
                        <Text>Comprar Novamente</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.buttonDivHorizontal}>
                    <TouchableOpacity style={style.profileButton}>
                        <Text>Sua Conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.profileButton}>
                        <Text>Sua Lista</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.seusPedidosDiv}>
                <View style={style.seusPedidosHeader}>
                    <Text style={{ fontWeight: 'bold' }}>Seus pedidos</Text>
                    <Text style={{ color: '#34bce9' }}>Ver tudo</Text>
                </View>
                <View style={style.seusPedidosContent}>
                    <Card description={'Continue Comprando'} image={gatoRobo} />
                    <Card description={'Continue Comprando'} image={motoserra} />
                    <Card description={'Continue Comprando'} image={pneu} />
                </View>
                <View style={style.seusPedidosHeader}>
                    <Text style={{ fontWeight: 'bold' }}>Continue Comprando</Text>
                    <Text style={{ color: '#34bce9' }}>Ver tudo</Text>
                </View>
                <View style={style.seusPedidosContent}>
                    <Card description={'Continue Comprando'} image={gatoRobo} />
                    <Card description={'Continue Comprando'} image={motoserra} />
                    <Card description={'Continue Comprando'} image={pneu} />
                </View>
            </View>
        </View>
    )
}
