import React from 'react'

const SearchIcon = ({ size = 24 }: { size?: number }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" />
            <path d="M20 20L16.5 16.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
}

export default SearchIcon
