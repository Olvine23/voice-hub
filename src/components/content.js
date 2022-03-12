import React from 'react'
import './Nav.css'
import {StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
 
export const Content = () => {
    return (

      <div className="w-full lg:mt-8 mt-0  px-4 py-8 mx-auto sm:max-w-xl    lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-3">
      <div className="grid lg:gap-0 row-gap-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center ">
          <div className="max-w-xl lg:text-left text-center ">
            <h2  className="side uppercase max-w-lg lg:mb-6  leading-9 lg:text-4xl font-bold  text-gray-900 text-2xl sm:leading-none">
              Release your thoughts,
              <br className="hidden md:block" />
              ease your feels, <br /> connect with the world through art  <span className='animate-pulse'>🎙️ 🌍</span>
            </h2>
            <p className="text-base side move p-3    text-xsm">
               Make your talent known , showcase your ability, gain recognition, connect 
               with your circle and fulfill your purpose. 
            </p>
          </div>
          
        
    
         
        </div> 
        <div>
          <StaticImage
            className="object-cover w-full  h-56 rounded   sm:h-96"
            src="../images/man.jpg"
            alt=""
          />
        </div>
        <div className="flex items-center lg:p-0 lg:mt-0 mt-7">
          <a
            href="/"
            className="link inline-flex items-center justify-center lg:h-12 h-6 lg:px-6 px-3 mr-3 lg:mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-900 hover:bg-deep-purple-accent-700 focus:shadow-outline rounded p-3 focus:outline-none hover:font-bold hover:bg-gray-800"
          >
            Get started
          </a>
          <Link
            to="/more"
            aria-label=""
            className="link inline-flex items-center justify-center lg:h-12 h-6 lg:px-6 px-3 mr-3 lg:mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-900 hover:bg-deep-purple-accent-700 focus:shadow-outline rounded p-3 focus:outline-none hover:font-bold hover:bg-gray-800"
          >
            Learn more
          </Link>
        </div>
      
      </div>
    </div>

 
      
    );
  };