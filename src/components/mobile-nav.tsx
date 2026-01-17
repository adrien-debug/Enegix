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
  Menu,
  X,
  Timer,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

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

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
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
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="flex items-center justify-between p-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="/enegix-logo.svg" 
            alt="Enegix" 
            className="h-5 w-auto"
          />
          <div className="h-4 w-px bg-border" />
          <h1 className="text-sm font-semibold">DPG Defense</h1>
        </div>

        {/* Session Timer or Tax Badge */}
        <div className="flex items-center gap-2">
          {sessionInfo?.type === "temporary" ? (
            <Badge variant="outline" className="text-destructive border-destructive/50 text-xs font-mono">
              <Timer className="h-3 w-3 mr-1" />
              {formatTime(sessionInfo.timeLeft)}
            </Badge>
          ) : (
            <Badge variant="outline" className="text-orange-500 border-orange-500/50 text-xs">
              $265K
            </Badge>
          )}
          
          {/* Hamburger Button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <SheetHeader className="p-4 border-b border-border">
                <SheetTitle className="flex items-center gap-2">
                  <img 
                    src="/enegix-logo.svg" 
                    alt="Enegix" 
                    className="h-5 w-auto"
                  />
                  <div className="h-4 w-px bg-border" />
                  DPG Defense
                </SheetTitle>
              </SheetHeader>

              {/* Tax Alert */}
              <div className="mx-3 my-3 p-3 border-l-2 border-l-warning bg-card">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-3.5 w-3.5 text-warning" />
                  <span className="text-sm font-medium">Tax Debt: $265,000</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Deadline passed
                </p>
              </div>

              <Separator />

              {/* Navigation */}
              <nav className="p-3 space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="flex-1 text-sm font-medium">{item.name}</span>
                      {item.badge && (
                        <Badge
                          variant={item.badgeVariant || "secondary"}
                          className="text-xs"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  );
                })}
              </nav>

              <Separator />

              {/* Case Status */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Case Status</span>
                  <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/30">
                    Active
                  </Badge>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Evidence Strength</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
