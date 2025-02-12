import React from "react";

export default function Comments() {
  return (
    <div>
      <input
        type="text"
        placeholder="Write a comment..."
        class="w-full border rounded-lg p-2"
      />
      {/* user info */}
      <div class="flex items-center space-x-2 mt-4">
        <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
        <p class="text-sm text-gray-600 font-small">
          Nahid• <span class="text-gray-400">just now</span>
        </p>
      </div>
      <div class="ml-10">
        <p class="text-sm text-gray-700 font-small">
          I don't know, can you please tell me what is it?
        </p>
      </div>
    </div>
  );
}
