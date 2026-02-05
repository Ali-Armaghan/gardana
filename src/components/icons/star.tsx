import React from 'react'

const Star = ({ size = 18, color = "white" }: { size?: number, color?: string }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 1.75L15.09 8.26L22.25 9.27L17.03 14.14L18.27 21.25L12 17.77L5.73 21.25L6.97 14.14L1.75 9.27L8.91 8.26L12 1.75Z" />
        </svg>
    )
}

export default Star 
