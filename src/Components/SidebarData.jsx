import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import InfoIcon from "@mui/icons-material/Info";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon></DashboardIcon>,
    link: "/dashboard",
  },
  {
    title: "User List",
    icon: <FormatListBulletedIcon></FormatListBulletedIcon>,
    link: "/userlist",
  },
  {
    title: "Add New User",
    icon: <PersonAddIcon></PersonAddIcon>,
    link: "/addUser",
  },
  {
    title: "About",
    icon: <InfoIcon />,
    link: "/about",
  },
];
