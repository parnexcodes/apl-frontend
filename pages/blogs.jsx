import React from 'react'
import Stripe from '../components/Stripe';
import Navbar from '../components/Navbar';
import Heading from '../components/Heading';

function blogs() {
  return (
    <>
      <div className="min-h-screen bg-gray-900">
        <Stripe />
        <Navbar />
        <div className="pt-28">
          <Heading mainHeading="APL" subHeading="Blogs" />
        </div>
        <div className='text-6xl text-white italic text-center'>
          Coming Soon
        </div>
        </div>  
    </>
  );
}

export default blogs;