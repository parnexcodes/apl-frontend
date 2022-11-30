import React from 'react'
import Link from 'next/link'
import Stripe from '../../components/Stripe'
import Navbar from '../../Components/Navbar'
import Heading from '../../Components/Heading'
import Footer from '../../components/Footer'

export async function getServerSideProps({ query }) {
    let {id} = query
    return {
      props: {id}, // will be passed to the page component as props
    }
  }

function TeamID(props) {
    const players = [1,2,3,4,5,6,7,8,9,10,11]
  return (
    <>
    <div className="min-h-screen bg-gray-900">
      <Stripe />
      <Navbar />
      <div className="pt-28">
        <Heading mainHeading="APL" subHeading={props.id} />
      </div>
      <div className="flex justify-center gap-5 flex-wrap">
        {players.map((element) => {
          return (
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
              <Link href="#">
                <img
                  class="rounded-t-lg h-64 w-64"
                  src="demo.png"
                  alt=""
                />
              </Link>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {element}
                  </h5>
                </a>
              </div>
            </div>
          );
        })}
      </div>      
      <Footer />
    </div>
  </>
  )
}

export default TeamID