// app/login/page.tsx

"use client";

import { signIn, useSession } from "next-auth/react";
import DropdownMenu from "@/components/DropdownMenu";
import { Button } from "@mui/material";

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <DropdownMenu />
      <h1>Login Page</h1>
      {session ? (
        <p>Welcome, {session.user?.name}</p>
      ) : (
        <Button variant="contained" color="primary" onClick={() => signIn("google")}>
          Login with Google
        </Button>
      )}
    </div>
  );
}
