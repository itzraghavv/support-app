"use client";

import { api } from "@workspace/backend/_generated/api";
import { useQuery } from "convex/react";

export default function Page() {
  const users = useQuery(api.user.getUser);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      web/page.tsx
      <div className="max-w-sm w-full mx-auto">{JSON.stringify(users)}</div>
    </div>
  );
}
