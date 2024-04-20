import React, { useState } from "react";
import { TableDemo } from "@/CommonComponents/NewTable";
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from "react-icons/ai";

const StudentHeader = [
  { id: 1,header: "Name" },
  { id: 2, header: "Description" },
  { id: 3, header: "Instructor" },
  { id: 4, header: "Instrument" },
  { id: 5, header: "Day of Week" },
  { id: 6, header: "# Students" },
  { id: 7, header: "Price" },
  { id: 8, header: "Status" },
  { id: 9, header: "Action" }
];


const Course = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter function to match column values with search term
  const filterData = (data, term) => {
    return data.filter(
      (item) =>
        item.header.toLowerCase().includes(term.toLowerCase()) ||
        item.paymentStatus.toLowerCase().includes(term.toLowerCase()) ||
        item.totalAmount.toLowerCase().includes(term.toLowerCase()) ||
        item.paymentMethod.toLowerCase().includes(term.toLowerCase())
    );
  };

  return (
    <div>
      <div className="mt-10 flex justify-between items-center">
        <h2 className="text-xl f mb-4 text-gray-500 pt-3">BEST STUDENTS</h2>
        <div className="relative">
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 pr-4 bg-white rounded-xl text-black border-none"
          />
          <AiOutlineSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black bg-white " />
        </div>
      </div>

      <TableDemo dataSource={StudentHeader}  column={filterData(StudentHeader, searchTerm)}/>
    </div>
  );
};

export default Course;
