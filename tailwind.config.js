/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'media',

    theme: {
        extend: {
            zIndex: { 60: 60 },
            width: {
                navBarWidth: '1074px',
                containerWidth: '1280px',
                621: '621px',
            },
            colors: {
                as: '#E5BE39',
                tremor: {
                    brand: {
                        faint: '#eff6ff', // blue-50
                        muted: '#bfdbfe', // blue-200
                        subtle: '#60a5fa', // blue-400
                        DEFAULT: '#3b82f6', // blue-500
                        emphasis: '#1d4ed8', // blue-700
                        inverted: '#ffffff', // white
                        boulder: '#7B7B7B',
                        boulder50: '#F6F6F6',
                        boulder200: '#D1D1D1',
                        boulder300: '#B0B0B0',
                        boulder400: '#7B7B7B',
                        boulder500: '#6D6D6D',
                        boulder900: '#3D3D3D',
                        boulder950: '#262626',
                        madras: '#423306',
                    },
                    background: {
                        muted: '#f9fafb', // gray-50
                        subtle: '#f3f4f6', // gray-100
                        DEFAULT: '#ffffff', // white
                        emphasis: '#374151', // gray-700
                        darkYellow: '#FFBB0A', // yellow - 800
                        yellow700: '#EAB308',
                        brown: '#876307',
                        lightYellow: '#D5AE35',
                        white300: '#FEFEFE',
                    },
                    border: {
                        DEFAULT: '#e5e7eb', // gray-200
                    },
                    ring: {
                        DEFAULT: '#e5e7eb', // gray-200
                    },
                    content: {
                        subtle: '#9ca3af', // gray-400
                        DEFAULT: '#6b7280', // gray-500
                        emphasis: '#374151', // gray-700
                        strong: '#111827', // gray-900
                        inverted: '#ffffff', // white
                        grayText: '#575757',
                    },
                },
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [],
    // plugins: [require('@tailwindcss/forms')],
}
