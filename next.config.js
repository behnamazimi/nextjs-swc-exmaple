/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    swcPlugins: [
      ['@lingui/swc-plugin', {
        "runtimeModules": {
          "i18n": ["@lingui/core", "i18n"],
          "trans": ["@lingui/react", "Trans"]
        }
      }],
    ],
  },
}
