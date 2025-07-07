import {createSlice} from"@reduxjs/toolkit";
interface  IUserInitialState{
    name:string |null,
    address:string |null
}
const userIntialState:IUserInitialState={
    name:null,
    address:null
}
const userSlice= createSlice({
    name:"userSlice",
    initialState :{
        name:null,
        address:null
    },
    reducers:{
        setName(state,action){
          //state.name="bhawana"

        },
        setAddress(state,action){
           // state.address="bharatpur"

        }
    }

})
const {setName,setAddress}=userSlice.actions
export default userSlice.reducer
export  {setName,setAddress}