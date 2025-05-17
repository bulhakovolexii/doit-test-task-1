import { useDeletePostMutation } from "@/lib/postsApi";
import { Post, User } from "@/types/json-placeholder-data";
import { ArrowBack, Delete } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SinglePostCard({
  post,
  user,
}: {
  post: Post;
  user: User;
}) {
  const [deletePost, { isLoading }] = useDeletePostMutation();
  const router = useRouter();

  const handleDeletePost = async () => {
    await deletePost(post.id);
    router.replace("/posts");
  };

  return (
    <Card sx={{ height: "100%", maxWidth: "100%" }}>
      <CardHeader
        avatar={<Avatar>{user.name[0]}</Avatar>}
        title={
          <Typography variant="body2" noWrap>
            {post.title}
          </Typography>
        }
        subheader={user.name}
        sx={{
          "& .MuiCardHeader-content": {
            overflow: "hidden",
            minWidth: 0,
          },
        }}
      />
      <CardContent>
        <Typography variant="body2">{post.body}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="error"
          startIcon={isLoading ? <CircularProgress size={20} /> : <Delete />}
          disabled={isLoading}
          onClick={handleDeletePost}
        >
          Видалити
        </Button>
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          href={"/posts"}
          LinkComponent={Link}
        >
          До списку
        </Button>
      </CardActions>
    </Card>
  );
}
