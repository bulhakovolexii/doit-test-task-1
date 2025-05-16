import { Metadata } from "next";
import { AppProviders } from "./providers";
import AppBar from "@/components/AppBar";
import { Box, Container } from "@mui/material";

export const metadata: Metadata = {
  title: "DOiT Front-end test task #1",
  description:
    "Frontend blog UI with full CRUD on posts using Redux Toolkit and JSONPlaceholder as a mock API. Built with Next.js App Router and Material UI. Includes light/dark theme toggle and responsive layout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <AppProviders>
          <AppBar />
          <Container maxWidth="lg">
            <Box
              sx={{
                my: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {children}
            </Box>
          </Container>
        </AppProviders>
      </body>
    </html>
  );
}
