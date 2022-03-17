import AsyncStorageLib from '@react-native-async-storage/async-storage';

const getAsyncStorage=async(key)=>{
    try{
        const data= await AsyncStorageLib.getItem(key);
        return JSON.parse(data);
    } catch (error) {
        return false
    }
   
}

const setAsyncStorage=async(key,val)=>{
    try{
      await AsyncStorageLib.setItem(key,JSON.stringify(val));
    } catch (error) {
        return false
    }
}

export {getAsyncStorage ,setAsyncStorage};