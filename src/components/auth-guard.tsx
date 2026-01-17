"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Skip auth check on login page
    if (pathname === "/login") {
      setIsAuthenticated(true);
      return;
    }

    const checkAuth = () => {
      const session = localStorage.getItem("dpg-session");
      
      if (!session) {
        router.push("/login");
        return;
      }

      try {
        const sessionData = JSON.parse(session);
        if (sessionData.expires > Date.now() && sessionData.authenticated) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("dpg-session");
          router.push("/login");
        }
      } catch {
        localStorage.removeItem("dpg-session");
        router.push("/login");
      }
    };

    checkAuth();

    // Check session every 30 seconds
    const interval = setInterval(checkAuth, 30000);
    return () => clearInterval(interval);
  }, [pathname, router]);

  // Show nothing while checking auth (prevents flash)
  if (isAuthenticated === null && pathname !== "/login") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
}
