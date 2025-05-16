import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const appRoutes = [
  {
    path: "/",
    label: "Головна",
    icon: HomeIcon,
  },
  {
    path: "/posts",
    label: "Усі пости",
    icon: ListIcon,
  },
  {
    path: "/posts/create",
    label: "Створити пост",
    icon: AddCircleIcon,
  },
];
