import React from "react";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { MdOutlineModeComment } from "react-icons/md";
import { PiShareFatLight } from "react-icons/pi";
import Comments from "../components/comments";
import Filtering from "../components/Filtering";
import Sorting from "../components/Sorting";
import Search from "../components/Search";

export default function CrimeFeed() {
  return (
    <div class="grid grid-cols-3">
      {/* first grid */}
      <div class="col-span-1 rounded flex flex-col gap-4">
        <div>
          <Filtering />
        </div>
        <div>
          <Sorting />
        </div>
        <div>
          <Search />
        </div>
      </div>

      {/* second grid */}
      <div class="col-span-1 bg-white shadow-lg rounded-lg p-4">
        {/* user info */}
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
          <p class="text-sm text-gray-600 font-semibold">
            Foysal• <span class="text-gray-400">22 hr. ago</span>
          </p>
        </div>

        {/* content details */}
        <div>
          <h2 class="mt-2 text-lg font-bold">
            What would you say is the most overrated web dev tool right now?
          </h2>
          <img src="/src/assets/dev-img.jpg" alt="content-img" />
        </div>

        {/* interaction */}
        <div class="flex justify-between">
          <button class="flex items-center space-x-1 text-gray-600">
            <BiUpvote />
            <span class="text-sm">361</span>
            <BiDownvote />
          </button>

          <button class="flex items-center space-x-1 text-gray-600">
            <MdOutlineModeComment />
            <span class="text-sm">395</span>
          </button>

          <button class="flex items-center space-x-1 text-gray-600">
            <PiShareFatLight />
            <span class="text-sm">Share</span>
          </button>

          {/* Post Verification Score */}
          <div className="text-sm text-gray-600">
            <span className="font-medium">Post Verification Score:</span>{" "}
            <span className="font-bold text-green-600">87%</span>
          </div>
        </div>

        <div class="mt-5">
          <Comments />
        </div>
      </div>

      {/* third grid */}
      <div class="col-span-3"></div>
    </div>
  );
}
