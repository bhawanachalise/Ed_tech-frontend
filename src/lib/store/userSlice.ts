import {createSlice, PayloadAction} from"@reduxjs/toolkit";
import { IUserInitialState } from "./type";
const userIntialState:IUserInitialState={
    name:null,
    address:null
}
const userSlice= createSlice({
    name:"userSlice",
    initialState : userIntialState,
        
   
    reducers:{
        setName(state:IUserInitialState,action:PayloadAction<string>){
          state.name=action.payload

        },
        setAddress(state:IUserInitialState,action:PayloadAction<string>){
            state.address=action.payload

        }
    }

})
const {setName,setAddress}=userSlice.actions
export default userSlice.reducer
export  {setName,setAddress}
dispatch(setName("bhawana"))
dispatch(setAddress("bharatpur"))
//dispatch function maa rakhana parxa