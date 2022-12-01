import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Stripe from '../../components/Stripe'
import Navbar from '../../components/Navbar'
import Heading from '../../components/Heading'
import Footer from '../../components/Footer'

export async function getServerSideProps({ query }) {
    let { id } = query
    const req = await fetch(`https://apl-backend.vercel.app/api/team/players?id=${id}`)
    const res = await req.json()
    if (res) {
      return {
        props: {id, data: res.result.data}, // will be passed to the page component as props
      }
    }
  }

function TeamID(props) {
    let { id, data } = props
  return (
    <>
    <div className="min-h-screen bg-gray-900">
      <Stripe />
      {/* <Navbar /> */}
      <div className="pt-28">
        <Heading mainHeading="APL" subHeading={`Team ${data[0].team_name}`} />
      </div>
      <div className="flex justify-center gap-5 flex-wrap">
        {data.map((element, index) => {
          return (
            <div key={index} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
              <Link href="#">
                <Image
                  class="rounded-t-lg h-64 w-64"
                  src={element.profile_photo}
                  alt=""
                  height={256}
                  width={256}
                />
              </Link>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {element.name}
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