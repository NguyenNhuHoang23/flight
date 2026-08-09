import AdminLayout from "./layoutadmin";
import AdminAuthProvider from "./provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      <AdminLayout>{children}</AdminLayout>
    </AdminAuthProvider>
  );
}
