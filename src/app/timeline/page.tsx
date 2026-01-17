"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { timeline } from "@/lib/data";
import { Clock, Calendar, FileCheck } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const categoryConfig: Record<string, { label: string; class: string }> = {
  transfer: { label: "Transfer", class: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  fiscal: { label: "Fiscal", class: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  communication: { label: "Comms", class: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
  contract: { label: "Contract", class: "bg-teal-500/20 text-teal-400 border-teal-500/30" },
  critical: { label: "Critical", class: "bg-red-500/20 text-red-400 border-red-500/30" },
};

export default function TimelinePage() {
  const sortedTimeline = [...timeline].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const years = [...new Set(sortedTimeline.map(e => e.date.split("-")[0]))];

  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Case Timeline</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {timeline.length} key events documented chronologically
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{timeline.length}</div>
            <div className="text-xs text-muted-foreground">Events</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-500">
              {timeline.filter(e => e.category === "transfer").length}
            </div>
            <div className="text-xs text-muted-foreground">Transfers</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-orange-500">
              {timeline.filter(e => e.category === "fiscal").length}
            </div>
            <div className="text-xs text-muted-foreground">Fiscal</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-cyan-500">
              {timeline.filter(e => e.category === "communication").length}
            </div>
            <div className="text-xs text-muted-foreground">Comms</div>
          </CardContent>
        </Card>
      </div>

      {/* Timeline Table */}
      <Card className="mb-6">
        <CardHeader className="border-b border-border py-4">
          <CardTitle className="text-base flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Chronological Events
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="w-28">Date</TableHead>
                <TableHead className="w-24">Type</TableHead>
                <TableHead>Event</TableHead>
                <TableHead className="hidden md:table-cell">Description</TableHead>
                <TableHead className="w-20 text-right">Proofs</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedTimeline.map((event) => {
                const config = categoryConfig[event.category] || categoryConfig.communication;
                return (
                  <TableRow key={event.id} className="border-border">
                    <TableCell className="font-mono text-xs">
                      {event.date}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={config.class}>
                        {config.label}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-sm">{event.title}</div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="text-xs text-muted-foreground line-clamp-2">
                        {event.description}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                        <FileCheck className="h-3 w-3" />
                        {event.evidenceIds?.length || 0}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Timeline by Year */}
      <div className="space-y-6">
        {years.map((year) => {
          const yearEvents = sortedTimeline.filter(e => e.date.startsWith(year));
          return (
            <Card key={year}>
              <CardHeader className="border-b border-border py-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {year}
                  <Badge variant="secondary" className="ml-2">{yearEvents.length} events</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {yearEvents.map((event) => {
                    const config = categoryConfig[event.category] || categoryConfig.communication;
                    return (
                      <div key={event.id} className="p-4 flex gap-4">
                        <div className="w-24 shrink-0">
                          <div className="text-xs font-mono">{event.date}</div>
                          <Badge variant="outline" className={`mt-1 ${config.class}`}>
                            {config.label}
                          </Badge>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm">{event.title}</h3>
                          <p className="text-xs text-muted-foreground mt-1">
                            {event.description}
                          </p>
                          {(event.evidenceIds?.length || 0) > 0 && (
                            <div className="mt-2 text-xs text-muted-foreground">
                              {event.evidenceIds?.length || 0} supporting evidence
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
