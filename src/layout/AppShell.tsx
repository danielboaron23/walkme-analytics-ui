import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

/**
 * App chrome: 56px header on top, 64px sidebar on the left,
 * scrollable content area on the app background.
 */
export function AppShell({
  children,
  showSearch = false,
}: {
  children: React.ReactNode;
  showSearch?: boolean;
}) {
  return (
    <div className="flex h-full flex-col bg-bg-surface">
      <Header showSearch={showSearch} />
      <div className="flex min-h-0 flex-1">
        <Sidebar />
        <main className="min-w-0 flex-1 overflow-auto bg-bg-app">{children}</main>
      </div>
    </div>
  );
}
