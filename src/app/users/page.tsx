'use client'

import Button from '@/components/Button'
import Container from '@/components/Container'
import LoadingCircle from '@/components/LoadingCircle'
import { getUsers } from '@/features/users/usersUtils'
import { useQuery } from '@tanstack/react-query'

const UsersPage = () => {
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
    })

    if (isError) {
        return (
            <Container>
                <h2>Something went wrong!</h2>
                <Button onClick={() => refetch()}>Try again</Button>
            </Container>
        )
    }

    if (isLoading) {
        return (
            <Container>
                <LoadingCircle />
            </Container>
        )
    }

    return (
        <Container>
            <div className='whitespace-pre'>{JSON.stringify(data, null, 2)}</div>
        </Container>
    )
}

export default UsersPage
