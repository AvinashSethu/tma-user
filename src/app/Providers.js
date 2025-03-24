"use client";

import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";

export default function ClientProviders({ children, session }) {
  return (
    <SessionProvider session={session}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
      >
        {children}
      </SnackbarProvider>
    </SessionProvider>
  );
}