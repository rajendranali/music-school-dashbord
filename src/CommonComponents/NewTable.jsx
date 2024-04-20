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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { BsThreeDotsVertical } from "react-icons/bs";
export function TableDemo({ dataSource, column }) {
  console.log("Dar6ty", dataSource);
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
            <TableCell className="h-8 text-xl">
              <Button className="bg-white border-none">
                <Popover>
                  <PopoverTrigger className="bg-white border-none"><BsThreeDotsVertical/></PopoverTrigger>
                  <PopoverContent>
                    Place content for the popover here.
                  </PopoverContent>
                </Popover>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
