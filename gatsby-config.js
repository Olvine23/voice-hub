require("dotenv").config()
module.exports = {
    siteMetadata: {

        title: 'Voice Hub',
        siteUrl: `https://www.yourdomain.tld`,
        description: 'A platform where artists refine their skills and connect',
    },
    plugins: [

        'gatsby-plugin-postcss',
        `gatsby-plugin-offline`,
        `gatsby-plugin-fontawesome-css`,
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
    //     {
    //       resolve: 'gatsby-plugin-feed',
    //       options: {
    //         // We'll get to this in a moment
    //         query: `
    //   {
    //     site {
    //       siteMetadata {
    //         title
    //         description
    //         siteUrl
    //         site_url: siteUrl
    //       }
    //     }
    //   }
    // `,
    //       }
    //     },
        {
          resolve: "gatsby-plugin-social9-socialshare",
          options: {
            content:  "ae6befd886064f3f94d4ca40a52bef23",
            async: true,
            defer: true
          }
        },
    
        {
          resolve:  `gatsby-plugin-social9-comment`,
        },
        {
          resolve: `gatsby-plugin-disqus`,
          options: {
              shortname: `voice-hub`
          }
      },
        {
          resolve: 'gatsby-source-graphcms',
          options: {
          endpoint: process.env.GRAPHCMS_ENDPOINT,
          },
          },
        {
          resolve: `gatsby-plugin-offline`,
          options: {
            precachePages: [`/`,`/more`, `/blog/*`],
          },
        },
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: `Voice Hub`,
            short_name: `writers-hub`,
            start_url: `/`,
            background_color: `#212121`,
            theme_color: `black`,
            display: `standalone`,
            icon: `src/images/logo.png`
          },
        },
        {
          resolve: "gatsby-plugin-firebase",
          options: {
            credentials: {
              apiKey: "AIzaSyAleA7LgMX4PZ-MywNJpa_FpM1iiFJkgBU",
              authDomain: "voice-hub-10dc9.firebaseapp.com",
              databaseURL: "https://voice-hub-10dc9-default-rtdb.firebaseio.com",
              projectId: "voice-hub-10dc9",
              storageBucket: "voice-hub-10dc9.appspot.com",
              messagingSenderId: "439162688350",
              appId: "1:439162688350:web:be409371ee2a878ff9f5cf"
            }
          }
        },
        
        
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `blog`,
              path: `${__dirname}/blog`,
            }
          },
          "gatsby-plugin-mdx",
          {
            resolve: `gatsby-transformer-remark`,   
            options: { 
              plugins: [
                {
                  // Using gatsby-remark-embed-video before gatsby-remark-images & gatsby-remark-responsive-iframe plugins.            
                  resolve: `gatsby-remark-embed-video`,       
                  options: {
                    maxWidth: 800,
                    ratio: 1.77,
                    height: 400,
                    related: false,
                    noIframerder: true,
                    loadingStrategy: 'lazy',
                    urlOverrides: [
                      {
                        id: "youtube",
                        embedURL: videoId =>
                          `https://www.youtube-nocookie.com/embed/${videoId}`,
                      },
                    ], 
                    containerClass: "embedVideo-container",
                    iframeId: false, 
                  },
                },
                'gatsby-remark-reading-time',
                {
                  resolve: `gatsby-remark-images`,
                  options: {
                    // It's important to specify the maxWidth (in pixels) of
                    // the content container as this plugin uses this as the
                    // base for generating different widths of each image.
                    maxWidth: 590,
                    linkImagesToOriginal:false,
                  },
                },
                {
                  resolve: `gatsby-remark-responsive-iframe`,
                  options: {
                    wrapperStyle: `margin-bottom: 1.0725rem`,
                  },
                },
              ],
            },
          },

    ]
}