import React from "react";

export default function Search() {
  return (
    <div>
      {/* Search Section */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search by keywords..."
          className="p-2 border border-gray-500 rounded-md w-full"
        />
      </div>
    </div>
  );
}
