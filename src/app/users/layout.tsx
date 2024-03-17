import ReactQueryProvider from '@/components/ReactQueryProvider'

export default function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <ReactQueryProvider>{children}</ReactQueryProvider>
}
