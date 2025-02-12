import React from "react";

export default function Sorting() {
  return (
    <div>
      {/* Sorting Section */}
      <div className="flex gap-4">
        <select className="p-2 border border-gray-500 rounded-md">
          <option value="date">Sort by Date</option>
          <option value="upvotes">Sort by Upvotes</option>
          <option value="verification">Sort by Verification Score</option>
        </select>
      </div>
    </div>
  );
}
