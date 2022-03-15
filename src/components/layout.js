import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
 
import {Nav} from './Nav' 
const Layout = ({pageTitle, children}) => {
  const data = useStaticQuery( graphql`

  query{
    allDirectory {
      edges {
        node {
          id
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
  
  
  `
    )
  return (
    <div> 
         <div>
      <title>OLVINE | {data.site.siteMetadata.title}</title>
      <Nav />
      
      
      <main>
        <h1 className='text-center mt-3 font-bold text-2xl'>{pageTitle}</h1>
        {children}
      </main>
    </div>
    </div>
  )
}

export default Layout