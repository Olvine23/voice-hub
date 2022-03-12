import React from 'react';

export const Search = () => {

    return(
        <div class="flex justify-center ">
        <div class=" xl:w-96">
          <div class="input-group relative flex  items-stretch w-full ">
            <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3" />
            <button class="btn bg-green-500 inline-block px-6 py-2 border-2 border-green-500 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 ml-2 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
          </div>
        </div>
      </div>
 
    )
}