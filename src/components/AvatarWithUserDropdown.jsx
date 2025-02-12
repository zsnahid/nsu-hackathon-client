import { PowerIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import React, { useContext } from "react";
import { PiUserCircle } from "react-icons/pi";
import { AuthContext } from "../contexts/AuthContext";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    link: "/profile",
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    link: "/signout",
  },
];

export function AvatarWithUserDropdown() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useContext(AuthContext);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu
      open={isMenuOpen}
      handler={setIsMenuOpen}
      placement="bottom-end"
    >
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center rounded-full p-0"
        >
          {user ? (
            user?.photURL ? (
              <Avatar
                variant="circular"
                size="md"
                alt="tania andrew"
                withBorder={true}
                color="blue-gray"
                className=" p-0.5"
                src={user.photURL}
              />
            ) : (
              <PiUserCircle className="size-10" />
            )
          ) : (
            <PiUserCircle className="size-10" />
          )}
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, link }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <a
              key={label}
              href={link}
            >
              <MenuItem
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            </a>
          );
        })}
      </MenuList>
    </Menu>
  );
}
