import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode
    size?: 'base' | 'lg'
}

const Container = ({ children, size, className, ...rest }: ContainerProps) => {
    return (
        <div className={cn('mx-auto w-full max-w-[612px] px-8', size === 'lg' && 'max-w-[960px]', className)} {...rest}>
            {children}
        </div>
    )
}

export default Container
