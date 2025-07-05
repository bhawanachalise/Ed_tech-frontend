import { createSlice } from "@reduxjs/toolkit";

const teacherSlice=createSlice({
    name:"teacherSlice",
    initialState:{
    teacherName:"",
    teacherPassword:"",
    },
    reducers:{
        setTeacherName(state,action){
            state.teacherName="ram"
        },
        setTeacherPassword(state,action){
            state.teacherPassword="hey"
        }

    }
})
const{setTeacherName,setTeacherPassword}=teacherSlice.actions
setTeacherName()
/*const setTeacherName =teachersSlice.actions.setTeacherName
const setTeacherPassword = teacherSlice.actions.setTeacherPassword
const{} = teachersSlice.action*/
/*actions:{
setTeacherName:{}{},
setTeacherPassword:{}{}
},**/

/*
FLOW
reducers -->action
reducer-->communication-->action