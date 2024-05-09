import { Image, Text, View } from 'react-native'
import style from '../stylesheets/style'
import amazomLogo from '../../assets/amazom_logo.png'
import { ArrowDownIcon, BellIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/16/solid'
import { TouchableOpacity } from 'react-native-web'

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
                        <Text>Botão</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.profileButton}>
                        <Text>Botão</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.buttonDivHorizontal}>
                    <TouchableOpacity style={style.profileButton}>
                        <Text>Botão</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.profileButton}>
                        <Text>Botão</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.seusPedidosDiv}>
                    <View>
                        <Text style={{fontWeight: 'bold'}}>Seus pedidos</Text>
                        <Text style={{color: 'blue'}}>Ver tudo</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
