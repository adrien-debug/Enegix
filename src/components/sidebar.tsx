"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Users,
  Clock,
  Shield,
  FolderOpen,
  Scale,
  AlertTriangle,
  Send,
  Camera,
  Timer,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    description: "Overview & KPIs",
  },
  {
    name: "Evidence",
    href: "/evidence",
    icon: FileText,
    badge: "8",
    badgeVariant: "default" as const,
    description: "Key proof items",
  },
  {
    name: "Timeline",
    href: "/timeline",
    icon: Clock,
    description: "Chronological events",
  },
  {
    name: "Actors",
    href: "/actors",
    icon: Users,
    description: "Parties involved",
  },
  {
    name: "Defense Strategy",
    href: "/defense",
    icon: Shield,
    description: "Legal arguments",
  },
  {
    name: "Documents",
    href: "/documents",
    icon: FolderOpen,
    badge: "41",
    description: "File repository",
  },
  {
    name: "Gallery",
    href: "/gallery",
    icon: Camera,
    badge: "12",
    description: "Photo evidence",
  },
  {
    name: "Case Brief",
    href: "/brief",
    icon: Send,
    badge: "NEW",
    badgeVariant: "default" as const,
    description: "Send to Enegix",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [sessionInfo, setSessionInfo] = useState<{ type: string; timeLeft: number } | null>(null);

  useEffect(() => {
    const checkSession = () => {
      const session = localStorage.getItem("dpg-session");
      if (session) {
        try {
          const data = JSON.parse(session);
          const remaining = data.expires - Date.now();
          if (remaining > 0) {
            setSessionInfo({ type: data.type || "admin", timeLeft: remaining });
          }
        } catch {}
      }
    };

    checkSession();
    const interval = setInterval(checkSession, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar border-r border-sidebar-border hidden md:block">
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-sidebar-border">
          <img 
            src="/enegix-logo.svg" 
            alt="Enegix" 
            className="h-7 w-auto"
          />
          <div className="h-6 w-px bg-border" />
          <div>
            <h1 className="text-base font-semibold text-sidebar-foreground">
              DPG Defense
            </h1>
            <p className="text-xs text-muted-foreground">Kazakhstan Case</p>
          </div>
        </div>

        {/* Session Timer (for temporary access) */}
        {sessionInfo?.type === "temporary" && (
          <div className="mx-4 mt-4 border-l-2 border-l-destructive bg-destructive/5 p-3">
            <div className="flex items-center gap-2">
              <Timer className="h-3.5 w-3.5 text-destructive" />
              <span className="text-xs font-medium text-destructive">
                Session expires in
              </span>
              <span className="ml-auto font-mono text-sm font-bold text-destructive">
                {formatTime(sessionInfo.timeLeft)}
              </span>
            </div>
          </div>
        )}

        {/* Alert Banner */}
        <div className="mx-4 mt-4 border-l-2 border-l-warning bg-card p-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-3.5 w-3.5 text-warning" />
            <span className="text-xs font-medium">
              Tax Debt: $265,000
            </span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Deadline passed
          </p>
        </div>

        <Separator className="my-4" />

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary border-l-2 border-l-primary -ml-px"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                />
                <span className="flex-1">{item.name}</span>
                {item.badge && (
                  <Badge
                    variant={item.badgeVariant}
                    className="h-5 min-w-5 justify-center text-xs"
                  >
                    {item.badge}
                  </Badge>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border p-4">
          <div className="rounded-lg bg-sidebar-accent/50 p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                Case Status
              </span>
              <Badge variant="outline" className="text-warning border-warning">
                Active
              </Badge>
            </div>
            <div className="mt-2">
              <div className="text-xs text-muted-foreground">
                Evidence Strength
              </div>
              <div className="mt-1 flex items-center gap-2">
                <div className="h-2 flex-1 rounded-full bg-muted">
                  <div
                    className="h-2 rounded-full bg-success"
                    style={{ width: "85%" }}
                  />
                </div>
                <span className="text-xs font-medium text-success">85%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
