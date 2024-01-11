
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "var(--color-primary-200)",
		// =~= Theme Colors  =~=
		// primary | #E87722 
		"--color-primary-50": "252 235 222", // #fcebde
		"--color-primary-100": "250 228 211", // #fae4d3
		"--color-primary-200": "249 221 200", // #f9ddc8
		"--color-primary-300": "246 201 167", // #f6c9a7
		"--color-primary-400": "239 160 100", // #efa064
		"--color-primary-500": "232 119 34", // #E87722
		"--color-primary-600": "209 107 31", // #d16b1f
		"--color-primary-700": "174 89 26", // #ae591a
		"--color-primary-800": "139 71 20", // #8b4714
		"--color-primary-900": "114 58 17", // #723a11
		// secondary | #CE0058 
		"--color-secondary-50": "248 217 230", // #f8d9e6
		"--color-secondary-100": "245 204 222", // #f5ccde
		"--color-secondary-200": "243 191 213", // #f3bfd5
		"--color-secondary-300": "235 153 188", // #eb99bc
		"--color-secondary-400": "221 77 138", // #dd4d8a
		"--color-secondary-500": "206 0 88", // #CE0058
		"--color-secondary-600": "185 0 79", // #b9004f
		"--color-secondary-700": "155 0 66", // #9b0042
		"--color-secondary-800": "124 0 53", // #7c0035
		"--color-secondary-900": "101 0 43", // #65002b
		// tertiary | #861F41 
		"--color-tertiary-50": "237 221 227", // #eddde3
		"--color-tertiary-100": "231 210 217", // #e7d2d9
		"--color-tertiary-200": "225 199 208", // #e1c7d0
		"--color-tertiary-300": "207 165 179", // #cfa5b3
		"--color-tertiary-400": "170 98 122", // #aa627a
		"--color-tertiary-500": "134 31 65", // #861F41
		"--color-tertiary-600": "121 28 59", // #791c3b
		"--color-tertiary-700": "101 23 49", // #651731
		"--color-tertiary-800": "80 19 39", // #501327
		"--color-tertiary-900": "66 15 32", // #420f20
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #E5E1E6 
		"--color-surface-50": "251 251 251", // #fbfbfb
		"--color-surface-100": "250 249 250", // #faf9fa
		"--color-surface-200": "249 248 249", // #f9f8f9
		"--color-surface-300": "245 243 245", // #f5f3f5
		"--color-surface-400": "237 234 238", // #edeaee
		"--color-surface-500": "229 225 230", // #E5E1E6
		"--color-surface-600": "206 203 207", // #cecbcf
		"--color-surface-700": "172 169 173", // #aca9ad
		"--color-surface-800": "137 135 138", // #89878a
		"--color-surface-900": "112 110 113", // #706e71
		
	}
}