import Cta from "@/components/Cta"
import CompanionCard from "@/components/ui/CompanionCard"
import CompanionList from "@/components/ui/CompanionList"
import { getAllCompanions } from "@/lib/actions/companion.actions"
import { getRecentSessionHistory } from "@/lib/actions/companion.actions"
import { getSubjectColor } from "@/lib/utils"

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessionHistory(10);

  return (
    <main>
       <h1 className='text-2xl underline'> popular companions </h1>

       <section className="home-section" >
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
        />
        ))}
        
        <CompanionCard
        id="123"
        name="Nam Hoang"
        topic="Reading"
        subject="Chinese"
        duration={30}
        color="#a0ffb0" 
        />
       </section>

       <section className="home-section">
        <CompanionList
          title="Recently completed sessions"
          companions={recentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
       </section>
    </main>
  )
}
export default Page