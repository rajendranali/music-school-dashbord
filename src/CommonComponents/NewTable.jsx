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
            <TableCell className="h-3">{invoice?.name}</TableCell>
            <TableCell className="h-3">{invoice?.instructor}</TableCell>
            <TableCell className="h-3">{invoice?.dayOfWeek}</TableCell>
            <TableCell className="h-3">{invoice?.description}</TableCell>
            <TableCell className="h-3">{invoice?.instrument}</TableCell>
            <TableCell className="h-3">{invoice?.numStudents}</TableCell>
            <TableCell className="h-3">{invoice?.price}</TableCell>
            <TableCell
              className={`h-3 ${
                invoice.status === "Active" ? "rounded-sm" : ""
              }`}
            >
              {invoice.status === "Active" ? (
                <button className="bg-green-200 text-gray-400 py-1 px-4 rounded-xl font-normal">
                  {invoice.status}
                </button>
              ) : invoice.status === "Closed" ? (
                <button className="bg-red-200 text-gray-400 py-1 px-4 rounded-xl font-normal">
                  {invoice.status}
                </button>
              ) : invoice.status === "Archive" ? (
                <button className="bg-gray-300 text-gray-600 py-1 px-4 rounded-xl font-normal">
                  {invoice.status}
                </button>
              ) : (
                invoice.status
              )}
            </TableCell>

            <TableCell className="h-3 text-xl">
              <Button className="bg-white border-none">
                <Popover className="relative">
                  <PopoverTrigger className="bg-white p-2 rounded-full cursor-pointer">
                    <BsThreeDotsVertical />
                  </PopoverTrigger>
                  <PopoverContent className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg">
                    <ul className="text-left">
                      {" "}
                      {/* Align list items and button content to the left */}
                      <li className="text-left">
                        {" "}
                        {/* Align list item to the left */}
                        <button className="w-full px-4 text-sm text-gray-600 bg-white hover:bg-gray-100 focus:outline-none font-normal truncate">
                          Edit Course
                        </button>
                      </li>
                      <li className="text-left">
                        {" "}
                        {/* Align list item to the left */}
                        <button className="w-full px-4 text-sm text-gray-600 bg-white hover:bg-gray-100 focus:outline-none font-normal truncate">
                          Archive Course
                        </button>
                      </li>
                      <li className="text-left">
                        {" "}
                        {/* Align list item to the left */}
                        <button className="w-full px-4 text-sm text-gray-600 bg-white hover:bg-gray-100 focus:outline-none font-normal truncate">
                          Close Course
                        </button>
                      </li>
                    </ul>
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
