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
        container: {
            center: true,
            padding: '2rem',
        },
        extend: {
            zIndex: { 60: 60 },
            width: {
                18: '18px',
                621: '621px',
                221: '221px',
                259: '259px',
                415: '415px',
                364: '364px',
                250: '250px',
                407: '407px',
                484: '484px',
                355: '355px',
                minus355: 'calc(100% - 415px)',
                navBarWidth: '1074px',
                containerWidth: '1280px',
                jobDescriptionSection: 'calc(100% - 424px)',
                asideSection: '404px',
                productsMenu: '500px',
            },
            maxWidth: {
                889: '889px',
                564: '564px',
            },
            screens: {
                380: '380px',
                1186: '1186px',
                '2xl': '1400px',
                large: { raw: '(min-width: 1440px) and (min-height: 1040px)' },
                tablet: { raw: '(max-width: 999px)' },
                mobile: { 'min-width': '767px' },
            },
            height: {
                50: '50px',
                104: '104px',
                18: '18px',
                68: '68px',
                148: '148px',
                113: '113px',
                434: '434px',
                hero: 'calc(100vh - 104px)',
                mobileHero: 'calc(100vh - 80px)',
            },
            padding: {
                112: '112px',
                104: '104px',
                72: '72px',
                69: '69px',
                168: '168px',
            },
            boxShadow: {
                custom:
                    '0px 2.72px 19.35px 0px #00000005,' +
                    '0px 12.16px 44.7px 0px #00000008,' +
                    '0px 30.24px 102.08px 0px #0000000A,' +
                    '0px 58.88px 217.51px 0px #0000000D,' +
                    '0px 100px 417px 0px #00000012',
            },

            colors: {
                as: '#E5BE39',
                gold600: '#E28D00',
                white50: '#FFFEEA',
                mediumDarkGray: '#5E5E5E',
                gainsBoro: '#DCDCDC',
                neutral100: '#989898',
                neutral200: '#7C7C7C',
                amber: '#FFB800',
                vibrantRed: '#FF3823',
                emeraldGreen: '#2ECC71',
                shadowDark: '#292929',
                paleGray: '#BDBDBD',
                platinum: '#F9F9F9',
                grayishWhite: '#FEFEFE',
                cyangreen: '#009951',
                greenPea: '#1D9C53',
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
                        boulder100: '#E7E7E7',
                        boulder200: '#D1D1D1',
                        boulder600: '#5D5D5D',
                        boulder300: '#B0B0B0',
                        boulder400: '#7B7B7B',
                        boulder500: '#6D6D6D',
                        boulder700: '#4F4F4F',
                        boulder900: '#3D3D3D',
                        boulder950: '#262626',
                        vulcan950: '#181721',
                        madras: '#423306',
                        activeLink: '#0F2942',
                        inActiveLink: '#BDBDBD',
                        success: '#039855',
                        tan: '#111111',
                        tulip100: '#FEF0C3',
                        tulip50: '#FEF9E8',
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
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontSize: {
                32: '32px',
                26: '26px',
            },
            lineHeight: {
                48: '48px',
                64: '64px',
            },
            gap: { 88: '88px', 108: '108px' },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                'loop-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-104%)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'loop-scroll': 'loop-scroll 50s linear infinite',
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}
