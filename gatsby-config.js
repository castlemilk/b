module.exports = {
  siteMetadata: {
    title: 'Ben Ebsworth',
    author: `Ben Ebsworth`,
    description: `A playground for development and writing material`,
    siteUrl: `https://benebsworth.com/`,
    social: {
      twitter: `sycli`,
      linkedin: `ben-ebsworth`
    }
  },
  plugins: [
    // 'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-antd',
    // 'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-antd-v2',
      options: {
        style: true
      }
    },
    // {
    //   resolve: 'gatsby-plugin-google-fonts',
    //   options: {
    //     fonts: ['Prompt', 'Open Sans']
    //   }
    // },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Prompt`
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              backgroundColor: `transparent`,
              linkImagesToOriginal: true
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3000,
        production: true
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    // {
    //   resolve: 'gatsby-plugin-material-ui'
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-119767237-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: false
      }
    }
  ]
}
