import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const ProductShortInfo = ({ props, navi, productType }) => {
    const height = (productType == "laptops") ? 190 : 240;
    const width = (productType == "laptops") ? 270 : 240;

    return (
    (props) ? <TouchableOpacity key={props._id} onPress={() => navi.navigate('productInfo', { ...props, type: productType })}>
            <View style={styles.container}>
                <Image style={{ ...styles.productImage, width: width, height: height }} source={{ uri: props.imgLink }} />
                <Text style={styles.productDes}>{props.des}</Text>
                <Text style={styles.productPrice}>{props.price}</Text>
            </View>
        </TouchableOpacity> : <View></View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: "#fff",
        marginTop: 20,
        alignSelf: 'center'
    }
    ,
    productImage: {
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 10,
        resizeMode: 'stretch'
    },

    productDes: {
        fontSize: 19,
        marginLeft: 10
    },
    productPrice: {
        fontSize: 26,
        marginLeft: 25,
        marginBottom: 4
    },

})

export default ProductShortInfo;
