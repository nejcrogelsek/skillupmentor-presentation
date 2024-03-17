'use client'

import { useState } from 'react'
import Button from '@/components/Button'
import { addTodo } from '@/server/todos'

const AddTodoForm = () => {
    const [name, setName] = useState('')

    const action = async (formData: FormData) => {
        try {
            await addTodo(formData)
            setName('')
        } catch (error) {
            // Display toast or something...
            console.log(error)
        }
    }

    return (
        <form action={action}>
            <input className='mr-4' name='name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <Button type='submit' disabled={name.trim() === ''}>
                Add
            </Button>
        </form>
    )
}

export default AddTodoForm
