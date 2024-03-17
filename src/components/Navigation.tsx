import Image from 'next/image'
import Link from 'next/link'
import Container from './Container'

const Navigation = () => {
    return (
        <header className='p-8'>
            <Container className='flex items-center justify-between'>
                <Link href='/'>
                    <Image src='https://skillupmentor.com/media/skillupmentorLogoArrowsVertical.png' alt='https://skillupmentor.com' width={123} height={37} />
                </Link>
                <nav className='flex items-center justify-center'>
                    <Link className='mr-4 font-semibold' href='/'>
                        Home
                    </Link>
                    <Link className='mr-4 font-semibold' href='/todos'>
                        Todos
                    </Link>
                    <Link className='font-semibold' href='/users'>
                        Users
                    </Link>
                </nav>
            </Container>
        </header>
    )
}

export default Navigation
