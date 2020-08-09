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
        'indigo-650': '#5D3AC5',
        'indigo-750': '#4a2e9e'
      },
      fontFamily: {
        serif: ["Lora"],
        sans: ["Inter var"]
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
