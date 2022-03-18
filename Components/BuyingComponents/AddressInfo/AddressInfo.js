import { Text, View } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useSelector } from 'react-redux';
import {CustomBtn, CustomInfoBtn} from '../../CustomComponent/CustomBtn';
import InputAddInfo from './InputAddInfo';

const AddressInfo = () => {

    const userData = useSelector(s => s.userAuth.userData);

    const ToggleAddInput=()=>{

    }

    return (
        <View style={{flex:1}} >
            { (userData.AddressArray.length>0)?
                userData.AddressArray.map((addInfo) => {
                    return (
                        <View >
                            <Text>{addInfo.FullName}</Text>
                            <Text>{addInfo.MobileNumber}</Text>
                            <Text>{`${addInfo.FlatHousenoBuildingCompanyApartment} ${addInfo.AreaStreetSectorVillage} ${addInfo.Landmark}` }</Text>
                            <Text>{`${addInfo.City} ${addInfo.Pincode}`} </Text>
                            <Text>Mobile</Text>
                            <CustomBtn prop={{onPressFun:ToggleAddInput,btnTitle:"Order with new Address"}} />
                        </View>
                    )
                }) : <InputAddInfo />
            }
     
            
        </View>
    );
}

export default AddressInfo;