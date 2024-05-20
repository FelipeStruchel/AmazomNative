import { Image, Text, View } from "react-native";
import style from "../stylesheets/style.js";

export default function CardMenu({ image, description }) {
    return (
        <View style={style.cardMenu}>
            <View style={style.cardMenuDivImageWrapper}>
                <Image source={image} style={{
                    resizeMode: 'contain',
                    flex: 1,
                    width: 900,
                    height: 900
                }} />
            </View>
            {description && <Text style={style.cardText}>{description}</Text>}
        </View>
    )
}