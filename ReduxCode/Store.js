import { configureStore } from '@reduxjs/toolkit';
import {CartDataReducer ,UserAuthReducer} from './Actions';


 const store=configureStore({
    reducer:{
      userAuth:UserAuthReducer,
      cartData:CartDataReducer   
    }
});

export default store