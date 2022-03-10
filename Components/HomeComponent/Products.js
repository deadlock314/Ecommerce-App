import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import ProductType from './ProductType';
import { Ionicons } from '@expo/vector-icons';
import { useFonts,Tinos_400Regular } from '@expo-google-fonts/tinos';

const Products=({navigation})=> {

    let [fontLoaded]=useFonts({Tinos_400Regular });

    if(fontLoaded){
        return (
        

            <View>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>EccentricStore</Text>
                    <TouchableOpacity>
                        <View style={styles.headerIcon}>
                        <Ionicons name={'help-circle-outline'} size={36} color={'#fff'} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.productsContainer}>
                    <ProductType props={{name:"laptops",navi:navigation}}  />
                    <ProductType props={{name:"mobiles" ,navi:navigation}} />
                    <ProductType props={{name:"earphones", navi:navigation}} />
                    <ProductType props={{name:"smart watches", navi:navigation}} />
                </View>
            </View>
        );

    }
    else{
        return (
            <View>

            </View>
        )
    }
    
}
const styles=StyleSheet.create({
    header:{
        marginTop:30,
        height:60,
        backgroundColor:"#165161",
    },
    headerTitle:{
        color:'yellow',
        marginTop:10,
        marginLeft:20,
        fontSize:30,
        fontFamily:'Tinos_400Regular'
    },
    headerIcon:{
        marginLeft:290,
        marginTop:-39,
    },
    productsContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around'
    }
})
export default Products;