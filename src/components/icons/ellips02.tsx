
const Ellips02 = () => {
    return (
        <div className="pointer-events-none select-none">
            <svg width="667" height="667" viewBox="0 0 667 667" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
                <circle cx="333.3" cy="333.3" r="300" fill="url(#smooth_glow_02)" />
                <defs>
                    <radialGradient id="smooth_glow_02" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(333.3 333.3) rotate(90) scale(300)">
                        <stop stopColor="#CDFF57" stopOpacity="0.12" />
                        <stop offset="0.5" stopColor="#CDFF57" stopOpacity="0.05" />
                        <stop offset="0.8" stopColor="#CDFF57" stopOpacity="0.01" />
                        <stop offset="1" stopColor="#CDFF57" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    )
}

export default Ellips02