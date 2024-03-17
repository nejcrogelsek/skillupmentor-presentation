'use server'

import { TodoItemSchema, TodoItemsSchema } from '@/features/todo/todoModels'
import prismadb from '@/lib/prismadb'
import { revalidatePath } from 'next/cache'

export const getTodos = async () => {
    const data = await prismadb.todoItem.findMany()
    return await TodoItemsSchema.parseAsync(data)
}

export const getTodo = async (todoId: string) => {
    const data = await prismadb.todoItem.findUnique({ where: { id: todoId } })
    return await TodoItemSchema.parseAsync(data)
}

export const addTodo = async (formData: FormData) => {
    const name = formData.get('name')

    if (!name || typeof name !== 'string') {
        return
    }

    const data = await prismadb.todoItem.create({ data: { name } })

    // Validate response
    await TodoItemSchema.parseAsync(data)

    // Revalidate cache
    revalidatePath('/todos')
}

export const editTodo = async (todoId: string, todoName: string) => {
    const data = await prismadb.todoItem.update({
        where: { id: todoId },
        data: { name: todoName },
    })

    // Validate response
    await TodoItemSchema.parseAsync(data)

    // Revalidate cache
    revalidatePath('/todos')
}

export const deleteTodo = async (todoId: string) => {
    const data = await prismadb.todoItem.delete({
        where: { id: todoId },
    })

    // Validate response
    await TodoItemSchema.parseAsync(data)

    // Revalidate cache
    revalidatePath('/todos')
}

export const completeTodo = async (todoId: string, completed: boolean) => {
    const data = await prismadb.todoItem.update({
        where: { id: todoId },
        data: { completed: !completed },
    })

    // Validate response
    await TodoItemSchema.parseAsync(data)

    // Revalidate cache
    revalidatePath('/todos')
}
