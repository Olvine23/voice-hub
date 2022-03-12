import React from 'react'
import '../components/Nav.css'
import {StaticImage } from 'gatsby-plugin-image';
 
const  Content = () => {
    return (

//       <div className=" bg-gradient-to-r from-green-500 via-black to-gray-900 relative px-4 pt-16 mx-auto lg:py-16 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
//       <div className="max-w-xl mx-auto lg:max-w-screen-xl">
//         <div className="mb-16 lg:max-w-lg lg:mb-0">
//           <div className="max-w-xl mb-6">
//             <div>
//               <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
//                 Brand new
//               </p>
//             </div>
//             <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
//               The quick, brown fox
//               <br className="hidden md:block" />
//               jumps over{' '}
//               <span className="inline-block text-deep-purple-accent-400">
//                 a lazy dog
//               </span>
//             </h2>
//             <p className="text-base text-gray-700 md:text-lg">
//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//               accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
//               quae. explicabo.
//             </p>
//           </div>
//           <div className="flex items-center">
//             <a
//               href="/"
//               className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
//             >
//               Get started
//             </a>
//             <a
//               href="/"
//               aria-label=""
//               className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
//             >
//               Learn more
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
//         <StaticImage
//           src="https://kitwind.io/assets/kometa/full-browser.png"
//           className="object-cover w-full  h-56 rounded shadow-lg sm:h-96"
//           alt=""
//         />
//       </div>
//     </div>
      <div className="w-full mt-8 px-4 py-16 mx-auto sm:max-w-xl   bg-gradient-to-r from-green-500 via-black to-gray-900 lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid gap-5 row-gap-0 lg:grid-cols-2">
          <div className="flex flex-col justify-center ">
            <div className="max-w-xl mb-4">
              <h2  className="side max-w-lg mb-6  leading-9 text-5xl font-bold line- text-gray-900 sm:text-4xl sm:leading-none">
                Release your <span className='text-white'>thoughts</span> ,
                <br className="hidden md:block" />
                <span className='text-blue-200'>ease your feels,</span> <br /> connect with the <span className="text-blue-200"> world </span> through art <span className='animate-pulse'>🎙️ 🌍</span>
              </h2>
              <p className="text-base side move font-serif text-white md:text-lg">
                 Make your talent known , showcase your ability, gain recognition, connect 
                 with your circle and fulfill your purpose. <span className='font-bold list'>  Poet, writer, singer or drawer </span>, any form of art aims towards sending a message to the society.
                 You matter, your voice matters, speak up!! 
              </p>
            </div>
            <div className="flex items-center">
            <a
              href="/"
              className="link inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-900 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:font-bold hover:bg-gray-800"
            >
              Get started
            </a>
            <a
              href="/"
              aria-label=""
              className="link inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-900 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:font-bold hover:bg-gray-800"
            >
              Learn more
            </a>
          </div>
        
          
      
            {/* <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="bg-gray-900 border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                    Get Started
                  </h6>
                  <p className="text-sm text-white">
                    Lookout flogging bilge rat main sheet bilge water nipper fluke
                    to go on account heave down.
                  </p>
                </div>
              </div>
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="bg-gray-900 h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                     Explore
                  </h6>
                  <p className="text-sm text-white">
                    Those options are already baked in with this model shoot me an
                    email clear.
                   <span className='animate-ping'>📸</span> 
                  </p>
                </div>
              </div>
            </div>*/}
          </div> 
          <div>
            <StaticImage
              className="object-cover w-full  h-56 rounded shadow-lg sm:h-96"
              src="../images/logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };


  export default Content;