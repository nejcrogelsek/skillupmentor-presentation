import Container from '@/components/Container'

const HomePage = () => {
    return (
        <Container>
            <h1>Welcome</h1>
            <p className='my-4 text-2xl font-bold'>Today you will learn how to use:</p>
            <ol className='ml-8 list-decimal text-xl font-medium'>
                <li>Latest Next.JS version 14</li>
                <li>Server / Client components</li>
                <li>Server actions (instead of API route handlers)</li>
                <li>Prisma (interacting with the database)</li>
                <li>Validate api response with zod</li>
                <li>Folder structure (page.tsx, loading.tsx, error.tsx)</li>
                <li>Dynamic routes</li>
                <li>Metadata, import fonts</li>
            </ol>
        </Container>
    )
}

export default HomePage
