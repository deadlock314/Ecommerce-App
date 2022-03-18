import {  View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LowerProfile from '../ProfileSegmets/LowerProfile';
import UpperProfile from '../ProfileSegmets/UpperProfile';

const ProfileHome = () => {

    const userData = useSelector(s => s.userAuth.userData);
    const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

    console.log(userData);

    return (
        <View style={{flex:1}} >
            <UpperProfile props={{name:capitalize(userData.name) ,imgLink:userData.imgLink }} />
            <LowerProfile />
        </View>
    );
}



export default ProfileHome;