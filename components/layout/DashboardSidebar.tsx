"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter, usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  LayoutGrid,
  BookOpen,
  TrendingUp,
  Music,
  Settings,
  LogOut,
  ChevronLeft
} from "lucide-react";

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  active?: boolean;
  id: string;
  href: string;
}

interface DashboardSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function DashboardSidebar({ isOpen = true, onClose }: DashboardSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const mainNavItems: SidebarItem[] = [
    {
      id: "dashboard",
      icon: <LayoutGrid className="w-5 h-5" />,
      label: "Dashboard",
      href: "/dashboard",
      active: pathname === "/dashboard"
    },
    {
      id: "parcours",
      icon: <BookOpen className="w-5 h-5" />,
      label: "Parcours",
      href: "/parcours",
      active: pathname.startsWith("/parcours")
    },
    {
      id: "progression",
      icon: <TrendingUp className="w-5 h-5" />,
      label: "Ma Progression",
      href: "/progression",
      active: pathname === "/progression"
    },
    {
      id: "morceaux",
      icon: <Music className="w-5 h-5" />,
      label: "Mes Morceaux",
      href: "/morceaux",
      active: pathname === "/morceaux"
    },
  ];

  const handleNavClick = (item: SidebarItem) => {
    router.push(item.href);

    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      onClose?.();
    }
  };

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/connexion');
  };

  const handleSettings = () => {
    router.push('/settings');
    if (window.innerWidth < 768) {
      onClose?.();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 z-50 h-full w-72 bg-[#0e0d12]/95 border-r border-white/[0.08] backdrop-blur-xl transform transition-transform duration-300 ease-in-out
        md:relative md:transform-none md:bg-transparent md:backdrop-blur-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Mobile Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-white/[0.08] md:hidden">
            <h2 className="font-semibold text-[#f2efe8]">Navigation</h2>
            <button
              onClick={onClose}
              className="btn-ghost rounded-lg p-2 text-dim"
              aria-label="Fermer la navigation"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <ScrollArea className="flex-1 px-3 py-4">
            {/* Main Navigation */}
            <div className="space-y-1">
              <h3 className="px-3 text-[11px] font-bold text-faint uppercase tracking-widest mb-3">
                Principal
              </h3>
              {mainNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`w-full flex items-center gap-3 h-10 px-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    item.active
                      ? 'bg-[#e0a83c]/[0.13] text-[#f0c66a] border border-[#e0a83c]/30 shadow-[0_0_18px_rgba(224,168,60,0.12)]'
                      : 'text-dim border border-transparent hover:bg-white/[0.05] hover:text-[#f2efe8]'
                  }`}
                >
                  {item.icon}
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold border ${
                      item.active
                        ? 'badge-brass'
                        : 'bg-white/[0.05] text-faint border-white/10'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

          </ScrollArea>

          {/* Bottom Navigation */}
          <div className="border-t border-white/[0.08] p-3 space-y-1">
            <button
              onClick={handleSettings}
              className={`w-full flex items-center gap-3 h-10 px-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                pathname === '/settings'
                  ? 'bg-white/[0.06] text-[#f2efe8]'
                  : 'text-dim hover:bg-white/[0.05] hover:text-[#f2efe8]'
              }`}
            >
              <Settings className="w-5 h-5" />
              Paramètres
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 h-10 px-3 rounded-xl text-sm font-semibold text-dim transition-all duration-200 hover:bg-red-400/10 hover:text-red-300"
            >
              <LogOut className="w-5 h-5" />
              Déconnexion
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
