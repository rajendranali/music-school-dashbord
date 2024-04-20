import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Replace "your-path-to-actions" with the actual path to your actions
import CardComponents from "@/CommonComponents/CardComponents";
import StudentTable from "@/CommonComponents/StudentTable";
import {
  fetchBestEnrollmentColumn,
  fetchBestEnrollmentData,
  fetchLatestEnrollmentColumn,
  fetchLatestEnrollmentData,
} from "@/Redux/Action/action";
import { Button } from "@/components/ui/button";

const OverViews = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch actions to fetch latest enrollment column, latest enrollment data, best enrollment column, and best enrollment data
    dispatch(fetchLatestEnrollmentColumn());
    dispatch(fetchLatestEnrollmentData());
    dispatch(fetchBestEnrollmentColumn());
    dispatch(fetchBestEnrollmentData());
  }, [dispatch]); // Call these actions only once when the component mounts

  // Access the fetched data from the Redux store using useSelector
  const latestEnrollmentColumn = useSelector(
    (state) => state.latestEnrollmentColumn
  );
  const latestEnrollmentData = useSelector(
    (state) => state.latestEnrollmentData
  );
  const bestEnrollmentColumn = useSelector(
    (state) => state.bestEnrollmentColumn
  );
  const bestEnrollmentData = useSelector((state) => state.bestEnrollmentData);
  console.log("");
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
            LATEST ENROLLMENTS
          </h2>
        </div>
        <div className="self-end">
          <p className="text-sm p-2 text-purple-700 cursor-pointer">
            View All Course
          </p>
        </div>
      </div>
      <StudentTable
        dataSource={latestEnrollmentColumn}
        column={latestEnrollmentData}
      />

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

      <StudentTable
        dataSource={bestEnrollmentColumn}
        column={bestEnrollmentData}
        type="best_std"
      />

      <Button className="bg-purple-400 border-none rounded-xl mt-2 mb-2">+ Add Course</Button>
    </div>
  );
};

export default OverViews;
