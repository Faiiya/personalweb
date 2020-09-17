module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
    height: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      nv: '70px',
            }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
