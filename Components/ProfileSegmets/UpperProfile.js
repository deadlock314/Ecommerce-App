import { Image, Text, StyleSheet, View, TouchableOpacity, ViewBase } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const UpperProfile = ({ props }) => {
    return (
        <View style={styles.container} >

            <View style={styles.Icon}>
                {
                    (props.imgLink) ? <Image source={{ uri: '' }} /> :
                        <View >
                            <Ionicons name="person-circle-outline" size={110} color={'#000'} />
                        </View>
                }
                <View style={{alignSelf:'center'}} >
                    <TouchableOpacity>
                        <View style={styles.wishList}>
                        <Text style={styles.name}>0</Text>
                        <Text style={{fontSize:18}}>WishList</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.settingIcon} >
                    <Ionicons name="settings-outline" size={25} color={'#000'} />
                </View>
            </View>

            <Text style={styles.username} >{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 10
    },
    username: {
        fontSize: 21,
        margin: 11,
        marginTop: -10
    },
    Icon: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 30
    },
    settingIcon: {
        margin: 5
    },
    name: {
        fontSize: 20
    },
    wishList: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
});

export default UpperProfile;