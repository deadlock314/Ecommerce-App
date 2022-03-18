import { useState } from 'react';
import { View } from 'react-native';
import { CustomCountBtn } from '../CustomComponent/CustomBtn';
import AddressInfo from './AddressInfo/AddressInfo';
import BuyingStatusBar from './BuyingStatusBar';
import Paymentinfo from './PaymentInfo/PaymentInfo';

const BuyingPage = ({ route }) => {

    const product = route.params;

    const [step, setStep] = useState(1);

    const TogglePrevFormHandler = () => (step<=1)? setStep(step):setStep(step-1);
    const ToggleNextFormHandler = () => setStep(step + 1);


    return (
        <View style={{ backgroundColor: '#f0f0f0', flex: 1 }}>
            <BuyingStatusBar props={step} />

            {
                (step == 1) ? <AddressInfo /> : (step==2)? <Paymentinfo />:<Paymentinfo />
            }
            <View style={{ justifyContent: 'space-around', flexDirection: 'row', backgroundColor: '#fff', paddingBottom: 8 }} >
                <CustomCountBtn prop={{ btnTitle: "Prev", onPressFun: TogglePrevFormHandler, width: 110 }} />
                <CustomCountBtn prop={{ btnTitle: "Next", onPressFun: ToggleNextFormHandler, width: 110 }} />
            </View>
        </View>
    );
}

export default BuyingPage;