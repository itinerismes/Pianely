"use client";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BrandMark } from "@/components/BrandMark";
import { MidiStatus } from "@/components/midi/MidiStatus";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Bell,
  Menu,
  Settings
} from "lucide-react";

interface DashboardHeaderProps {
  onMenuToggle?: () => void;
  userName?: string;
  userAvatar?: string;
}

export function DashboardHeader({
  onMenuToggle,
  userName = "Utilisateur",
  userAvatar
}: DashboardHeaderProps) {
  const router = useRouter();
  const [notificationCount, setNotificationCount] = useState(0);

  const handleNotificationClick = () => {
    setNotificationCount(0);
  };

  return (
    <header className="topbar-hairline sticky top-0 z-40 bg-[#0a0a0e]/80 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-4 px-4">
        {/* Mobile Menu Button */}
        <button
          className="btn-ghost rounded-lg p-2 text-dim md:hidden"
          onClick={onMenuToggle}
          aria-label="Ouvrir la navigation"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Logo */}
        <div
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={() => router.push('/dashboard')}
        >
          <BrandMark size={32} />
          <span className="font-display hidden sm:inline text-lg text-[#f2efe8]">
            Pianely
          </span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-faint w-4 h-4" />
            <Input
              placeholder="Rechercher des leçons..."
              className="pl-10 rounded-full bg-white/[0.05] border-white/10 text-[#f2efe8] placeholder:text-faint focus:border-[#e0a83c]/50 focus:ring-[#e0a83c]/30 transition-all duration-200"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Statut clavier MIDI */}
          <MidiStatus />

          {/* Notifications */}
          <button
            onClick={handleNotificationClick}
            className="btn-ghost relative rounded-lg p-2 text-dim"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-[10px] font-bold rounded-full bg-[#e0a83c] text-[#1a1408]">
                {notificationCount}
              </span>
            )}
          </button>

          {/* Settings */}
          <button
            onClick={() => router.push('/settings')}
            className="btn-ghost rounded-lg p-2 text-dim"
            aria-label="Paramètres"
          >
            <Settings className="w-5 h-5" />
          </button>

          {/* User Avatar */}
          <div
            className="flex items-center gap-3 cursor-pointer rounded-xl p-1.5 pl-3 transition-colors duration-200 hover:bg-white/[0.05]"
            onClick={() => router.push('/settings')}
          >
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold text-[#f2efe8]">{userName}</p>
              <p className="text-xs text-faint">Étudiant 🎹</p>
            </div>
            <Avatar className="ring-2 ring-[#e0a83c]/40 transition-all duration-200 hover:ring-[#e0a83c]/70">
              <AvatarImage src={userAvatar} alt={userName} />
              <AvatarFallback className="bg-gradient-to-br from-[#f0c66a] to-[#b07d1f] text-[#1a1408] font-bold">
                {userName.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
