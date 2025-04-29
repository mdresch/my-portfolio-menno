import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  darkMode: 'class', // Enable dark mode using class strategy
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
              color: theme('colors.blue.600'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.blue.800'),
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
              borderLeftColor: theme('colors.blue.500'),
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
    require('@tailwindcss/typography'),
  ],
};

export default config;
