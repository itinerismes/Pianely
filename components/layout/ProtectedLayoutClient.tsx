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

        <main className="flex-1 p-4 md:p-6 md:ml-0">
          {children}
        </main>
      </div>
    </div>
  );
}
