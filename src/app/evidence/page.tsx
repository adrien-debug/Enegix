"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { evidence } from "@/lib/data";
import {
  FileText,
  CheckCircle2,
  Calendar,
  User,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const strengthConfig = {
  strong: { label: "Strong", class: "bg-green-500/20 text-green-400 border-green-500/30" },
  medium: { label: "Medium", class: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  weak: { label: "Weak", class: "bg-red-500/20 text-red-400 border-red-500/30" },
};

export default function EvidencePage() {
  const strongCount = evidence.filter(e => e.strength === "strong").length;
  const mediumCount = evidence.filter(e => e.strength === "medium").length;

  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Evidence Repository</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {evidence.length} documented proof items for defense
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{evidence.length}</div>
            <div className="text-xs text-muted-foreground">Total Items</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-500">{strongCount}</div>
            <div className="text-xs text-muted-foreground">Strong</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-500">{mediumCount}</div>
            <div className="text-xs text-muted-foreground">Medium</div>
          </CardContent>
        </Card>
      </div>

      {/* Evidence Table */}
      <Card>
        <CardHeader className="border-b border-border py-4">
          <CardTitle className="text-base flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Evidence Items
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="w-24">ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Source</TableHead>
                <TableHead className="hidden lg:table-cell">Date</TableHead>
                <TableHead className="w-24 text-right">Strength</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {evidence.map((item) => {
                const config = strengthConfig[item.strength];
                return (
                  <TableRow key={item.id} className="border-border">
                    <TableCell className="font-mono text-xs text-muted-foreground">
                      {item.id}
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-sm">{item.title}</div>
                        <div className="text-xs text-muted-foreground mt-1 line-clamp-1">
                          {item.quote}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        {item.source}
                      </div>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {item.date}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className={config.class}>
                        {config.label}
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Detail Cards - Grid */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Evidence Details</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {evidence.map((item) => {
            const config = strengthConfig[item.strength];
            return (
              <Card key={item.id} className="border-l-2 border-l-primary">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-muted-foreground">{item.id}</span>
                      <Badge variant="outline" className={config.class}>
                        {config.label}
                      </Badge>
                    </div>
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                  <blockquote className="text-xs text-muted-foreground italic border-l-2 border-border pl-3 mb-3">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{item.source}</span>
                    <span>{item.date}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
