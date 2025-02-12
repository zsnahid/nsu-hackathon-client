import { Button, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function UserProfile() {
  const { user } = useContext(AuthContext);
  return (
    <div className="grid grid-cols-12 h-[70vh]">
      <div className="col-span-2"></div>
      <div className="col-span-8 p-10">
        <Typography
          variant="h3"
          className="border-b border-b-gray-500"
        >
          Your Profile
        </Typography>
        <div className="flex mt-10">
          <div className="">
            <img
              src={user?.photoURL}
              className="size-32"
            />
          </div>

          <div className="flow-root rounded-lg border border-gray-100 w-3/4 ml-auto py-3 shadow-xs">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Name</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {user?.displayName}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Email</dt>
                <dd className="text-gray-700 sm:col-span-2">{user?.email}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Phone</dt>
                <dd className="text-gray-700 sm:col-span-2">{""}</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Verified</dt>
                <dd className="text-gray-700 sm:col-span-2">No</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-5 flex justify-end gap-5">
          <a href="/verify-otp">
            <Button variant="outlined">Verify</Button>
          </a>
          <Button variant="outlined">Edit Profile</Button>
        </div>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
}
