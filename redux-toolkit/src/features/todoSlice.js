//step2
import { createSlice,nanoid } from "@reduxjs/toolkit";

//Can be array or object
const initialState = {
    todos:[{id:1,text:"hello world"}]    
}

//createSlice also takes an object 
export const todoSlice = createSlice({
    //name defined for todo 
    name:"todo",
    //Takes ans intitial state
    initialState,
    //reducers are object
    reducers:{
        addTodo : (state,action)=>{    //always takes state and action : state is current state  , actions are  the values provided to identify new function that is to be performed 
            const todo = {
                id:nanoid(),
                text:action.payload    //payload is an objectcan access dot properties 
            }
            state.todos.push(todo)
        },

        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id != action.payload)
        },
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer