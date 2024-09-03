export interface Todo {
    id: string
    task: string
    notes: string
    completed: boolean
}

export interface TodoAppState {
    list: Todo[]
}