import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import type { Metadata } from "next";
import theme from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

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
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
