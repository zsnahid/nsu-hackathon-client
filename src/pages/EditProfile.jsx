import { Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function UserProfile() {
  const { user } = useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone_number = form.phoneNumber.value;
    const profile_photo_url = form.profilePhotoURL.value;

    const userInfo = {
      user_name: name,
      user_email: email,
      phone_number: phone_number,
      profile_photo_url: profile_photo_url,
    };

    axios
      .patch(`http://localhost:3000/users/${email}`, userInfo)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="grid grid-cols-12 h-[70vh]">
      <div className="col-span-2"></div>
      <form
        className="col-span-8 p-10"
        onSubmit={handleUpdateProfile}
      >
        <Typography
          variant="h3"
          className="border-b border-b-gray-500"
        >
          Edit Profile
        </Typography>
        <div className="flex mt-10">
          <div>
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
                  <input
                    type="text"
                    id="name"
                  />
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Email</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  <input
                    type="email"
                    id="email"
                  />
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Phone</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  <input
                    type="text"
                    id="phoneNumber"
                  />
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Profile Photo URL</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  <input
                    type="text"
                    id="profilePhotoURL"
                  />
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Verified</dt>
                <dd className="text-gray-700 sm:col-span-2">No</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-5 flex justify-end gap-5">
          <Button
            variant="outlined"
            type="submit"
          >
            Update Profile
          </Button>
        </div>
      </form>
      <div className="col-span-2"></div>
    </div>
  );
}
