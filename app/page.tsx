import Cta from "@/components/Cta"
import CompanionCard from "@/components/ui/CompanionCard"
import React from 'react'

const Page = () => {
  return (
    <main>
       <h1 className='text-2xl underline'> popular companions </h1>
       <section className="home-section" >
        <CompanionCard />
        <CompanionCard />
        <CompanionCard />
       </section>

       <section className="home-section">
        <CompanionCard />
        <Cta />
       </section>
    </main>
  )
}
export default Page