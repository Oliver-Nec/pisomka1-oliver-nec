// app/page.tsx (Home Page)

"use client";

import { useSession } from "next-auth/react";
import DropdownMenu from "@/components/DropdownMenu";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <DropdownMenu />
      <h1>Home Page</h1>
      {session ? (
        <>
          <p>Welcome, {session.user?.name}!</p> {/* Display Google user's name */}
        </>
      ) : (
        <p>Please log in to see your name.</p>
      )}
    </div>
  );
}
