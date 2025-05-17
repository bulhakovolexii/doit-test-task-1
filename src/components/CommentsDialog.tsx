import { Comment } from "@/types/json-placeholder-data";
import {
  Dialog,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

interface CommentsDialogProps {
  open: boolean;
  onClose: () => void;
  comments: Comment[];
}

export function CommentsDialog({
  open,
  onClose,
  comments,
}: CommentsDialogProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Коментарі</DialogTitle>
      <Divider />
      <List sx={{ minWidth: 300, px: 3, pb: 2 }}>
        {comments?.map((comment) => (
          <ListItem key={comment.id}>
            <ListItemText secondary={comment.body} primary={comment.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
