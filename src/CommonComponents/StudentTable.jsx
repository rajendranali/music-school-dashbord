
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const StudentTable = ({dataSource,column}) => {
    return (
        <Table className="min-w-full bg-white  text-gray-600">
          <TableHeader>
            <TableRow>
              {dataSource?.map((it) => (
                <TableHead className="w-30 ">{it.header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {column?.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="h-2">{invoice?.name}</TableCell>
                <TableCell className="h-8">{invoice?.instructor}</TableCell>
                <TableCell className="h-8">{invoice?.dayOfWeek}</TableCell>
                <TableCell className="h-8">{invoice?.description}</TableCell>
                <TableCell className="h-8">{invoice?.instrument}</TableCell>
                <TableCell className="h-8">{invoice?.numStudents}</TableCell>
                <TableCell className="h-8">{invoice?.price}</TableCell>
                <TableCell className="h-8">{invoice?.status}</TableCell>
                <TableCell className="h-8 text-xl">:</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
}

export default StudentTable