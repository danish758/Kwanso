import { useState } from "react";
import { Avatar } from "@mui/material";
import { useLocation } from "react-router-dom";
import { UserType } from "../types";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import LockIcon from "@mui/icons-material/Lock";

interface StateType {
  user: UserType;
}
interface ContactInfo {
  name: string;
  Icon: React.ElementType;
  title: string;
}
const icons = [
  {
    name: "name",
    Icon: PersonIcon,
    title: "Hi, My name is",
  },
  {
    name: "email",
    Icon: EmailIcon,
    title: "My email address is",
  },
  {
    name: "dob",
    Icon: CalendarMonthIcon,
    title: "My birthday is",
  },
  {
    name: "location",
    Icon: LocationOnIcon,
    title: "My address is",
  },
  {
    name: "contact",
    Icon: CallIcon,
    title: "My phone number is",
  },
  {
    name: "password",
    Icon: LockIcon,
    title: "My password is",
  },
];
const User = () => {
  const { state } = useLocation();
  const { user }: StateType = state;
  const [selected, setSelected] = useState<ContactInfo>(icons[0]);
  //
  const handleMouseEnter = (icon: ContactInfo) => {
    setSelected(icon);
  };
  // set the value of the heading w.r.t the selected option.
  const setHeading = () => {
    let heading = "";
    switch (selected.name) {
      case "name":
        heading = `${user?.name?.first} ${user?.name?.last}`;
        break;
      case "email":
        heading = `${user?.email}`;
        break;
      case "dob":
        const dobDate = new Date(user?.dob?.date);
        const dayOfWeek = dobDate.getDay();
        const month = dobDate.getMonth();
        const year = dobDate.getFullYear();
        heading = `${dayOfWeek}/${month}/${year}`;
        break;
      case "location":
        heading = `${user?.location?.street?.number} ${user?.location?.street?.name}`;
        break;
      case "contact":
        heading = `${user?.cell}`;
        break;
      case "password":
        heading = `${user?.login?.password}`;
        break;
      default:
        break;
    }
    return heading;
  };

  return (
    <div className="mt-2 flex justify-center items-center h-screen">
      <div className="w-full md:w-3/5 min-h-96 rounded shadow-md">
        <div className="min-h-32 bg-gray-300 relative ">
          <Avatar
            sx={{
              position: "absolute",
              bottom: -33,
              right: { xs: "34%", sm: "39%", md: "44%" },
              width: 100,
              height: 100,
            }}
            alt="Remy Sharp"
            src={user?.picture?.thumbnail}
          ></Avatar>
        </div>
        <div className="flex flex-col justify-center items-center mt-16 px-8 md:px-14">
          <p id="user_title" className="color-[#999] text-base ">
            {selected?.title}
          </p>
          <p className="color-[#2c2e31] text-4xl break-all">{setHeading()}</p>
          <div className="flex justify-between w-full mt-8">
            {icons.map((icon) => {
              const { Icon, name } = icon;
              return (
                <div onMouseEnter={() => handleMouseEnter(icon)} key={name}>
                  <Icon
                    sx={{
                      color: selected.name === name ? "#83BA43" : "#C8C8C8",
                      cursor: "pointer",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
