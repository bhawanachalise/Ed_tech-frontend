import { createSlice } from "@reduxjs/toolkit";
const initialStudentData={
    data:""
}
const studentSlice=createSlice ({
    name:"studentSlice",
    initialState:initialStudentData,

    
    
    reducers:{
        setData(state,action){
            state.data = 'bhawana'
        },
    }

})
const {setData} = studentSlice.actions
export default studentSlice.reducer
export{setData}
