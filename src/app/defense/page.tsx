"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { defenseArguments, caseMetrics, evidence } from "@/lib/data";
import {
  Shield,
  CheckCircle2,
  AlertTriangle,
  Scale,
  FileText,
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

export default function DefensePage() {
  const strongArgs = defenseArguments.filter((a) => a.strength === "strong").length;

  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Defense Strategy</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Legal arguments and supporting evidence
        </p>
      </div>

      {/* Alert */}
      <Card className="mb-6 border-l-4 border-l-warning">
        <CardContent className="p-4 flex items-center gap-4">
          <AlertTriangle className="h-5 w-5 text-warning shrink-0" />
          <div>
            <h3 className="font-semibold text-sm">Tax Claim: ${caseMetrics.debtAmount.toLocaleString("en-US")}</h3>
            <p className="text-xs text-muted-foreground">
              Based on erroneous declaration of {caseMetrics.btcDeclared} BTC as DPG revenue
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{defenseArguments.length}</div>
            <div className="text-xs text-muted-foreground">Arguments</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-500">{strongArgs}</div>
            <div className="text-xs text-muted-foreground">Strong</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{evidence.length}</div>
            <div className="text-xs text-muted-foreground">Evidence</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-primary">85%</div>
            <div className="text-xs text-muted-foreground">Strength</div>
          </CardContent>
        </Card>
      </div>

      {/* Arguments Table */}
      <Card className="mb-6">
        <CardHeader className="border-b border-border py-4">
          <CardTitle className="text-base flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Defense Arguments
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="w-10">#</TableHead>
                <TableHead>Argument</TableHead>
                <TableHead className="hidden md:table-cell w-32">Evidence</TableHead>
                <TableHead className="w-24 text-right">Strength</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {defenseArguments.map((arg, index) => {
                const config = strengthConfig[arg.strength];
                return (
                  <TableRow key={arg.id} className="border-border">
                    <TableCell className="font-mono text-muted-foreground">
                      {index + 1}
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-sm">{arg.title}</div>
                        <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {arg.summary}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <FileText className="h-3 w-3" />
                        {arg.evidenceIds?.length || 0} items
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

      {/* Detailed Arguments */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Detailed Arguments</h2>
        {defenseArguments.map((arg, index) => {
          const config = strengthConfig[arg.strength];
          const relatedEvidence = evidence.filter((e) => arg.evidenceIds?.includes(e.id));
          return (
            <Card key={arg.id} className="border-l-2 border-l-primary">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{arg.title}</h3>
                      <p className="text-xs text-muted-foreground">{arg.summary}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className={config.class}>
                    {config.label}
                  </Badge>
                </div>

                {relatedEvidence.length > 0 && (
                  <div className="mt-4 border-t border-border pt-3">
                    <div className="text-xs font-medium text-muted-foreground mb-2">
                      Supporting Evidence ({relatedEvidence.length})
                    </div>
                    <div className="space-y-2">
                      {relatedEvidence.map((ev) => (
                        <div
                          key={ev.id}
                          className="flex items-start gap-2 text-xs p-2 bg-muted/50 rounded"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-green-500 mt-0.5 shrink-0" />
                          <div>
                            <div className="font-medium">{ev.title}</div>
                            <div className="text-muted-foreground italic">
                              &ldquo;{ev.quote}&rdquo;
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Legal Framework */}
      <Card className="mt-6">
        <CardHeader className="border-b border-border py-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Scale className="h-4 w-4" />
            Legal Framework
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 divide-y divide-border">
          <div className="p-4">
            <div className="font-medium text-sm mb-1">Law 193-VII (Digital Assets)</div>
            <p className="text-xs text-muted-foreground">
              Defines digital mining and establishes regulatory framework for crypto activities in Kazakhstan
            </p>
          </div>
          <div className="p-4">
            <div className="font-medium text-sm mb-1">Tax Code Art. 278</div>
            <p className="text-xs text-muted-foreground">
              Infrastructure providers are NOT subject to digital mining tax - only operators who extract digital assets
            </p>
          </div>
          <div className="p-4">
            <div className="font-medium text-sm mb-1">PwC Kazakhstan Tax Alert</div>
            <p className="text-xs text-muted-foreground">
              &ldquo;The provision of mining infrastructure (and not the digital mining itself) is not subject to the digital mining tax.&rdquo;
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
