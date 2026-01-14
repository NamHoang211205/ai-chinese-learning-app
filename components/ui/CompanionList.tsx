import { Link } from "lucide-react"
import { Table } from "./table"
import { TableHeader } from "./table"
import { TableRow } from "./table"
import { TableHead } from "./table"
import { TableBody } from "./table"
import { TableCell } from "./table"
import { cn, getSubjectColor } from "@/lib/utils"
import Image from "next/image"

interface CompanionListProps {
  title?: string;
  companions?: Companion[];
  classNames?: string;
}
const CompanionList = ({ title, companions, classNames }: CompanionListProps) => {
  return (
    <article className={cn('companion-list', classNames)}>
      <h2 className="font-bold text-3xl">Recent Sessions</h2>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-lg w-2/3">Invoice</TableHead>
          <TableHead className="text-lg">Status</TableHead>
          <TableHead className="text-lg text-right">Duration</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {companions?.map(({id, subject, name, topic, duration}) => (
          <TableRow key ={id}>
            <TableCell>
              <Link href={`/companion/${id}`} className="font-medium">
              {subject}
                <div className="flex items-center gap-2">
                  <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{backgroundColor: getSubjectColor(subject)}}>
                    <Image 
                      src={`/icons/${subject}.svg`}  
                      alt={subject} 
                      width={35} 
                      height={35} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-bold text-2xl">{name}</p>
                  </div>
                </div>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </article>
  )
}

export default CompanionList