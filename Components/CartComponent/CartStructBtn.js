import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { priceAdder } from '../../HelperFunctions/priceAdder';
import { removeCartData, updatePrice } from '../../ReduxCode/Reducers';
import { CustomInfoBtn, CustomCountBtn } from '../CustomComponent/CustomBtn';

const CartStructBtn = ({ props }) => {

    const dispatch = useDispatch();
    const CartData = useSelector((s) => s.cartData);
    const count = CartData.countObj[props._id];

    const IncHandler = () => { console.log(count);
        dispatch(updatePrice({
            totalPrice: priceAdder(CartData.totalPrice,props.price, 'add'),
            countObj: { id: props._id, count: count + 1 }
        }))
    }

    const DecHandler = () => {
        console.log(count);
        if(count>1)
        dispatch(updatePrice({
            totalPrice: priceAdder( CartData.totalPrice,props.price, 'sub'),
            countObj: { id: props._id, count: count - 1 }
        }));
        else count=1
    }


const CartRemoveHandler = () => {
    dispatch(removeCartData(props._id));
    dispatch(updatePrice({
            totalPrice: priceAdder( CartData.totalPrice,props.price, 'sub',count),
            countObj: { id: props._id, count: count - 1 }
        }));
}

return (
    <View style={{ flexDirection: 'row', flex: 1.7, justifyContent: 'space-around' }} >
        <View style={{ flexDirection: 'row', marginTop: 2 }} >
            <CustomCountBtn prop={{ btnTitle: '+', onPressFun: IncHandler ,width:39 }} />
            <Text style={{ fontSize: 22, paddingLeft: 3, paddingRight: 3 }}>{count}</Text>
            <CustomCountBtn prop={{ btnTitle: '-', onPressFun: DecHandler ,width:39  }} />
        </View>
        <View style={{ marginTop: 0, marginLeft: 90 ,height:20}} >
            <CustomCountBtn prop={{ btnTitle: 'Remove', onPressFun: CartRemoveHandler,width:110 }} />
        </View>
    </View>

);
}

export default CartStructBtn;