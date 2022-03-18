import { Text, TouchableOpacity, View ,StyleSheet } from 'react-native';

const MainContainer = ({ props }) => {

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subTitle}>{props.subTitle}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f0f0f0",
       margin:8,
       padding: 5
    },
    title:{
        fontSize:19,
        paddingLeft: 10
    },
    subTitle:{
        fontSize:15,
        paddingLeft: 7
    }
});

export default MainContainer;