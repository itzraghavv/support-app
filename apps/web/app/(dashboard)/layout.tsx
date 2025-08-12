import { AuthGuard } from "@/modules/auth/ui/components/auth-guard";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthGuard>{children}</AuthGuard>;
};

export default DashboardLayout;
