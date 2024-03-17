import Container from '@/components/Container'
import AddTodoForm from '@/features/todo/AddTodoForm'
import TodoList from '@/features/todo/TodoList'
import { getTodos } from '@/server/todos'

const TodosPage = async () => {
    const todos = await getTodos()
    return (
        <Container>
            <div className='flex flex-col items-center'>
                <AddTodoForm />
                <hr className='my-8 w-full' />
            </div>
            <TodoList todos={todos} />
        </Container>
    )
}

export default TodosPage
