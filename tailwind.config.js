/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1496px',
        },
      },

      colors: {
first:"#35374B",
sec:"#344955",
three:"#50727B",
four:"#78A083",
five: "#9DB2BF",

        tex :"#803D3B",
        primary : "#E8E0C8",
             secondary:"#B66D2F",
        primaryDark:"#D3A446",
        secondaryDark:"#297272",
        third:"#1a4146",
        forth: "#6D8B74",
        fifth:"#DAD3BE",
        sixth:"#254336"
      },
      fontFamily:{
        general : ["Special Elite"],
        second :["Syne Mono"],
        dot :["Doto"],
        less :["Chakra Petch"],
        hiye :["Sankofa Display"],
      },

    },
  },
  plugins: [],
}