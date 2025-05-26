import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  darkMode: 'class', // Enable dark mode using class strategy
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './functions/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      typography: (theme: PluginAPI['theme']) => ({
        DEFAULT: {
          css: {
            'h1, h2, h3, h4': {
              fontWeight: '700',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            h1: {
              fontSize: '2.5rem',
              lineHeight: '1.2',
            },
            h2: {
              fontSize: '2rem',
              lineHeight: '1.3',
            },
            h3: {
              fontSize: '1.5rem',
              lineHeight: '1.4',
            },
            a: {
              color: theme('colors.sky.600'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.sky.800'),
                textDecoration: 'underline',
              },
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
              fontFamily: 'monospace',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: 0,
            },
            pre: {
              backgroundColor: theme('colors.gray.100'),
              borderRadius: '0.375rem',
              padding: '1rem',
              overflowX: 'auto',
            },
            blockquote: {
              borderLeftColor: theme('colors.sky.500'),
              fontStyle: 'italic',
            },
            img: {
              borderRadius: '0.375rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5rem',
            },
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.5rem',
            },
            hr: {
              borderColor: theme('colors.gray.300'),
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            table: {
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
            },
            strong: {
              fontWeight: '600',
            },
          },
        },
      }),
    },
  },
  plugins: [
    import('@tailwindcss/typography'),
  ],
};

export default config;
