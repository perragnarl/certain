module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			fontFamily: {
				'inter-variable': ['"InterVariable"'],
			},
      colors: {
        brand: "rgba(168, 85, 247, 1)",
      },
    },
  },
  plugins: [],
};
