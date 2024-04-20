import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TableDemo } from "@/CommonComponents/NewTable";
import { Input } from "@/components/ui/input";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { fetchCourses } from "@/Redux/Action/action";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const data = useSelector((state) => state.courses);

  const filterData = (data, term) => {
    return data.filter(
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

      <Button className="bg-purple-400 p-4 rounded-xl mt-3 mb-3">
        Add Course +
      </Button>
    </div>
  );
};

export default Course;
