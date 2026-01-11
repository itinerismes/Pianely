"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="theme">Thème sombre</Label>
          <p className="text-sm text-muted-foreground">Utiliser le thème sombre</p>
        </div>
        <Switch id="theme" disabled />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <Label htmlFor="theme">Thème sombre</Label>
        <p className="text-sm text-muted-foreground">Utiliser le thème sombre</p>
      </div>
      <Switch
        id="theme"
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
    </div>
  );
}
