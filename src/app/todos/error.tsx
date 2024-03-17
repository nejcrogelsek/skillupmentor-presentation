'use client' // Error components must be Client Components

import Button from '@/components/Button'
import Container from '@/components/Container'
import { useEffect } from 'react'

const TodosErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
    useEffect(() => {
        // Log the error
        console.error(error)
    }, [error])

    return (
        <Container>
            <h2>Something went wrong!</h2>
            <Button onClick={reset}>Try again</Button>
        </Container>
    )
}

export default TodosErrorPage
