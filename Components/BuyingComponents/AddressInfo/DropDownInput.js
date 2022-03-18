import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View ,Text,TextInput} from 'react-native';
import { countries, states, cities } from './Data';

const DropDownInput = () => {

    const AddInfoWithDropDownArr = [{ title: "Country" }, { title: "State" }, { title: "City" }];

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Picker style={{ width: 150, backgroundColor: '#f2f2f2' ,height:10 }} >
                    {
                        countries.map((d) => {
                            return (
                                <Picker.Item label={d} />
                            )
                        })
                    }

                </Picker>
                <Picker style={{ width: 150, backgroundColor: '#f2f2f2',height:10  }} >
                    {
                        states.map((d) => {
                            return (
                                <Picker.Item label={d} />
                            )
                        })
                    }

                </Picker>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingTop:10 }}>
               
                <Picker style={{ width:150, backgroundColor: '#f2f2f2' ,height:10 ,alignSelf:'center' }} >
                    {
                        cities.map((d) => {
                            return (
                                <Picker.Item label={d} />
                            )
                        })
                    }

                </Picker>
                <View style={{width:150}} >
                    <Text style={styles.textLabel} >Pincode</Text>
                    <TextInput style={styles.input} value={5} onChangeText={() => { }} selectionColor='#000' />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textLabel: {
        fontSize: 16,
        marginBottom: 5
    },
    input: {
        borderWidth: 2,
        borderColor: '#000',
        height: 36,
        borderRadius: 10,
        marginBottom: 10,
        fontSize: 18,
        textAlignVertical: 'top',
        padding: 10
    },
})

export default DropDownInput;