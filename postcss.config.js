module.exports = ctx => ({
   plugins: {
       'postcss-import': {
           path: './shared',
       },
       'postcss-cssnext': {},
   },
});
