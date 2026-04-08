import { Outlet } from "react-router";
import { BottomNav } from "./BottomNav";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pb-20">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
