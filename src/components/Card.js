import { Image, Text, View } from "react-native";
import style from "../stylesheets/style.js";

export default function Card({ image, description, customStyle }) {
    return (
        <View style={customStyle || style.card}>
            {description && <Text style={style.cardText}>{description}</Text>}
            <Image source={image} style={style.cardImage} />
        </View>
    )
}