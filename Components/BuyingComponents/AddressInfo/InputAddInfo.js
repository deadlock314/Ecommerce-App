import { useState } from 'react';
import { Text, TextInput, View, StyleSheet, ScrollView } from 'react-native';
import DropDownInput from './DropDownInput';

const InputAddinfo = () => {

    const [addInfo, setAddInfo] = useState({
        Country: '', FullName: '', MobileNumber: '', Pincode: '',
        FlatHousenoBuildingCompanyApartment: '', AreaStreetSectorVillage: '', Landmark: '', City: '', State: '', flag: 0
    });

    const AddInfoArr = [{ title: "Full  Name" }, { title: "Mobile  Number" }];
    const AddInfoArr2 = [{ title: "Flat House No. Building Apartment" },
                        { title: "Area Street Sector Village" }, { title: "Landmark" }];


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
            <View style={styles.mainContainer} >
                <Text style={styles.title} >Address Details</Text>

                {
                    AddInfoArr.map((d) => {
                        return (
                            <View key={d.title} >
                                <Text style={styles.textLabel} >{d.title}</Text>
                                <TextInput style={styles.input} value={addInfo[d.title]} onChangeText={(d) => setAddInfo({ ...addInfo, d })} selectionColor='#000' />
                            </View>
                        )

                    })

                }
                <DropDownInput />
                {
                    AddInfoArr2.map((d) => {
                        return (
                            <View key={d.title} >
                                <Text style={styles.textLabel} >{d.title}</Text>
                                <TextInput style={styles.input} value={addInfo[d.title]} onChangeText={(d) => setAddInfo({ ...addInfo, d })} selectionColor='#000' />
                            </View>
                        )

                    })

                }
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        backgroundColor: '#fff'
    },
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
    title: {
        alignSelf: 'center',
        fontSize: 21
    }
});

export default InputAddinfo;