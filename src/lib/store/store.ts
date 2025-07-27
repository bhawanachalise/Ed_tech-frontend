import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import studentSlice from './studentSlice'
const store = configureStore({
    reducer:{
        userSlice:userSlice,
        studentSlice:studentSlice,
        teacherSlice:
    }
})
export default store
//dispathch ko type-->paxi kaam laagxa hamilai 

export type AppDispatch = typeof store.dispatch
//react-redux--package(different hooks haru provide garxa yasley)
//next-ruduxToolkit

