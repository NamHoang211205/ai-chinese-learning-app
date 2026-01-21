import CompanionCard from '@/components/ui/CompanionCard';
import { getAllCompanions } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';
import SubjectFilter from '@/components/SubjectFilter';
import SearchInput from '@/components/SearchInput';

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject? filters.subject : '';
  const topic = filters.topic? filters.topic  : '';

  const Learning = await getAllCompanions({ subject, topic });
  console.log('Learning', Learning);

  return (
    <main>
      <section className='flex justify-between gap-4 max-sm:flex-col'>
        <h1>Companions Library</h1>
        <div className='flex gap-4'>
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>
      <section className='companions-grid'>
        {Learning.map((companion) => (
          <CompanionCard 
            key={companion.id} 
            {...companion} 
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  )
}

export default CompanionsLibrary