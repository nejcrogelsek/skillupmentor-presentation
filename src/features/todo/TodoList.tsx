'use client'

import { useState } from 'react'
import Link from 'next/link'
import { completeTodo, deleteTodo, editTodo } from '@/server/todos'
import Button from '@/components/Button'
import { cn } from '@/utils'
import { TodoItem as TodoItemType } from '@/features/todo/todoModels'

const TodoList = ({ todos }: { todos: TodoItemType[] }) => {
    return <ul>{todos.length > 0 ? todos.map((todo) => <TodoItem key={todo.id} todo={todo} />) : <li>No todos yet</li>}</ul>
}

export default TodoList

const TodoItem = ({ todo }: { todo: TodoItemType }) => {
    const [todoName, setTodoName] = useState(todo.name)
    const [completed, setCompleted] = useState(todo.completed)

    const handleIsComplete = async () => {
        try {
            await completeTodo(todo.id, completed)
            setCompleted(!completed)
        } catch (error) {
            // Display toast or something...
            console.log(error)
        }
    }

    const handleEdit = async () => {
        try {
            await editTodo(todo.id, todoName)
        } catch (error) {
            // Display toast or something...
            console.log(error)
        }
    }

    return (
        <li className='mb-4'>
            <form className='flex items-center justify-center'>
                {/* Toggle Todo */}
                <div className='relative h-4 w-4'>
                    <input name='completed' type='checkbox' defaultChecked={completed} onClick={handleIsComplete} />
                </div>
                {/* Edit Todo */}
                <input className={cn('mx-4', completed && 'line-through')} name='name' type='text' value={todoName} onChange={(e) => setTodoName(e.target.value)} disabled={completed} />
                <Button className='mr-4' type='submit' formAction={handleEdit} disabled={todo.name === todoName || completed}>
                    Edit
                </Button>
                {/* Delete Todo */}
                <Button className='mr-4 border-red-500 bg-red-500 text-white' type='submit' formAction={() => deleteTodo(todo.id)}>
                    Delete
                </Button>
                {/* Go to detail page */}
                <Link href={`/todos/${todo.id}`}>Detail</Link>
            </form>
        </li>
    )
}
