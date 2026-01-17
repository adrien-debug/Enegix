"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertTriangle,
  FileText,
  Users,
  Clock,
  Shield,
  DollarSign,
  Bitcoin,
  CheckCircle,
  XCircle,
  ArrowRight,
} from "lucide-react";
import { caseMetrics, evidence, timeline, defenseArguments, getCriticalEvents } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const criticalEvents = getCriticalEvents();
  
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Case Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          DPG Kazakhstan Mining Tax Dispute - Defense Overview
        </p>
      </div>

      {/* Alert Banner */}
      <Card className="mb-8 border-l-4 border-l-warning border-border">
        <CardContent className="flex items-center gap-4 py-4">
          <AlertTriangle className="h-5 w-5 text-warning shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold">Immediate Action Required</h3>
            <p className="text-sm text-muted-foreground">
              Tax debt of ${caseMetrics.debtAmount.toLocaleString('en-US')} {caseMetrics.debtCurrency} (~{caseMetrics.debtBTC} BTC) is past due.
              Enegix threatens account freeze and asset seizure.
            </p>
          </div>
          <Link href="/defense">
            <Button size="sm">
              View Defense Strategy
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tax Claim</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">
              ${caseMetrics.debtAmount.toLocaleString('en-US')}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Bitcoin className="h-3 w-3 text-primary" />
              <p className="text-xs text-muted-foreground">
                ~{caseMetrics.debtBTC} BTC at current rate
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Evidence Items</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{caseMetrics.totalEvidence}</div>
            <div className="flex items-center gap-2 mt-1">
              <CheckCircle className="h-3 w-3 text-success" />
              <p className="text-xs text-muted-foreground">
                {caseMetrics.strongEvidence} strong proofs
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documents</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{caseMetrics.totalDocuments}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Contracts, invoices, chats
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Defense Strength</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">85%</div>
            <Progress value={85} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Key Evidence */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Key Evidence</CardTitle>
                <CardDescription>Critical proof items for defense</CardDescription>
              </div>
              <Link href="/evidence">
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[350px] pr-4">
              <div className="space-y-4">
                {evidence.slice(0, 5).map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg border bg-card p-4 hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {item.id}
                          </Badge>
                          <Badge
                            variant={item.strength === "strong" ? "default" : "secondary"}
                            className={item.strength === "strong" ? "bg-success" : ""}
                          >
                            {item.strength}
                          </Badge>
                        </div>
                        <h4 className="font-medium text-sm">{item.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1 italic line-clamp-2">
                          &quot;{item.quote}&quot;
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.source} • {item.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Defense Arguments */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Defense Arguments</CardTitle>
                <CardDescription>Legal strategy points</CardDescription>
              </div>
              <Link href="/defense">
                <Button variant="ghost" size="sm">
                  Full Strategy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[350px] pr-4">
              <div className="space-y-4">
                {defenseArguments.map((arg) => (
                  <div
                    key={arg.id}
                    className="rounded-lg border bg-card p-4 hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">
                        {arg.number}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{arg.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {arg.summary}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {arg.evidenceIds.length} evidence items
                          </Badge>
                          <Badge
                            variant={arg.strength === "strong" ? "default" : "secondary"}
                            className={arg.strength === "strong" ? "bg-success" : ""}
                          >
                            {arg.strength}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Critical Timeline */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Critical Events Timeline</CardTitle>
                <CardDescription>Key moments in the case</CardDescription>
              </div>
              <Link href="/timeline">
                <Button variant="ghost" size="sm">
                  Full Timeline
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-6">
                {criticalEvents.slice(0, 6).map((event, index) => (
                  <div key={event.id} className="relative pl-10">
                    <div
                      className={`absolute left-2.5 w-3 h-3 rounded-full border-2 ${
                        event.category === "threat"
                          ? "bg-warning border-warning"
                          : event.category === "fiscal"
                          ? "bg-orange-500 border-orange-500"
                          : "bg-primary border-primary"
                      }`}
                    />
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-muted-foreground font-mono">
                            {event.date}
                          </span>
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              event.category === "threat"
                                ? "border-warning text-warning"
                                : event.category === "fiscal"
                                ? "border-orange-500 text-orange-500"
                                : ""
                            }`}
                          >
                            {event.category}
                          </Badge>
                        </div>
                        <h4 className="font-medium text-sm">{event.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {event.description}
                        </p>
                      </div>
                      {event.evidenceIds && event.evidenceIds.length > 0 && (
                        <Badge variant="secondary" className="shrink-0">
                          {event.evidenceIds.length} proof{event.evidenceIds.length > 1 ? "s" : ""}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
