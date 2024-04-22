import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TableDemo } from "@/CommonComponents/NewTable";
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { fetchCourses } from "@/Redux/Action/action";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StudentHeader = [
  { id: 1, header: "Name" },
  { id: 2, header: "Description" },
  { id: 3, header: "Instructor" },
  { id: 4, header: "Instrument" },
  { id: 5, header: "Day of Week" },
  { id: 6, header: "# Students" },
  { id: 7, header: "Price" },
  { id: 8, header: "Status" },
  { id: 9, header: "Action" },
];

const Course = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); // State to control popover visibility
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const data = useSelector((state) => state.reducer.courses);

  const filterData = (data, term) => {
    return data?.filter(
      (item) =>
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.instructor.toLowerCase().includes(term.toLowerCase()) ||
        item.dayOfWeek.toLowerCase().includes(term.toLowerCase()) ||
        item.description.toLowerCase().includes(term.toLowerCase()) ||
        item.instrument.toLowerCase().includes(term.toLowerCase()) ||
        item.numStudents.toLowerCase().includes(term.toLowerCase()) ||
        item.price.toLowerCase().includes(term.toLowerCase()) ||
        item.status.toLowerCase().includes(term.toLowerCase()) ||
        item.action.toLowerCase().includes(term.toLowerCase())
    );
  };

  return (
    <div>
      <h2 className="text-3xl f mb-1 text-gray-500 pt-3">Courses</h2>
      <div className="mt-5 flex justify-between items-center">
        <div>
          <h2 className="text-xl f mb-4 text-gray-500 3">COURSE LIST</h2>
        </div>
        <div className="relative">
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 pr-4 mt-2 mb-2 bg-white rounded-xl text-gray-600 border-none"
          />
          <AiOutlineSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black bg-white " />
        </div>
      </div>

      <TableDemo
        dataSource={StudentHeader}
        column={filterData(data, searchTerm)}
      />

   
 
<div className=" bottom-0 right-0">
  <Popover
    className="flex items-center justify-center z-50"
    onClose={() => setIsPopoverOpen(false)} // Close popover when clicked outside
  >
    <PopoverTrigger className="bg-purple-400 p-4 rounded-xl mt-3 mb-3 text-white cursor-pointer">
      Add Course +
    </PopoverTrigger>
    <PopoverContent className="bg-white rounded-lg shadow-lg">
    <h2 className="text-gray-600">Add Course</h2>
      <div className="p-6">
        
        <Input className="mb-4 border rounded-lg p-2 text-gray-600" placeholder="Course Name" />
        <Input className="mb-4 border rounded-lg p-2 text-gray-600" placeholder="Instructor" />
        <Input className="mb-4 border rounded-lg p-2 text-gray-600" placeholder="Description" />
        <Select className="mb-4 border rounded-lg p-2 text-gray-600">
          <SelectTrigger className="w-full text-gray-600">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="text-gray-600 bg-white">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Select className="mb-4 border rounded-lg p-2 text-gray-600">
          <SelectTrigger className="w-full text-gray-600">
            <SelectValue placeholder="Category " />
          </SelectTrigger>
          <SelectContent className="text-gray-600 bg-white">
            <SelectItem value="programming">Programming</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="business">Business</SelectItem>
          </SelectContent>
        </Select>
        <Input className="mb-6 border rounded-lg p-2 text-gray-600" placeholder="Price" />
        <div className="flex justify-end">
          <Button className="mr-3 border rounded-lg p-2 text-gray-600">Cancel</Button>
          <Button className="bg-purple-400 text-white border rounded-lg p-2">Add Course</Button>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</div>


   
    </div>
  );
};

export default Course;
