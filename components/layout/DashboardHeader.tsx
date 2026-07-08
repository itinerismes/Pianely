"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BrandMark } from "@/components/BrandMark";
import { MidiStatus } from "@/components/midi/MidiStatus";
import { NotificationBell } from "@/components/notifications/NotificationBell";
import { useRouter } from "next/navigation";
import { Menu, Settings } from "lucide-react";

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

  return (
    <header className="topbar-hairline sticky top-0 z-40 bg-[#0a0a0e]/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between gap-4 px-5 md:px-8">
        <div className="flex items-center gap-3">
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
            className="flex cursor-pointer items-center gap-2.5"
            onClick={() => router.push('/dashboard')}
          >
            <BrandMark size={32} />
            <span className="font-display hidden text-lg text-[#f2efe8] sm:inline">
              Pianely
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2.5">
          {/* Statut clavier MIDI */}
          <MidiStatus />

          {/* Notifications réelles (streak, séance, succès) */}
          <NotificationBell />

          {/* Settings */}
          <button
            onClick={() => router.push('/settings')}
            className="btn-ghost rounded-lg p-2 text-dim"
            aria-label="Paramètres"
          >
            <Settings className="h-5 w-5" />
          </button>

          {/* User Avatar */}
          <div
            className="flex cursor-pointer items-center gap-3 rounded-full p-1 pl-3 transition-colors duration-200 hover:bg-white/[0.05]"
            onClick={() => router.push('/settings')}
          >
            <span className="hidden text-sm font-semibold text-[#f2efe8] sm:inline">
              {userName}
            </span>
            <Avatar className="ring-2 ring-[#e0a83c]/40 transition-all duration-200 hover:ring-[#e0a83c]/70">
              <AvatarImage src={userAvatar} alt={userName} />
              <AvatarFallback className="bg-gradient-to-br from-[#f0c66a] to-[#b07d1f] font-bold text-[#1a1408]">
                {userName.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
