import { BiDownvote, BiUpvote } from "react-icons/bi";
import { MdOutlineModeComment } from "react-icons/md";
import { PiShareFatLight } from "react-icons/pi";
import Comments from "../components/Comments";
import Filtering from "../components/Filtering";
import Search from "../components/Search";
import Sorting from "../components/Sorting";

export default function CrimeFeed() {
  return (
    <div className="grid grid-cols-3">
      {/* first grid */}
      <div className="col-span-1 rounded flex flex-col gap-4">
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
      <div className="col-span-1 bg-white shadow-lg rounded-lg p-4">
        {/* user info */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <p className="text-sm text-gray-600 font-semibold">
            Foysal• <span className="text-gray-400">22 hr. ago</span>
          </p>
        </div>

        {/* content details */}
        <div>
          <h2 className="mt-2 text-lg font-bold">
            What would you say is the most overrated web dev tool right now?
          </h2>
          <img
            src="/src/assets/dev-img.jpg"
            alt="content-img"
          />
        </div>

        {/* interaction */}
        <div className="flex justify-between">
          <button className="flex items-center space-x-1 text-gray-600">
            <BiUpvote />
            <span className="text-sm">361</span>
            <BiDownvote />
          </button>

          <button className="flex items-center space-x-1 text-gray-600">
            <MdOutlineModeComment />
            <span className="text-sm">395</span>
          </button>

          <button className="flex items-center space-x-1 text-gray-600">
            <PiShareFatLight />
            <span className="text-sm">Share</span>
          </button>

          {/* Post Verification Score */}
          <div className="text-sm text-gray-600">
            <span className="font-medium">Post Verification Score:</span>{" "}
            <span className="font-bold text-green-600">87%</span>
          </div>
        </div>

        <div className="mt-5">
          <Comments />
        </div>
      </div>

      {/* third grid */}
      <div class="col-span-1 bg-white shadow-lg rounded-lg p-4">
        <h2 class="text-xl font-semibold text-gray-700 mb-4">Latest Report</h2>

        <div class="flex items-center space-x-2 mb-4">
          <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
          <p class="text-sm text-gray-600 font-semibold">
            Foysal • <span class="text-gray-400">22 hr. ago</span>
          </p>
         </div>

        <div class="mb-4">
          <h3 class="text-lg font-bold">
            What would you say is the most overrated web dev tool right now?
          </h3>
          <img
            src="/src/assets/dev-img.jpg"
            alt="Latest report"
            className="w-24 h-24 object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
}
