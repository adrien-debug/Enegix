"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Clock, AlertTriangle } from "lucide-react";

// PIN rotation schedule (in minutes from midnight)
function getCurrentPin(): { pin: string; nextChange: number; label: string } {
  const now = new Date();
  const minutesSinceMidnight = now.getHours() * 60 + now.getMinutes();
  
  // Rotate every 10 minutes through the cycle
  const cyclePosition = Math.floor(minutesSinceMidnight / 10) % 3;
  
  const pins = [
    { pin: "2121", label: "Phase 1" },
    { pin: "3131", label: "Phase 2" },
    { pin: "4141", label: "Phase 3" },
  ];
  
  const currentPin = pins[cyclePosition];
  const nextChangeMinute = (Math.floor(minutesSinceMidnight / 10) + 1) * 10;
  const minutesUntilChange = nextChangeMinute - minutesSinceMidnight;
  
  return {
    pin: currentPin.pin,
    nextChange: minutesUntilChange,
    label: currentPin.label,
  };
}

export default function LoginPage() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [currentPhase, setCurrentPhase] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Check if already logged in
    const session = localStorage.getItem("dpg-session");
    if (session) {
      const sessionData = JSON.parse(session);
      if (sessionData.expires > Date.now()) {
        router.push("/");
        return;
      }
    }

    // Update countdown every second
    const updateCountdown = () => {
      const { nextChange, label } = getCurrentPin();
      setTimeLeft(nextChange * 60); // Convert to seconds
      setCurrentPhase(label);
    };

    updateCountdown();
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          updateCountdown();
          return prev;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [router]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { pin: correctPin } = getCurrentPin();

    if (pin === correctPin) {
      // Set session for 30 minutes
      const sessionData = {
        expires: Date.now() + 30 * 60 * 1000,
        authenticated: true,
      };
      localStorage.setItem("dpg-session", JSON.stringify(sessionData));
      router.push("/");
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

          <div className="mt-6 p-4 rounded-lg bg-muted/50 border">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{currentPhase}</span>
              </div>
              <div className="font-mono text-lg font-bold text-primary">
                {formatTime(timeLeft)}
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              PIN rotates automatically
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
