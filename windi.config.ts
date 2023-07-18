import {defineConfig} from 'windicss/helpers';

export default defineConfig({
    darkMode: 'class',
    attributify: true,
    plugins: [require('windicss/plugin/forms')],
    extract: {
        include: ['./src/**/*.vue'],
    },
    // for some reason, these classes can be missed in the scanning
    safelist: [
        'h2 h3 h4 h5',
        'p p-bold p-underline p-large p-small',
        'label-bold label',
        'p-tag p-notification',
        'underline-tag underline-tag-inverted theme-tag',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#FBE2E7',
                    100: '#C31F07',
                },
                secondary: {
                    50: '#F2F0EA',
                    100: '#BEB697',
                },
                success: {
                    50: '#D0F1D5',
                    100: '#018215',
                },
                alert: {
                    50: '#FFF4CC',
                    100: '#FFC700',
                },
                error: {
                    50: '#FBE2E7',
                    100: '#C31F07',
                },
                grey: {
                    50: '#FFFFFF',
                    100: '#EAEEF1',
                    200: '#CCCCCC',
                    300: '#979E9F',
                    400: '#4B4F50',
                    500: '#333333',
                    600: '#26282B',
                },
            },
            screens: {
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
                xxl: '1400px',
            },
            fontFamily: {
                serif: 'IvarText, serif',
                sans: 'IBM Plex Sans, sans-serif',
                mono: 'IBM Plex Mono, monospace',
            },
            borderRadius: {
                radius: {
                    100: '4rem',
                    0: '0rem',
                },
            },
        },
    },
});
