import { useDeletePostMutation } from "@/lib/postsApi";
import { Post, User } from "@/types/json-placeholder-data";
import { ArrowForward, Delete } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function PostPreviewCard({
  post,
  user,
}: {
  post: Post;
  user: User;
}) {
  const [deletePost, { isLoading }] = useDeletePostMutation();

  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardHeader
        avatar={<Avatar>{user.name[0]}</Avatar>}
        title={
          <Typography variant="body2" noWrap>
            {post.title}
          </Typography>
        }
        subheader={user.name}
        action={
          <IconButton
            color="error"
            disabled={isLoading}
            onClick={() => deletePost(post.id)}
          >
            {isLoading ? <CircularProgress size={24} /> : <Delete />}
          </IconButton>
        }
        sx={{
          "& .MuiCardHeader-content": {
            overflow: "hidden",
            minWidth: 0,
          },
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="body2"
          sx={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton href={`/posts/${post.id}`} LinkComponent={Link}>
          <ArrowForward />
        </IconButton>
      </CardActions>
    </Card>
  );
}
