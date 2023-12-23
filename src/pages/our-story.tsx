import React from 'react'
import "../styles/components/story.css"

{/* <img src="../../public/images/OurStoryPage/helmet.png" alt="helmet" /> */}



const OurStoryPage = () => {
   return (
    <>
      
      <div className="container-fluid">
        <div className="row mt-5 overflow-hidden">
          <div className="col">
              <div className="row mt-5">
                <h1 className='story-text text-left'>Our Story</h1>
                <p className='story-text-small text-left' style={{paddingRight: '28px'}}>began in Ohrid in 1913 when master craftsman Slave Marinov started shaping copper into high-quality household products.</p>
               <div className='cooper'><img src="../../public/images/OurStoryPage/copper pot.png" alt="cooper"/></div>
               </div>
          </div>
        <div className="story-img" />
        <div className="story-img-bg mb-5" />
        <h2 className='story-text story-top'>Copper oxidizes and changes over time.</h2>
        <div className='row d-flex flex-column justify-content-right story-bottom pr-0'>
            <h2 className='story-text p-0 text-right'>And so has Marinov.</h2>
            <p className='story-text-small p-0 text-right'>Over the years, our family business has evolved and adapted to changing times, all the while holding on to its rich history and tradition.</p>
        </div>

  
        </div>
      </div>
    </>
  );
}

export default OurStoryPage