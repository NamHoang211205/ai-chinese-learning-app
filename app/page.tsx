import Cta from "@/components/Cta"
import CompanionCard from "@/components/ui/CompanionCard"
import CompanionList from "@/components/ui/CompanionList"
import { recentSessions } from "@/constants"

const Page = () => {
  return (
    <main>
       <h1 className='text-2xl underline'> popular companions </h1>
       <section className="home-section" >
        <CompanionCard
        id="123"
        name="Nam Hoang"
        topic="Listening"
        subject="Chinese"
        duration={30}
        color="#ffda6e" 
        />
        <CompanionCard
        id="123"
        name="Nam Hoang"
        topic="Reading"
        subject="Chinese"
        duration={30}
        color="#a0ffb0" 
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
        <CompanionList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
       </section>
    </main>
  )
}
export default Page