"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { allDocuments as documents } from "@/lib/documents-data";
import {
  FolderOpen,
  Search,
  FileText,
  Image,
  MessageSquare,
  Scale,
  Calendar,
  ExternalLink,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const categoryConfig: Record<string, { icon: typeof FileText; class: string; label: string }> = {
  tax: { icon: Scale, class: "text-orange-500", label: "Tax" },
  official: { icon: FileText, class: "text-blue-500", label: "Official" },
  contract: { icon: FileText, class: "text-teal-500", label: "Contract" },
  invoice: { icon: FileText, class: "text-yellow-500", label: "Invoice" },
  technical: { icon: FileText, class: "text-green-500", label: "Technical" },
  photo: { icon: Image, class: "text-purple-500", label: "Photo" },
  whatsapp: { icon: MessageSquare, class: "text-cyan-500", label: "WhatsApp" },
  evidence: { icon: FileText, class: "text-primary", label: "Evidence" },
};

const importanceConfig: Record<string, { label: string; class: string }> = {
  critical: { label: "Critical", class: "bg-red-500/20 text-red-400 border-red-500/30" },
  high: { label: "High", class: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  medium: { label: "Medium", class: "bg-gray-500/20 text-gray-400 border-gray-500/30" },
  low: { label: "Low", class: "bg-gray-500/10 text-gray-500 border-gray-500/20" },
};

export default function DocumentsPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredDocs = documents.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      (doc.description?.toLowerCase().includes(search.toLowerCase()) ?? false);
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "critical" && doc.importance === "critical") ||
      doc.category === activeTab;
    return matchesSearch && matchesTab;
  });

  const criticalCount = documents.filter((d) => d.importance === "critical").length;
  const taxCount = documents.filter((d) => d.category === "tax").length;
  const contractsCount = documents.filter((d) => d.category === "contract").length;
  const whatsappCount = documents.filter((d) => d.category === "whatsapp").length;

  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Document Repository</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {documents.length} documents indexed and catalogued
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{documents.length}</div>
            <div className="text-xs text-muted-foreground">Total</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-500">{criticalCount}</div>
            <div className="text-xs text-muted-foreground">Critical</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-teal-500">{contractsCount}</div>
            <div className="text-xs text-muted-foreground">Contracts</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-cyan-500">{whatsappCount}</div>
            <div className="text-xs text-muted-foreground">WhatsApp</div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search documents..."
          className="pl-9"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="all">All ({documents.length})</TabsTrigger>
          <TabsTrigger value="critical">Critical ({criticalCount})</TabsTrigger>
          <TabsTrigger value="tax">Tax ({taxCount})</TabsTrigger>
          <TabsTrigger value="contracts">Contracts ({contractsCount})</TabsTrigger>
          <TabsTrigger value="whatsapp">WhatsApp ({whatsappCount})</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Documents Table */}
      <Card>
        <CardHeader className="border-b border-border py-4">
          <CardTitle className="text-base flex items-center gap-2">
            <FolderOpen className="h-4 w-4" />
            Documents ({filteredDocs.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="w-10"></TableHead>
                <TableHead>Document</TableHead>
                <TableHead className="hidden md:table-cell w-28">Category</TableHead>
                <TableHead className="hidden lg:table-cell w-24">Date</TableHead>
                <TableHead className="w-24 text-right">Priority</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDocs.map((doc, index) => {
                const catConfig = categoryConfig[doc.category] || categoryConfig.technical;
                const impConfig = importanceConfig[doc.importance] || importanceConfig.medium;
                const Icon = catConfig.icon;
                return (
                  <TableRow key={index} className="border-border">
                    <TableCell>
                      <Icon className={`h-4 w-4 ${catConfig.class}`} />
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-sm">{doc.name}</div>
                        <div className="text-xs text-muted-foreground line-clamp-1">
                          {doc.description || "—"}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge variant="outline" className="text-xs">
                        {catConfig.label}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        {doc.date ? (
                          <>
                            <Calendar className="h-3 w-3" />
                            {doc.date}
                          </>
                        ) : (
                          "—"
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className={impConfig.class}>
                        {impConfig.label}
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Source Folders */}
      <Card className="mt-6">
        <CardHeader className="border-b border-border py-3">
          <CardTitle className="text-base">Source Locations</CardTitle>
        </CardHeader>
        <CardContent className="p-0 divide-y divide-border">
          <div className="p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FolderOpen className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Root Documents</span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">/enegix/</span>
          </div>
          <div className="p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-cyan-500" />
              <span className="text-sm">WhatsApp Extracts</span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">/whatsapp_extract/</span>
          </div>
          <div className="p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">OCR Documents</span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">/_ocr/</span>
          </div>
          <div className="p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-orange-500" />
              <span className="text-sm">DPG Folder</span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">/DPG_Digital_Performance_Group/</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
