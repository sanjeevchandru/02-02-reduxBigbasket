import {configureStore} from '@reduxjs/toolkit'
import st from './Slice'
export const store=configureStore({
    reducer:{
        data:st
    }
});