import MainLayout from "@/components/layout/MainLayout";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
