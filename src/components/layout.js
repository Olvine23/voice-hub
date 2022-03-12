import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {Search} from './search'
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
    <div className='bg-green-300'> 
         <div>
      <title>OLVINE | {data.site.siteMetadata.title}</title>
      <Nav />
      
      
      <main className="bg-gradient-to-r w-full from-gray-50 via-black to-gray-50">
        <h1 className='text-red-500  text-center mt-0 font-bold text-2xl'>{pageTitle}</h1>
        {children}
      </main>
    </div>
    </div>
  )
}

export default Layout