import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, getSubjectColor } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CompanionListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionList = ({
  title,
  companions,
  classNames,
}: CompanionListProps) => {
  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="font-bold text-3xl">Recent Sessions</h2>

      <Table>
        <TableHeader>
          <TableRow className="text-md md:text-lg">
            <TableHead className="w-2/3">Lessions</TableHead>
            <TableHead>Subjects</TableHead>
            <TableHead className="text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {companions?.map(({id, name, subject, topic, duration}) => (
            <TableRow key={id}>
              <TableCell>
                <Link className="flex justify-start items-center gap-4" href={`/companions/${id}`}>
                    <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
                        style={{ backgroundColor:getSubjectColor(subject) }}>
                        <Image src={`/icons/${subject}.svg`} alt={subject}
                            width={35} height={35} />
                        
                    </div>
                    <div className="flex flex-col gap-2 text-wrap max-w-[150px] md:max-w-full">
                        <p className="font-bold text-md sm:text-lg md:text-2xl">
                            {name}
                        </p>
                        <p className="text-gray-400 text-sm sm:text-md md:text-lg">
                            {topic}
                        </p>
                    </div>
                </Link>
              </TableCell>

              <TableCell>
                <div className="subject-badge w-fit max-md:hidden">
                    {subject}
                </div>
                <div className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                    style={{backgroundColor:getSubjectColor(subject)}}>
                        <Image src={`/icons/${subject}.svg`} alt={subject}
                            height={18} width={18} />
                </div>
              </TableCell>

              <TableCell>
                <div className="flex items-center justify-end gap-2 w-full">
                    <p className="font-bold md:font-normal text-lg md:text-2xl">
                        {duration}
                        <span className="max-md:hidden">mins</span>
                        <Image src="/icons/clock.svg" alt="clock"
                            height={14} width={14} className="md:hidden" />
                    </p>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionList;
