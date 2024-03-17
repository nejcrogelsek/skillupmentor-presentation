import './globals.css'
import { Montserrat as montserrat } from 'next/font/google'

import Navigation from '@/components/Navigation'
import { Metadata } from 'next'

// Import google fonts
const fontFamily = montserrat({ subsets: ['latin'] })

// Configure Metadata example 1
export const metadata: Metadata = {
    title: 'Todo App',
    description: 'Todo App made with NextJS v14 using server/client components and server actions.',
}

// Configure Metadata example 2
// export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
//     return constructMetadata({
//         title: `Todo App ${locale}`,
//         description: 'Todo App made with NextJS v14 using server/client components and server actions.',
//     })
// }

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={fontFamily.className}>
                <Navigation />
                <main>{children}</main>
            </body>
        </html>
    )
}
