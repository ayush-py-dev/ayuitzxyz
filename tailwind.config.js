/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.html"],
  theme: {
    extend: {colors: {
      bkg:{100: "#000817"},
      btn1: {100: "#526D82"},
      btn2:{100: "#9DB2BF"},
      act: {109: "#DDE6ED"},
      txt: {100: "#DDE6ED"}
    },
  },
},
  plugins: [],
}