import Cta from "@/components/Cta"
import CompanionCard from "@/components/ui/CompanionCard"
import CompanionList from "@/components/ui/CompanionList"
import React from 'react'

const Page = () => {
  return (
    <main>
       <h1 className='text-2xl underline'> popular companions </h1>
       <section className="home-section" >
        <CompanionCard
        id="123"
        name="Nam Hoang"
        topic="AI"
        subject="Chinese"
        duration={30}
        color="#ffda6e" 
        />
        <CompanionCard 
        id="456"
        name="Nam Hoang"
        topic="Writing"
        subject="Chinese"
        duration={30}
        color="#e5d0ff" 
        />
        
        <CompanionCard 
        id="789"
        name="Nam Hoang"
        topic="Speaking"
        subject="Chinese"
        duration={30}
        color="#BDE7FF" 
        />
       </section>

       <section className="home-section">
        <CompanionList />
        <Cta />
       </section>
    </main>
  )
}
export default Page