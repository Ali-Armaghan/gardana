import { Theme } from '@/lib/theme'

interface ButtonProps {
    width?: string | number;
    height?: string | number;
    text: string;
    className?: string;
}

const Button = ({ width = '181px', height = '54px', text, className = '' }: ButtonProps) => {
    return (
        <button
            className={`bg-white rounded-[10px] flex items-center cursor-pointer text-[#113014] hover:bg-gray-100 active:bg-[#113014] active:text-white active:border-white active:border-solid active:border-2 active:scale-95 transition-all duration-200 ease-in-out justify-center ${className}`}
            style={{
                width: typeof width === 'number' ? `${width}px` : width,
                height: typeof height === 'number' ? `${height}px` : height,
            }}
        >
            <span
                className='text-[16px]'
                style={{
                    fontFamily: Theme.fonts.default,
                    fontWeight: Theme.fonts.weight.semibold,
                }}
            >
                {text}
            </span>
        </button>
    )
}

export default Button;