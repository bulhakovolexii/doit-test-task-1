"use client";

import { Add, AddCircle, List } from "@mui/icons-material";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";

export default function Home() {
  const theme = useTheme();
  const gradient =
    theme.palette.mode === "light"
      ? "linear-gradient(to bottom right, #F3E5F5, #E3F2FD)"
      : "linear-gradient(to bottom right,  #263239,#4A148B)";

  return (
    <Stack
      maxWidth={890}
      m={4}
      px={3}
      py={4}
      width="100%"
      borderRadius={2}
      spacing={3}
      sx={{ background: gradient }}
    >
      <Typography
        variant="h2"
        letterSpacing={-1}
        align="center"
        sx={{ fontSize: { xs: "2.5rem", sm: "3.75rem" } }}
      >
        Ласкаво просимо до DOiT MVP
      </Typography>
      <Typography align="center" fontWeight={400} sx={{ opacity: 0.5 }}>
        Ми працюємо над MVP освітньої платформи. Приєднуєтесь до команди!
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        justifyContent="center"
      >
        <Button
          variant="contained"
          size="large"
          href="/posts"
          LinkComponent={Link}
          startIcon={<List />}
        >
          Переглянути пости
        </Button>
        <Button
          variant="outlined"
          size="large"
          href="/posts/create"
          LinkComponent={Link}
          startIcon={<AddCircle />}
        >
          Додати пост
        </Button>
      </Stack>
    </Stack>
  );
}
