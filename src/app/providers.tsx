"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { AppStore, makeStore } from "@/lib/store";
import { ThemeWrapper } from "@/lib/themeWrapper";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>(undefined);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <Provider store={storeRef.current}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </Provider>
    </AppRouterCacheProvider>
  );
};
