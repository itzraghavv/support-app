"use client";

import { SignIn, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";

export default function Page() {
  const users = useQuery(api.user.getUser);
  const addUser = useMutation(api.user.addUser);

  return (
    <>
      <Authenticated>
        <div className="flex flex-col items-center justify-center min-h-svh">
          web/page.tsx
          <UserButton></UserButton>
          <Button onClick={() => addUser()}>Add</Button>
          <div className="max-w-sm w-full mx-auto">{JSON.stringify(users)}</div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <SignIn></SignIn>
      </Unauthenticated>
    </>
  );
}
