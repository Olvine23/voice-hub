module.exports = {
    siteMetadata: {

        title: 'Voice Hub',
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [

        'gatsby-plugin-postcss',
        `gatsby-plugin-offline`,
        `gatsby-plugin-fontawesome-css`,
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        
        
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
                {
                  resolve: `gatsby-remark-images`,
                  options: {
                    // It's important to specify the maxWidth (in pixels) of
                    // the content container as this plugin uses this as the
                    // base for generating different widths of each image.
                    maxWidth: 590,
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