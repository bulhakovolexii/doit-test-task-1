import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { appRoutes } from "@/lib/routes";

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List sx={{ minWidth: 240 }}>
        {appRoutes.map((route) => (
          <ListItem key={route.path} disablePadding>
            <ListItemButton onClick={() => handleNavigate(route.path)}>
              {route.icon && (
                <ListItemIcon>
                  <route.icon />
                </ListItemIcon>
              )}
              <ListItemText primary={route.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
