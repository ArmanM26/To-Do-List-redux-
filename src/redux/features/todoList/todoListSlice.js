import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: {
        value: [], 
    },
    reducers: {
        addToDo: (state, action) => {
            state.value.push({
                name: action.payload,
                index: state.value.length,
                completed:false,
            });
        },
        deleteToDo: (state, action) => {
            state.value = state.value.filter((_, index) => index !== action.payload);
        },
        changeCompletedState: (state,action) => {
            state.value.forEach((item)=>{
                if(action.payload===item.index){
                    item.completed = !item.completed
                }
            })
        }
    }
});

export default todoListSlice.reducer;
export const { addToDo, deleteToDo, changeCompletedState } = todoListSlice.actions;