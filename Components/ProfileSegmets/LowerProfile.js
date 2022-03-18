import { ScrollView,View } from 'react-native';
import MainContainer from './MainContainer';

const LowerProfile = () => {

    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
            <View style={{ backgroundColor: "#fff",  padding: 10 }}>
                <MainContainer props={{ title: "Previous Orders", subTitle: "your Previous Orders details shown here" }} />
                <MainContainer props={{ title: "Pending Orders", subTitle: "your Pending Orders details shown there" }} />
                <MainContainer props={{ title: "Refer & Earn", subTitle: "your current Cart items shown here" }} />
                <MainContainer props={{ title: "EccentricStore Assets", subTitle: "your current Cart items shown here" }} />
                <MainContainer props={{ title: "Active Coupons", subTitle: "your current Cart items shown here" }} />
                <MainContainer props={{ title: "Bug Report", subTitle: "your current Cart items shown here" }} />
                <MainContainer props={{ title: "Contact Us", subTitle: "your current Cart items shown here" }} />
            </View>
        </ScrollView>

    );
}

export default LowerProfile;