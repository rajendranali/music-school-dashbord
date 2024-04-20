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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  // Add more invoice data as needed
];

export function TableDemo({ dataSource }) {
  console.log("Dar6ty", dataSource);
  return (
    <Table className="min-w-full bg-white  text-gray-600">
      {/* <TableCaption className="text-center text-gray-600">A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          {dataSource?.map((it) => (
            <TableHead className="w-30 ">{it.header}</TableHead>
          ))}

          {/* <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="h-2">{invoice.invoice}</TableCell>
            <TableCell className=" h-8">{invoice.paymentStatus}</TableCell>
            <TableCell className=" h-8">{invoice.paymentMethod}</TableCell>
            <TableCell className=" h-8">{invoice.totalAmount}</TableCell>
            <TableCell className=" h-8">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3} className="font-medium">Total</TableCell>
          <TableCell className="text-right font-medium">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
