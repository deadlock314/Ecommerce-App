import { Entypo, Feather } from '@expo/vector-icons';
import React,{useState} from 'react';
import { StyleSheet, TextInput, View ,Keyboard } from 'react-native';

const SearchBar=({ searchTextProps ,onSubmitFun})=> {
    const [ clicked ,setClicked]=useState(false);

    return(

        <View style={styles.mainInputContainer}>
            <View style={(clicked) ? styles.clickedContainer : styles.unClickedContainer } >
             {
                 (clicked) ? <Entypo name="cross" size={25} color={'#000'}
                   style={{alignSelf:'center'}} onPress={()=>{
                       searchTextProps.setSearchText("")
                       setClicked(false) 
                       Keyboard.dismiss()

                  }} /> :
                 <Feather name="search" size={20} color={'#000'} style={styles.searchIcon} />
             }   
            
           <View style={{borderRadius:10, backgroundColor:'#dadada' ,flexDirection:'row' }} >
            <TextInput style={styles.input} selectionColor='#000' placeholder={'Search'} 
                value={ searchTextProps.searchText}  onChangeText={(s)=> searchTextProps.setSearchText(s)} 
                 onFocus={()=>setClicked(true)} onSubmitEditing={onSubmitFun} />
            </View>
        </View>
        </View>

    );
}

const styles=StyleSheet.create({
mainInputContainer:{
    marginTop:50,
    marginRight:20,
    marginLeft:20
},
  input:{
    height:35,
    fontSize:17,
    textAlignVertical: 'top',
    paddingLeft:10,
    paddingTop:6,
    alignSelf:'center',
    width:'93%'
},
searchIcon:{
    paddingLeft:12,
    alignSelf:'center',
    paddingRight:0
},
clickedContainer:{
    borderRadius:10 ,
    flexDirection:'row', 
},
unClickedContainer:{
    borderRadius:10 ,
    flexDirection:'row',
    backgroundColor:'#dadada' 
}
});

export default SearchBar;