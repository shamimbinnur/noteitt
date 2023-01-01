/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sono: ["Sono", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        tillana: ["Tillana", "cursive"],
        delius: ["Delius", "cursive"],
        istok: ["Istok Web", "sans-serif"]
      },
      colors: {
        RED50: "#FF6666",
        RED100: "#F9522E",
        BLUE50: "#666CFF",
        BLUE100: "#4322C5",
        PURPLE50: "#8D8CE2",
        PURPLE100: "#8566FF",
        GREY10: "#F2F2F2",
        GREY50: "#464646",
        GREY100: "#3D3D3D",
        CYAN100: "#00AAE0",
        CYAN10: "#CCF3FF",
      },
      backgroundImage: {
        'radial-shaddow': "url('../src/assets/svg/RadialShaddow.svg')",
        'paper-texture': "url('../src/assets/image/paper-texture.jpg')",
      },
      animation: {
        'spin-fast': 'spin .2s linear infinite',
        'bounce-slow': 'bounce 1s infinite',
        'bounce-mid': 'bounce .9s infinite;',
        'bounce-fast': 'bounce .8s infinite',
      }
    },
  },
  plugins: [],
}
