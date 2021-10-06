// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteUrl: 'https://awilderin.github.io',
  titleTemplate: '%s | AWildErin',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Projects',
        path: './content/projects/*.toml',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'GeneralInfo',
        path: './content/general.toml',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Socials',
        path: './content/social/*.toml',
      }
    },
  ]
}
