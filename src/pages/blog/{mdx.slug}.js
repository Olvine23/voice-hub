import { graphql } from 'gatsby'
import './post.css'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../../components/layout'
const BlogPost = ({data}) => {
  const {
    mdx: { body, frontmatter },
    graphCmsVoiceHub: { blogs },
    } = data;
   
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout>
      <div className="max-w-5xl  space-y-4 mx-auto py-6 md:py-12 overflow-x-hidden lg:overflow-x-visible"> 
      <h1 className= " m-3 text-4xl font-bold">{data.mdx.frontmatter.title}</h1>

      <p className="m-3" >{data.mdx.frontmatter.date}</p>
     <h1 className='m-3'> {blogs.join(", ")}</h1>
     <p className='m-3'>Article by <span class="font-bold"> {data.mdx.frontmatter.author} </span></p>
      <GatsbyImage
     className="image  h-80 sm:w-full mb-10"
      image={image}
      alt= "Hero image"
 Name   />
    
      <div  className="leading-8 p-3 post text-gray-900 sm:w-full  ">
      <MDXRenderer  >
        {body}
      </MDXRenderer>
      </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    graphCmsVoiceHub {
      blogs
    }

    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
 
 
export default BlogPost;