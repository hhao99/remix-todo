import { Provider } from 'react-redux'
import { store } from '~/store/todo'

import TodoList from './list'

export default function TodoApp() {

    return(
        <Provider store={store}>
            <TodoList />
        </Provider>
    )
}