import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialStudentData } from "./type";
const initialStudentData:IInitialStudentData={
    data:""

}
const studentSlice=createSlice ({
    name:"studentSlice",
   initialState:initialStudentData,
    

    
    
    reducers:{
        setData(state :IInitialStudentData ,action:PayloadAction<string>){
            state.data = action.payload
        },
    }

})
const {setData} = studentSlice.actions
dispatch(setData("bhawana"))
export default studentSlice.reducer
export{setData}
