import { useDeletePostMutation } from "@/lib/postsApi";
import { Post, User } from "@/types/json-placeholder-data";
import { ArrowForward, Delete } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";

export default function PostPreviewCard({
  post,
  user,
}: {
  post: Post;
  user: User;
}) {
  const [deletePost, { isLoading }] = useDeletePostMutation();

  return (
    <Card sx={{ height: "100%" }}>
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
      <CardContent>
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
        <IconButton href={`/posts/${post.id}`}>
          <ArrowForward />
        </IconButton>
      </CardActions>
    </Card>
  );
}
