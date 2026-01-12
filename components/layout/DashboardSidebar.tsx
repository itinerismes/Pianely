"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
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
  const [selectedNiveau, setSelectedNiveau] = useState<number | null>(null);

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
      badge: "5",
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

  const niveaux = [
    { id: 1, name: "Niveau 1", color: "from-green-400 to-emerald-500", href: "/parcours/niveau-1", count: 5 },
    { id: 2, name: "Niveau 2", color: "from-blue-400 to-cyan-500", href: "/parcours/niveau-2", count: 7 },
    { id: 3, name: "Niveau 3", color: "from-purple-400 to-violet-500", href: "/parcours/niveau-3", count: 8 },
    { id: 4, name: "Niveau 4", color: "from-orange-400 to-amber-500", href: "/parcours/niveau-4", count: 10 },
    { id: 5, name: "Niveau 5", color: "from-pink-400 to-rose-500", href: "/parcours/niveau-5", count: 12 },
  ];

  const handleNavClick = (item: SidebarItem) => {
    router.push(item.href);

    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      onClose?.();
    }
  };

  const handleNiveauClick = (niveau: typeof niveaux[0]) => {
    setSelectedNiveau(selectedNiveau === niveau.id ? null : niveau.id);
    router.push(niveau.href);

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
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 z-50 h-full w-72 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-950 dark:to-gray-900 border-r border-indigo-100 dark:border-gray-800 transform transition-transform duration-300 ease-in-out shadow-xl
        md:relative md:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Mobile Close Button */}
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-800 md:hidden">
            <h2 className="font-semibold">Navigation</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>

          <ScrollArea className="flex-1 px-3 py-4">
            {/* Main Navigation */}
            <div className="space-y-2">
              <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Principal
              </h3>
              {mainNavItems.map((item) => (
                <Button
                  key={item.id}
                  variant={item.active ? "secondary" : "ghost"}
                  onClick={() => handleNavClick(item)}
                  className={`w-full justify-start gap-3 h-10 transition-all duration-200 ${
                    item.active
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700 transform scale-105 shadow-lg'
                      : 'hover:bg-indigo-50 dark:hover:bg-gray-800/50 hover:transform hover:scale-105 hover:shadow-md'
                  }`}
                >
                  {item.icon}
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <Badge className={`ml-auto border-0 text-xs transition-all duration-200 ${
                      item.active
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white animate-pulse'
                        : 'bg-gradient-to-r from-orange-400 to-pink-500 text-white'
                    }`}>
                      {item.badge}
                    </Badge>
                  )}
                </Button>
              ))}
            </div>

            {/* Niveaux */}
            <div className="mt-8 space-y-2">
              <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Niveaux
              </h3>
              {niveaux.map((niveau) => {
                const isSelected = selectedNiveau === niveau.id || pathname.includes(`/niveau-${niveau.id}`);
                return (
                  <Button
                    key={niveau.id}
                    variant="ghost"
                    onClick={() => handleNiveauClick(niveau)}
                    className={`w-full justify-start gap-3 h-9 text-sm transition-all duration-200 ${
                      isSelected
                        ? 'bg-indigo-100 dark:bg-gray-800/50 border-l-4 border-indigo-500 dark:border-indigo-400 transform scale-105 shadow-md'
                        : 'hover:bg-indigo-50 dark:hover:bg-gray-800/30 hover:transform hover:scale-102'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${niveau.color} shadow-sm transition-all duration-200 ${
                      isSelected ? 'scale-125 shadow-lg' : ''
                    }`} />
                    <span className={`flex-1 text-left ${isSelected ? 'font-medium' : ''}`}>{niveau.name}</span>
                    <span className="text-xs text-muted-foreground">{niveau.count}</span>
                  </Button>
                );
              })}
            </div>
          </ScrollArea>

          {/* Bottom Navigation */}
          <div className="border-t border-indigo-100 dark:border-gray-800 p-3 space-y-1">
            <Button
              variant="ghost"
              onClick={handleSettings}
              className={`w-full justify-start gap-3 h-10 transition-all duration-200 ${
                pathname === '/settings'
                  ? 'bg-indigo-100 dark:bg-gray-800/50 text-indigo-700 dark:text-indigo-400 font-medium'
                  : 'hover:bg-indigo-50 dark:hover:bg-gray-800/30 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              <Settings className="w-5 h-5" />
              Paramètres
            </Button>
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="w-full justify-start gap-3 h-10 transition-all duration-200 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400"
            >
              <LogOut className="w-5 h-5" />
              Déconnexion
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
