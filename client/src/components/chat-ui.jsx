'use client'

import { MoreVertical, Phone, Search } from "lucide-react";

const ChatUi = ({ userDetails }) => {
  if (!userDetails) {
    return <div className="p-4 text-gray-500">Select a user to view details</div>;
  }

  return (
    <div className="flex flex-col h-full w-full p-4">
      <div className=" p-6 flex items-center justify-between bg-white border-b border-gray-300 shadow-sm p-4 w-full">
        <div>
          <h2 className="font-semibold text-3xl">{userDetails.name}</h2>
        </div>
        <div>
        <div className="flex space-x-4 text-green-500">
          <Search className="w-6 h-6" />
          <Phone className="w-6 h-6" />
          <MoreVertical className="w-6 h-6" />
        </div>
        </div>
        </div>
        
        
    
      </div>

    
  );
};

export default ChatUi;
