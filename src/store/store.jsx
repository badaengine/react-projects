import { configureStore } from '@reduxjs/toolkit';
import counterReducers from './counterSlice';
import countryReducers from './countrySlice';

 const store  =   configureStore({ 
    reducer: { 
        counter: counterReducers,
        country: countryReducers
    }
})

export default store;