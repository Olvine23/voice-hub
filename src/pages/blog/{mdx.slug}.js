import { graphql } from 'gatsby'
import '../../components/Nav.css'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Chat from '../../components/Chat'
import Commentsi from '../../components/Comment_two'
import { S9comment } from 'gatsby-plugin-social9-comment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disqus } from 'gatsby-plugin-disqus';
import * as React from 'react'
import Layout from '../../components/layout'

const BlogPost = ({data}) => {
   
  const {
    mdx: { body, frontmatter },
    graphCmsVoiceHub: { blogs },
    } = data;
    let read_time = data.mdx.fields.readingTime.minutes
    var time = Math.floor(read_time)
   
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout>
      <div className="max-w-5xl  space-y-4 mx-auto   overflow-x-hidden lg:overflow-x-visible"> 
      <GatsbyImage
     className="image  h-80 sm:w-full mb-3"
      image={image}
      alt= "Hero image"
    />
    <div className="font-bold text-3xl"> 
      <h1 className= " m-3 text-5xl font-bold">{data.mdx.frontmatter.title}</h1>
       

    <p className="m-3 text-sm text-gray-500" > <span className='font-bold text-gray-900 text-lg'>Published On: </span> {data.mdx.frontmatter.date}</p>
     <p className='m-3 text-sm text-gray-500'> <span className='font-bold text-gray-900 text-lg'>Article by: </span> <span class="font-bold"> {data.mdx.frontmatter.author} </span></p>
     <p className='m-3 text-sm text-gray-500'> <span className='font-bold text-gray-900 text-lg'>Read Time: </span> <span class="font-bold"> {time} minute read </span></p>
     

     </div>
      <div  className="leading-9 p-7  post text-black text-xl  sm:w-full w-50 mx-auto  ">
      <MDXRenderer  >
        {body}
      </MDXRenderer>
      <span className='font-bold'>Share:</span>
     <div class="s9-widget-wrapper mb-3"></div>
      <Commentsi />

      </div>
      
      
     
      {/* <Comments   /> */}
       
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
      id
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
      fields {
        readingTime {
          minutes
          words
          time
          text
        }
      }
    }
  }
`
 
 
export default BlogPost;