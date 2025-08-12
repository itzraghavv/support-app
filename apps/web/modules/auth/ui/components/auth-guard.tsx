"use client";

import { AuthLayout } from "@/modules/auth/ui/layouts/auth-layout";
import { SignInView } from "@/modules/auth/ui/views/sign-in-view";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthLoading>Loading...</AuthLoading>
      <Authenticated>
        <AuthLayout>{children}\</AuthLayout>
      </Authenticated>
      <Unauthenticated>
        <AuthLayout>
          <SignInView />
        </AuthLayout>
      </Unauthenticated>
    </>
  );
};
