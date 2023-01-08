import React from 'react'

function Banner() {
  return (
    <div className='mx-4 flex flex-col lg:flex-row lg:space-x-5 justify-between'>
    
      <div className=''>  
           <h1 className='text-7xl max-w-xl font-serif'>theYarn </h1>
           <h2 className='mt-5 md:mt-0'>
            Welcome to my{" "} 
            <span className='underline decoration-4 decoration-[#eaa62a]'>
              mobile-friendly</span>{" "}
              Blog
             </h2>
      </div>
      <p className=' mt-5 md:mt-2 text-gray-400 max-w-sm'>We are excited to have you join us as we share write-ups about music, tech, and 
             food. As the <span className="font-bold">#1 Simon Maswabi blog</span> on the internet, we are committed to providing 
             engaging and informative content for our readers.
            
              Thank you for visiting and we 
             hope you will continue to follow our blog.</p>
            
    </div>
   
    
  )
}

export default Banner
