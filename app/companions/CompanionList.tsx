import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils';
import React from 'react'

interface CompanionListProps{
    title:string;
    companions?: Companion[];
    classNames?: string;
}

const CompanionList = ({title, companions, classNames}:CompanionListProps) => {
  return (
    <article className={cn('companion-list', classNames)}>
        <h2 className='font-bold text-3xl'>Recent Sessions</h2>

        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className='text-lg'></TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                <TableRow>
                    <TableCell></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </article>
  )
}

export default CompanionList