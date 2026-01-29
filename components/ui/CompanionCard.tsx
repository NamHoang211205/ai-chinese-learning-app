"use client";
import Link from "next/link"
import Image from 'next/image';
import { removeBookmark, addBookmark } from "@/lib/actions/companion.actions";
import { usePathname } from 'next/navigation';
interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  isBookmarked: boolean;
}


const CompanionCard = ({
  id, 
  name, 
  topic, 
  subject, 
  duration, 
  color, 
  isBookmarked
}: CompanionCardProps) => {
  const pathname = usePathname();
  const handleBookmark = async () => {
    if(isBookmarked) {
      await removeBookmark(id, pathname);
    } else {
      await addBookmark(id, pathname);
    }
  };

  return (
    <article className='companion-card' style={{backgroundColor: color}}>
      <div className='flex justify-between items-center'>
        <div className='subject-badge'>{subject}</div>
        <button className='companion-bookmark' onClick={handleBookmark}>
          <Image src={
                isBookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"
            } 
            alt="Bookmark" 
            width={12.5} 
            height={15} 
          />
        </button>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className='text-sm'>{topic}</p>
      <div className='flex items-center gap-2'>
        <Image src='/icons/clock.svg' alt="duration" width={15} height={15} />
        <p className='text-sm'>{duration} mins</p>
      </div>

      <Link href={`/companion/${id}`} className='w-full'>
        <button className='btn-primary w-full just'>Start Session</button>
      </Link>
    </article>
  )
}

export default CompanionCard;