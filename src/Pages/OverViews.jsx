import CardComponents from "@/CommonComponents/CardComponents";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import NewTable from "@/CommonComponents/NewTable";

const OverViews = () => {
  return (
    <div>
      <h2>Overviews</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <CardComponents Number={1648} descn={"Total number of students"} />
        <CardComponents Number={1648} descn={"Total number of students"} />
        <CardComponents Number={1648} descn={"Total number of students"} />
        <CardComponents Number={1648} descn={"Total number of students"} />
        <CardComponents Number={1648} descn={"Total number of students"} />
      </div>
      <div>
        <NewTable />
      </div>
    </div>
  );
};

export default OverViews;
