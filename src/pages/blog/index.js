import React from 'react'
import { graphql,Link } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Img from 'gatsby-image'

const BlogPage = ({data}) => {
  console.log(data)
  const project = data.allMdx.nodes
  
 
  return (
     <>
     <Layout pageTitle="My Blogs" />
     


     {data.allMdx.nodes.map(
         node => (
             <article key ={node.id}>

<div className="px-4 flex mt-1 w-500  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
      <div className="  sm:max-w-sm sm:mx-auto ">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <Link
           to= {`/blog/${node.slug}`}
            >
          <Img
            fluid= {node.frontmatter.hero_image.childImageSharp.fluid}
            className="object-cover w-full h-64"
            alt="hero-image"
          />
          </Link>
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                to={`/blog/${node.slug}`}
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Travelling
              </Link>
              <span className="text-gray-600">— {node.frontmatter.date}</span>
            </p>
            <Link
              to={`/blog/${node.slug}`}
              aria-label="Category"
              title={node.frontmatter.title}
              className="inline-block mb-3 text-2xl   leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
             <span className='font-bold'> {node.frontmatter.title}</span> -- <span className='text-sm'> {node.frontmatter.author} </span>
            </Link>
            <p className="mb-2 text-gray-700">
               {node.excerpt}
            </p>
            <Link
              to={`/blog/${node.slug}`}
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Read More
            </Link>
          </div>
        </div>
    
    </div>
      
                
               
</div>
             </article>
         )
     )}
     
     </>
  )
}

export const query = graphql`
query {
    
 
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        author
        hero_image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      id
      slug
      excerpt
    }
  }
}


  `

export default BlogPage;