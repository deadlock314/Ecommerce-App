import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { GetReq } from '../../ApiRequests/APIReqHandler';

const ProductExtendedDes = ({ prop }) => {

  const [exdes, setExdes] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {

      GetReq(`https://ecommerce-app-api-1.herokuapp.com/singleproductexdes/${prop.productType}/${prop.productId}`)
      .then((res) => {
          setExdes(res.extendedDes || [])
          setLoading(false)
      }).catch((err) => console.log(err));

  }, []);
  

  let keys = [];
  keys = Object.keys(exdes)

  return (
    (loading) ? <View></View>
      : <View style={{ backgroundColor: '#fff' }}>
        <Text style={{ alignSelf: 'center', fontSize: 21, marginBottom: 4 }} >Product Specifications</Text>
        {
          keys.map((key) => {
            return (
              <View key={key}>
                <Text style={{ alignSelf: 'center', fontSize: 19, fontWeight: '900', marginBottom: 12, marginTop: 10 }}> {key} </Text>
                <View style={{ borderBottomWidth: 1, marginBottom: 15 }}></View>
                {
                  exdes[key].map((param) => {
                    const paramKey = [Object.keys(param)[0]];
                    return (
                      <View key={paramKey} style={{ flexDirection: 'row', marginBottom: 6 }}>
                        <View style={{ flex: 1.1 }}><Text style={{ fontSize: 16.3, marginLeft: 3 }}>  {paramKey}  </Text></View>
                        <View style={{ flex: 1.43 }}><Text style={{ fontSize: 16 }}> {param[paramKey]} </Text></View>
                      </View>
                    );

                  })

                }
              </View>

            )
          })}
      </View>
  );


}

export default ProductExtendedDes;