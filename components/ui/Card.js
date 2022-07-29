import { StyleSheet, View } from "react-native"
import Colors from "../../constants/colors"


function Card({children}) {
    return <View style={styles.card}>{children}</View>

}

export default Card

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primary700,
        elevation: 4, // Shadow in android device,
        shadowColor: "black", // Shadow in ios device,
        shadowOffset: { width: 0, height: 2 }, // Shadow in ios device,
        shadowOpacity: 0.25, // Shadow in ios device,
        shadowRadius: 6, // Shadow in ios device,
      },
})