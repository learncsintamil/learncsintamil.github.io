/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        'orange-50': '#fffaf5',
        'orange-350': '#FBF5EF',
        'indigo-150': '#F2F0FA',
        'indigo-650': '#5D3AC5',
        'indigo-750': '#4a2e9e',
        'gray-850': '#191714',
        'brown-dark': '#C9BFB5',
        'brown-light': '#dfd9d3'
      },
      spacing: {
        '128': '32rem',
        '240': '60rem'
      },
      fontFamily: {
        sans: ["Inter var"]
      },
      borderRadius: {
        'xl': '1rem'
      }
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/ui")({
      layout: "sidebar",
    }),
    require("autoprefixer"),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
