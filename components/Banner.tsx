import React from 'react'

function Banner() {
  return (
    <div className='mx-4'>
      <div >  
           <h1 className='text-6xl max-w-xl font-serif'><span> theWord</span> is the place to write read and connect</h1>
           <h2>Welcome to <span className='font-bold'>theYarn</span> , a <span className='underline decoration-4 decoration-[#eaa62a]'>mobile-friendly</span> web app that is easy to use.
             </h2>
      </div>
      <p>We are excited to have you join us as we share write-ups about music, tech, and 
             food. As the <span className="font-bold">#1 Simon Maswabi blog</span> on the internet, we are committed to providing 
             engaging and informative content for our readers.
             <br/>
             <br/>
              Thank you for visiting and we 
             hope you will continue to follow our blog.</p>
             <br />
    </div>
  )
}

export default Banner
