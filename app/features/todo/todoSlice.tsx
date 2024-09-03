import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@redux/toolkit'
import { v4 } from 'uuid'
export interface Todo {
    id: string
    task: string
    completed: string
}
export interface TodoAppState {
    list: Todo[]
}

const initialState: TodoAppState = {
    list: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded(state: TodoAppState, action: { type: string, payload: any}) {
            state.list.push({
                id: v4(),
                task: action.payload.task as string,
                completed: false
            })
        }
    }
})

export const { todoAdded } = todoSlice.actions
export default todoSlice.reducer