import {createSlice} from"@reduxjs/toolkit";
import { SocketAddress } from "net";
createSlice({
    name:"userSlice",
    initialState :{
        name:null,
        address:null
    },
    reducers:{
        setName(state,action){
            state.name="bhawana"

        },
        setAddress(state,action){
            state.address="bharatpur"

        }
    }

})