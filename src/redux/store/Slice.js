
import det from './details.json'
import { createSlice } from '@reduxjs/toolkit';
export const Slice=createSlice({
    name:"sanjeev",
    initialState:{arr:det.details},
    reducers:{
        update:(state,action)=>{
            state.arr=action.payload
        }
    }
    
}
);
export default Slice.reducer;
export const {update} =Slice.actions
