import React from "react";

export default function Comments() {
  return (
    // <div>
    //   <input
    //     type="text"
    //     placeholder="Write a comment..."
    //     class="w-full border rounded-lg p-2"
    //   />
    //   {/* user info */}
    //   <div class="flex items-center space-x-2 mt-4">
    //     <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
    //     <p class="text-sm text-gray-600 font-small">
    //       Nahid• <span class="text-gray-400">just now</span>
    //     </p>
    //   </div>
    //   <div class="ml-10">
    //     <p class="text-sm text-gray-700 font-small">
    //       I don't know, can you please tell me what is it?
    //     </p>
    //   </div>
    // </div>
    <div className="p-4 border rounded-lg shadow-md bg-white">
      {/* Comment Input */}
      <input
        type="text"
        placeholder="Write a comment..."
        className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* User Info */}
      <div className="flex items-center space-x-2 mt-4">
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        <p className="text-sm text-gray-600 font-medium">
          Nahid • <span className="text-gray-400">just now</span>
        </p>
      </div>

      {/* User Comment */}
      <div className="ml-10 mt-2">
        <p className="text-sm text-gray-700">
          I don't know, can you please tell me what is it?
        </p>
      </div>

      {/* Proof Attachment */}
      <div className="ml-10 mt-3">
        <label className="block text-sm text-gray-600 font-medium">
          Attach Proof (Image/Video):
        </label>
        <input
          type="file"
          accept="image/*,video/*"
          className="mt-1 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-white file:bg-gray-500 cursor-pointer"
        />
      </div>
    </div>
  );
}
