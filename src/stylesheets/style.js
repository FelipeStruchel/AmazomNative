import { StyleSheet } from "react-native";

const customYellow = '#fca500'

export default StyleSheet.create({
    imagemTopo: {
        width: '80%',
        height: '25%',
        marginTop: '15px',
        overflow: 'visible',
        marginHorizontal: '20px'
    },
    tela: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    divInput: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px'
    },
    textoBotao: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    },
    input: {
        height: 60,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 6,
        borderColor: customYellow,
        width: '50%',
        textAlign: 'left'
    },
    botaoLogin: {
        height: '10%',
        width: '50%',
        backgroundColor: customYellow,
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '30px'
    },
    textoLogin: {
        color: '#222222',
        fontSize: 12,
        lineHeight: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '50px'
    },
    divHeader: {
        display: "flex",
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
        backgroundColor: '#bcf9f9',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: '10px'
    },
    imageHeader: {
        width: '30%',
        height: '50px',
        paddingLeft: '30px'
    },
    icon: {
        width: '30px',
        height: '30px'
    },
    searchItensInput: {
        borderColor: 'transparent',
        borderRadius: '16px',
        borderWidth: 1,
        borderStyle: 'solid',
        width: '100%',
        height: '100%',
        color: 'grey',
        backgroundColor: 'white',
        lineHeight: 25,
        paddingHorizontal: '20px'
    },
    searchItensDiv: {
        width: '70%',
        backgroundColor: 'white',
        borderRadius: '16px',
        height: '60px'
    },
    adressDiv: {
        backgroundColor: '#e5fcfd',
        height: '60px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    adressText: {
        fontSize: '15px',
        paddingLeft: '15px'
    },
    itensDivHorizontal: {
        height: '30%',
        width: '100%',
        backgroundColor: '#f1f1f1',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        rowGap: '5px',
        paddingHorizontal: '10px',
        marginVertical: '10px'
    },
    itensDivVertical: {
        display: 'flex',
        flex: 1,
        paddingVertical: '10px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        overflow: 'hidden',
        columnGap: '10px'
    },
    card: {
        width: '30%',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: '16px'
    },
    cardImage: {
        width: '80%',
        height: '60%',
        alignSelf: 'center'
    },
    cardText: {
        fontSize: '12px',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: '2px'
    },
    divAppDay: {
        height: '5%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#e36e0b'
    },
    textAppDay: {
        width: '100%',
        textAlign: 'center',
        fontSize: '15px'
    },
    divIconsHeader: {
        width: '60%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        flexDirection: 'row',
        paddingRight: '15px',
        columnGap: '20px'
    },
    profileHeader: {
        backgroundColor: '#bdf9f9',
        display: 'flex',
        alignItems: 'center',
        columnGap: '10px',
        paddingLeft: '10px',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: '5px'
    },
    buttonDivVertical: {
        display: 'flex',
        height: '20%',
        width: '100%',
        paddingVertical: '10px',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        marginVertical: '15px'
    },
    buttonDivHorizontal: {
        height: '50%',
        width: '100%',
        backgroundColor: '#f1f1f1',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: '10px'
    },
    profileButton: {
        height: '80%',
        width: '45%',
        borderRadius: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#cecece',
        borderWidth: 1
    },
    seusPedidosDiv: {
        width: '100%',
        height: '40%',
        display: 'flex',
        flexDirection: 'column'
    }
});