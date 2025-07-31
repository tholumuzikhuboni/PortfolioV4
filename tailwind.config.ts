import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'mono': ['Space Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				code: {
					bg: 'hsl(var(--code-bg))',
					foreground: 'hsl(var(--code-foreground))',
					comment: 'hsl(var(--code-comment))',
					keyword: 'hsl(var(--code-keyword))',
					string: 'hsl(var(--code-string))',
					function: 'hsl(var(--code-function))',
					variable: 'hsl(var(--code-variable))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'typing': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'blink': {
					'0%, 50%': { borderColor: 'transparent' },
					'51%, 100%': { borderColor: 'currentColor' }
				},
				// Removed 'fade-in-up' keyframe
				'fade-in-delayed': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				// Removed 'glow' keyframe
				'shimmer': {
					'0%': { 
						backgroundPosition: '200% 0',
						backgroundImage: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.4), transparent)'
					},
					'100%': { 
						backgroundPosition: '-200% 0',
						backgroundImage: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.4), transparent)'
					}
				},
				'shimmer-bar': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(400%)' }
				},
				'float-slow': {
					'0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
					'33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
					'66%': { transform: 'translate(-20px, 20px) rotate(240deg)' }
				},
				'float-medium': {
					'0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
					'50%': { transform: 'translate(-25px, -25px) rotate(180deg)' }
				},
				'float-fast': {
					'0%, 100%': { transform: 'translate(0, 0) scale(1)' },
					'25%': { transform: 'translate(20px, -20px) scale(1.1)' },
					'50%': { transform: 'translate(-15px, -30px) scale(0.9)' },
					'75%': { transform: 'translate(-25px, 15px) scale(1.05)' }
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'bounce-dot': {
					'0%, 80%, 100%': { transform: 'translateY(0)' },
					'40%': { transform: 'translateY(-8px)' }
				},
				// Removed 'slide-in-left' keyframe
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'rotate-in': {
					'0%': { transform: 'rotate(-180deg) scale(0.5)', opacity: '0' },
					'100%': { transform: 'rotate(0deg) scale(1)', opacity: '1' }
				},
				'slide-grid': {
					'0%': { transform: 'translate(0, 0)' },
					'100%': { transform: 'translate(20px, 20px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'typing': 'typing 3s steps(40, end)',
				'blink': 'blink 1s infinite',
				// Removed 'fade-in-up' animation
				'fade-in-delayed': 'fade-in-delayed 1s ease-out 0.5s both',
				// Removed 'glow' animation
				'shimmer': 'shimmer 2s ease-in-out infinite',
				'shimmer-bar': 'shimmer-bar 1.5s ease-in-out infinite',
				'float-slow': 'float-slow 6s ease-in-out infinite',
				'float-medium': 'float-medium 4s ease-in-out infinite',
				'float-fast': 'float-fast 3s ease-in-out infinite',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'bounce-dot': 'bounce-dot 1.4s ease-in-out infinite',
				// Removed 'slide-in-left' animation
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'rotate-in': 'rotate-in 0.8s ease-out',
				'slide-grid': 'slide-grid 20s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
