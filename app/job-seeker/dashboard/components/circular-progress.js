import React from 'react'

const CircularProgressBar = ({ percentage }) => {
    const radius = 70 // Half of 140px for the circle's radius
    const strokeWidth = 20 // Stroke width for both path and trail
    const normalizedRadius = radius - strokeWidth / 2
    const circumference = 2 * Math.PI * normalizedRadius
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
        <div className="relative w-[140px] h-[140px]">
            <svg
                height={radius * 2}
                width={radius * 2}
                className="absolute top-0 left-0">
                {/* Background Circle (trail) */}
                <circle
                    stroke="#D9D9D9" // #D9D9D9 for the trail
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                {/* Progress Circle (path) */}
                <circle
                    stroke="#2ECC71" // #2ECC71 for the progress
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    strokeLinecap="butt" // No rounded corners
                    style={{
                        transition: 'stroke-dashoffset 0.35s', // Smooth transition
                        transform: 'rotate(-90deg)', // Start the progress from the top
                        transformOrigin: '50% 50%', // Center the rotation at the circle center
                    }}
                />
            </svg>
            {/* Text inside the circle */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <span className="text-black large:text-lg text-base font-semibold">{`${percentage}%`}</span>
            </div>
        </div>
    )
}

export default CircularProgressBar
