import { cn } from '@/utils'
import { ButtonHTMLAttributes } from 'react'

const Button = ({ className, children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={cn('rounded-md border-2 border-black bg-black px-2 text-white disabled:border-gray-400 disabled:bg-gray-400', className)} {...rest}>
            {children}
        </button>
    )
}

export default Button
