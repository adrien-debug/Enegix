"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Clock, AlertTriangle, Shield } from "lucide-react";

const ADMIN_PIN = "0334";
const TEMP_PIN = "2100";
const TEMP_SESSION_DURATION = 10 * 60 * 1000; // 10 minutes
const ADMIN_SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export default function LoginPage() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [sessionTimeLeft, setSessionTimeLeft] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if already logged in
    const session = localStorage.getItem("dpg-session");
    if (session) {
      const sessionData = JSON.parse(session);
      if (sessionData.expires > Date.now()) {
        router.push("/brief");
        return;
      } else {
        // Session expired
        localStorage.removeItem("dpg-session");
      }
    }
  }, [router]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (pin === ADMIN_PIN) {
      // Admin - unlimited session (24h)
      const sessionData = {
        expires: Date.now() + ADMIN_SESSION_DURATION,
        type: "admin",
        authenticated: true,
      };
      localStorage.setItem("dpg-session", JSON.stringify(sessionData));
      router.push("/brief");
    } else if (pin === TEMP_PIN) {
      // Check if temp PIN was already used
      const tempUsed = localStorage.getItem("dpg-temp-used");
      if (tempUsed === "true") {
        setError("PIN already used");
        setPin("");
        setTimeout(() => setError(""), 3000);
        return;
      }
      
      // Temporary - 10 minutes only, ONE TIME USE
      const sessionData = {
        expires: Date.now() + TEMP_SESSION_DURATION,
        type: "temporary",
        authenticated: true,
      };
      localStorage.setItem("dpg-session", JSON.stringify(sessionData));
      localStorage.setItem("dpg-temp-used", "true"); // Mark as used
      router.push("/brief");
    } else {
      setError("Invalid PIN");
      setPin("");
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">DPG Defense</CardTitle>
          <p className="text-muted-foreground text-sm mt-1">
            Restricted Access - Enter PIN
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Enter 4-digit PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
                className="text-center text-2xl tracking-widest h-14"
                maxLength={4}
                autoFocus
              />
              {error && (
                <div className="flex items-center justify-center gap-2 text-destructive text-sm">
                  <AlertTriangle className="h-4 w-4" />
                  {error}
                </div>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-12"
              disabled={pin.length !== 4}
            >
              Access Dashboard
            </Button>
          </form>

          <div className="mt-6 space-y-3">
            <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span className="font-medium">Admin Access</span>
                <span className="ml-auto text-xs text-muted-foreground">Unlimited</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-warning/5 border border-warning/20">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-warning" />
                <span className="font-medium">Temporary Access</span>
                <span className="ml-auto text-xs text-muted-foreground">10 min • 1 use</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
