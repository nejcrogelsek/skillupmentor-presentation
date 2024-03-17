import Container from '@/components/Container'
import { getTodo } from '@/server/todos'
import { cn } from '@/utils'

const TodoPage = async ({ params: { todoId } }: { params: { todoId: string } }) => {
    const todo = await getTodo(todoId)
    return (
        <Container>
            <h1 className={cn(todo?.completed && 'line-through')}>{todo?.name}</h1>
            <p className='whitespace-pre'>{JSON.stringify(todo, null, 2)}</p>
        </Container>
    )
}

export default TodoPage
