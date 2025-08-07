"use client";

import { api } from "@workspace/backend/_generated/api";
import { useQuery } from "convex/react";

export default function Page() {
  const users = useQuery(api.user.getUser);
  return (
    <div>
      web/page.tsx
      {JSON.stringify(users)}
    </div>
  );
}
