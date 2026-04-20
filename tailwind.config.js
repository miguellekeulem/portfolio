// tailwind.config.js
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['SF Mono', 'Menlo', 'Monaco', 'Cousine', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(6,182,212,0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(6,182,212,0.7)' },
        }
      }
    }
  }
}