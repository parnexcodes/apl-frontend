import React from 'react'
import Link from 'next/link'
import MatchDetail from '../../components/MatchDetail'
import Stripe from '../../components/Stripe'
import Navbar from '../../Components/Navbar'
import Heading from '../../Components/Heading'
import Footer from '../../components/Footer'

export async function getServerSideProps({ query }) {
    let {id} = query
    const req = await fetch(`https://apl-backend.vercel.app/api/match/detail?id=${id}`)
    const res = await req.json()
    if (res) {
        return {
            props: { data: res.result.data }, // will be passed to the page component as props
          }
    }
  }

function TeamID(props) {
    const players = [1,2,3,4,5,6,7,8,9,10,11]
  return (
    <>
    <div className="min-h-screen bg-gray-900">
      <Stripe />
      <Navbar />
      <div className="pt-16">
        <Heading mainHeading="APL" subHeading={`${props.data.team_a.name} V/S ${props.data.team_b.name}`} />
      </div>
      <MatchDetail data={props.data}/>
      <Footer />
    </div>
  </>
  )
}

export default TeamID