import DashboardIcon from "@mui/icons-material/Dashboard";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import env from "../utils/env";

export const navigation = [
  {
    title: "Dashboard",
    exact: false,
    link: "/",
    icon: <DashboardIcon />,
  },
  {
    header: true,
    title: "Remittances",
  },
  {
    title: "Procesando",
    exact: false,
    link: "/remittances",
    icon: <AutorenewIcon />,
  },
  {
    title: "Completadas",
    exact: false,
    link: "/remittances_completed",
    icon: <DoneAllIcon />,
  },
  {
    title: "Fallidas",
    exact: false,
    link: "/remittances_fails",
    icon: <SmsFailedIcon />,
  },
];
