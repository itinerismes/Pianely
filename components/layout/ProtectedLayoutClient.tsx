"use client";

import { DashboardHeader } from "./DashboardHeader";
import { DashboardSidebar } from "./DashboardSidebar";
import { useState } from "react";

interface ProtectedLayoutClientProps {
  children: React.ReactNode;
  userName: string;
  userEmail: string;
}

export function ProtectedLayoutClient({
  children,
  userName,
  userEmail
}: ProtectedLayoutClientProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <DashboardHeader
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        userName={userName}
      />

      <div className="flex">
        <DashboardSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="min-w-0 flex-1 px-5 py-8 md:px-10 md:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
