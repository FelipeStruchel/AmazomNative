import { Image, Text, View } from "react-native";
import style from "../stylesheets/style.js";

export default function CardMenuCategoria({ image, description }) {
    return (
        <View style={style.cardMenuCategoria}>
            {description && <Text style={style.cardText}>{description}</Text>}
            <View style={style.cardMenuDivImageWrapperCategoria}>
                <Image source={image} style={{
                    resizeMode: 'contain',
                    flex: 1,
                    width: 900,
                    height: 900
                }} />
            </View>
        </View>
    )
}