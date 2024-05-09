import { Image, Text, View } from "react-native";
import style from "../stylesheets/style.js";

export default function Card({ image, description }) {
    return (
        <View style={style.card}>
            {description && <Text style={style.cardText}>{description}</Text>}
            <Image source={image} style={style.cardImage} />
        </View>
    )
}