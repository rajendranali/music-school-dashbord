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
const StudentTable = ({ dataSource, column, type }) => {
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
          <TableRow key={invoice.id}>
            <TableCell className="h-2">{invoice.ern}</TableCell>
            <TableCell className="h-8">{invoice.sname}</TableCell>
            <TableCell className="h-8">{invoice.cname}</TableCell>

            {type == "best_std" ? (
              <TableCell className="h-8">{invoice.fees}</TableCell>
            ) : null}
            <TableCell className="h-8">{invoice.fees}</TableCell>
            <TableCell className="h-8">{invoice.erndate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudentTable;
