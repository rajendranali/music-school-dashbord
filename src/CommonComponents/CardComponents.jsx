import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RxAvatar } from "react-icons/rx";

const CardComponents = ({ numberofitm, descn }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm bg-white w-72 h-auto">
      <div className="p-4">
        <div className="flex items-center">
          <Avatar className="mr-3">
            <AvatarImage
              src="https://github.com/shadcn.png" 
              className="rounded-full w-12 h-12"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold mb-1 text-black">{numberofitm}</h2>
            <p className="text-xs text-gray-600">{descn}</p>
          </div>
        </div>
      </div>
      <div className="p-3 flex justify-end">
        <p className="text-xs text-purple-700">View</p>
      </div>
    </div>
  );
};

export default CardComponents;
