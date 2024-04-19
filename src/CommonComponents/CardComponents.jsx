import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CardComponents = ({ Number, descn }) => {
  return (
    <div style={{height:"160px", maxWidth: "18rem", borderRadius: "0.5rem", overflow: "hidden", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", border: "1px solid gray", backgroundColor: "white" }}>
      <div style={{ padding: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar style={{ marginRight: "1rem" }}>
            <AvatarImage src="https://github.com/shadcn.png" style={{ borderRadius: "50%", width: "40px", height: "40px" }} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", margin: "0", marginBottom: "0.5rem",color:"gray"}}>{Number}</h2>
            <p style={{ fontSize: "0.875rem", color: "#4b5563", margin: "0" }}>{descn}</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end",padding:"10px" }}>
        <p style={{color:"blueviolet"}}>View</p>
      </div>
    </div>
  );
};

export default CardComponents;
