import { createSlice } from "@reduxjs/toolkit";


const todoSlice=createSlice({
    name:'todoapp',
    initialState:[],
    reducers:{
     addTodo:(state,action)=>{
        state.push({
            id:Date.now(),
            text:action.payload,
            completed:false
        })
     },
     deleteTodo: (state, action) => {
        return state.filter(todo => todo.id !== action.payload);
      },

      editTodo: (state, action) => {
        const { id, newText } = action.payload;
        const todoToEdit = state.find(todo => todo.id === id);
        if (todoToEdit) {
          todoToEdit.text = newText;
        }
      },
    }
})
export const{addTodo,deleteTodo,editTodo}= todoSlice.actions;
export default todoSlice.reducer