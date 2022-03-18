import { View,Text } from 'react-native';
import InputPaymentInfo from './InputPaymentInfo';

const PaymentInfo=()=>{
    return (
        <View>
            <Text>Payment method</Text>
            <Text>Payment Id</Text>
            <InputPaymentInfo/>
        </View>
    );
}

export default PaymentInfo;