"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { actors } from "@/lib/data";
import { Users, Building2, User, Briefcase, MapPin, Mail, FileText } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const typeConfig: Record<string, { label: string; class: string }> = {
  defendant: { label: "Defendant", class: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  plaintiff: { label: "Plaintiff", class: "bg-red-500/20 text-red-400 border-red-500/30" },
  witness: { label: "Witness", class: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
  authority: { label: "Authority", class: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
};

export default function ActorsPage() {
  const defendants = actors.filter(a => a.type === "defendant");
  const witnesses = actors.filter(a => a.type === "witness");
  const authorities = actors.filter(a => a.type === "authority");

  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Case Actors</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {actors.length} parties involved in the dispute
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-blue-500" />
              <div>
                <div className="text-2xl font-bold">{defendants.length}</div>
                <div className="text-xs text-muted-foreground">Defendants</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-yellow-500" />
              <div>
                <div className="text-2xl font-bold">{witnesses.length}</div>
                <div className="text-xs text-muted-foreground">Witnesses</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-purple-500" />
              <div>
                <div className="text-2xl font-bold">{authorities.length}</div>
                <div className="text-xs text-muted-foreground">Authorities</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* All Actors Table */}
      <Card className="mb-6">
        <CardHeader className="border-b border-border py-4">
          <CardTitle className="text-base flex items-center gap-2">
            <Users className="h-4 w-4" />
            All Parties
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead>Name</TableHead>
                <TableHead className="w-28">Type</TableHead>
                <TableHead className="hidden md:table-cell">Role</TableHead>
                <TableHead className="hidden lg:table-cell">Organization</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {actors.map((actor) => {
                const config = typeConfig[actor.type] || typeConfig.witness;
                return (
                  <TableRow key={actor.id} className="border-border">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground shrink-0" />
                        <div>
                          <div className="font-medium text-sm">{actor.name}</div>
                          {actor.email && (
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                              <Mail className="h-3 w-3" />
                              {actor.email}
                            </div>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={config.class}>
                        {config.label}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="text-sm text-muted-foreground">{actor.role}</div>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <div className="text-sm text-muted-foreground">{actor.organization}</div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Defendants Section */}
      <Card className="mb-6">
        <CardHeader className="border-b border-border py-3">
          <CardTitle className="text-base flex items-center gap-2">
            <User className="h-4 w-4 text-blue-500" />
            Defendants (Hearst Side)
            <Badge variant="secondary">{defendants.length}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 divide-y divide-border">
          {defendants.map((person) => {
            const config = typeConfig[person.type];
            return (
              <div key={person.id} className="p-4 flex items-start gap-4">
                <div className="h-10 w-10 rounded bg-blue-500/10 flex items-center justify-center shrink-0">
                  <User className="h-5 w-5 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-sm">{person.name}</h3>
                    <Badge variant="outline" className={config.class}>
                      {config.label}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">
                    {person.role} @ {person.organization}
                  </p>
                  {person.notes && (
                    <p className="text-xs text-muted-foreground italic">{person.notes}</p>
                  )}
                  {person.email && (
                    <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                      <Mail className="h-3 w-3" />
                      {person.email}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Witnesses Section (Enegix Side) */}
      <Card className="mb-6">
        <CardHeader className="border-b border-border py-3">
          <CardTitle className="text-base flex items-center gap-2">
            <Users className="h-4 w-4 text-yellow-500" />
            Witnesses (Enegix Side)
            <Badge variant="secondary">{witnesses.length}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 divide-y divide-border">
          {witnesses.map((person) => {
            const config = typeConfig[person.type];
            return (
              <div key={person.id} className="p-4 flex items-start gap-4">
                <div className="h-10 w-10 rounded bg-yellow-500/10 flex items-center justify-center shrink-0">
                  <User className="h-5 w-5 text-yellow-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-sm">{person.name}</h3>
                    <Badge variant="outline" className={config.class}>
                      {config.label}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">
                    {person.role} @ {person.organization}
                  </p>
                  {person.notes && (
                    <p className="text-xs text-muted-foreground italic">{person.notes}</p>
                  )}
                  {person.email && (
                    <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                      <Mail className="h-3 w-3" />
                      {person.email}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Authorities Section */}
      {authorities.length > 0 && (
        <Card>
          <CardHeader className="border-b border-border py-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-purple-500" />
              Authorities
              <Badge variant="secondary">{authorities.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 divide-y divide-border">
            {authorities.map((entity) => {
              const config = typeConfig[entity.type];
              return (
                <div key={entity.id} className="p-4 flex items-start gap-4">
                  <div className="h-10 w-10 rounded bg-purple-500/10 flex items-center justify-center shrink-0">
                    <Building2 className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-sm">{entity.name}</h3>
                      <Badge variant="outline" className={config.class}>
                        {config.label}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {entity.role}
                    </p>
                    {entity.notes && (
                      <p className="text-xs text-muted-foreground italic">{entity.notes}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
