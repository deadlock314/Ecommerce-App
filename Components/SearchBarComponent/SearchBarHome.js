import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

function SearchBarHome() {
    return(

        <View style={styles.mainInputContainer}>
            <TextInput style={styles.input} selectionColor='#000' placeholder={'Search'} />
        </View>

    );
}

const styles=StyleSheet.create({
mainInputContainer:{
  
    borderRadius:10,
    marginTop:50,
    marginRight:20,
    marginLeft:20
},
  input:{
    height:40,
    borderRadius:10,
    marginBottom:10,
    fontSize:17,
    textAlignVertical: 'top',
    paddingLeft:20,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#dadada'

}

})

export default SearchBarHome;