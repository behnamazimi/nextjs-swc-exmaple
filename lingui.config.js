const nextConfig = require('./next.config')

/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  // These are all the locales you want to support in
  // your application
  locales: ['en', 'sr', 'es', 'pseudo'],
  pseudoLocale: 'pseudo',
  sourceLocale: `en`,
  fallbackLocales: {
    default: 'en'
  },
  catalogs: [
    {
      path: 'src/locales/{locale}',
      include: ['src/']
    }
  ]
}
