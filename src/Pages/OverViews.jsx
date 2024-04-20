import CardComponents from "@/CommonComponents/CardComponents";
import React from "react";
import { TableDemo } from "@/CommonComponents/NewTable";
const StudentHeader = [
  {
    header: "Enr.No",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    header: "S.Name",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    header: "C.Name",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    header: "Fees",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    header: "Enr.Date",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  // Add more invoice data as needed
];

const OverViews = () => {
  return (
    <div className="px-3">
      <h2 className="text-3xl f mb-4 text-gray-500 pt-3">Overviews</h2>
      <div className="flex overflow-x-hidden  justify-evenly">
        <div className="flex gap-4 overflow-x-auto">
          <CardComponents
            numberofitm={1648}
            descn={"Total number of students"}
          />
          <CardComponents numberofitm={12} descn={"Total number of courses"} />
          <CardComponents
            numberofitm={"$2000"}
            descn={"Total amounts earned"}
          />
          <CardComponents
            numberofitm={"Guitar"}
            descn={"Best performing course"}
          />
          <CardComponents
            numberofitm={"Flute"}
            descn={"Worst performing course"}
          />
        </div>
      </div>

      <div className="mt-5 flex justify-between">
        <div>
          <h2 className="text-xl f mb-4 text-gray-500 pt-3">
            ATEST ENROLLMENTS
          </h2>
        </div>
        <div className="self-end">
          <p className="text-sm p-2 text-purple-700 cursor-pointer">
            View All Course
          </p>
        </div>
      </div>
      <TableDemo dataSource={StudentHeader} />

      <div className="mt-10 flex justify-between">
        <div>
          <h2 className="text-xl f mb-4 text-gray-500 pt-3">BEST STUDENTS</h2>
        </div>
        <div className="self-end">
          <p className="text-sm p-2  text-purple-700 cursor-pointer">
            View All Students
          </p>
        </div>
      </div>

      <TableDemo dataSource={StudentHeader} />
    </div>
  );
};

export default OverViews;
