/*Revisar mas manejo de lenguajes https://www.datocms.com/blog/how-to-build-a-multi-language-website-with-next-js-i18n*/
module.exports = {
  reactStrictMode: true,
    i18n: {
       // providing the locales supported by your application
      locales: ["en-US", "es-ES", "it-IT"],
      //  default locale used when the non-locale paths are visited
      defaultLocale: "en-US",
    },
  swcMinify: true,
}
