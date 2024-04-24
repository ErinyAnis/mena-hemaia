import React from 'react';
import newYorkText from '../assets/new-york.webp';

function Article() {
  return (
    <section className='article sec-padding position-relative'>
        <div className="container text-center">
           <div className="content">
           <img src={newYorkText} alt="New york weekly" className='mb-3 mb-lg-4'/>
            <h2 className='mb-2'><span>Mena Hemaia</span> the king of the tax, finance, <br /> and accounting realm</h2>
            <div><a href="#"><u>Read Article</u></a></div>
           </div>
        </div>
    </section>
  )
}

export default Article;