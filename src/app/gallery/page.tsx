"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { allDocuments as documents } from "@/lib/documents-data";
import {
  Camera,
  Image as ImageIcon,
  Calendar,
  FolderOpen,
  MessageSquare,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function GalleryPage() {
  const photos = documents.filter((doc) => doc.category === "photo");
  const sitePhotos = photos.filter((doc) => doc.source.includes("Site"));
  const datePhotos = photos.filter((doc) => doc.date !== undefined);
  const whatsappChats = documents.filter((doc) => doc.category === "whatsapp");

  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Photo Gallery</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {photos.length} key photos from the mining site
        </p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{photos.length}</div>
            <div className="text-xs text-muted-foreground">Total Photos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{sitePhotos.length}</div>
            <div className="text-xs text-muted-foreground">Site Photos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">{datePhotos.length}</div>
            <div className="text-xs text-muted-foreground">Date Stamped</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">196+</div>
            <div className="text-xs text-muted-foreground">WhatsApp Photos</div>
          </CardContent>
        </Card>
      </div>

      {/* Photos Table */}
      <Card className="mb-6">
        <CardHeader className="border-b border-border py-4">
          <CardTitle className="text-base flex items-center gap-2">
            <Camera className="h-4 w-4" />
            Photo Index
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="w-16">Preview</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Source</TableHead>
                <TableHead className="w-28">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {photos.map((photo, index) => (
                <TableRow key={index} className="border-border">
                  <TableCell>
                    <div className="h-10 w-14 rounded bg-muted overflow-hidden">
                      {photo.publicPath ? (
                        <img
                          src={photo.publicPath}
                          alt={photo.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center">
                          <ImageIcon className="h-4 w-4 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium text-sm">{photo.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {photo.description || "—"}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="outline" className="text-xs">
                      {photo.source}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      {photo.date ? (
                        <>
                          <Calendar className="h-3 w-3" />
                          {photo.date}
                        </>
                      ) : (
                        "—"
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Photo Grid */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Photo Grid</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                {photo.publicPath ? (
                  <img
                    src={photo.publicPath}
                    alt={photo.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
              </div>
              <CardContent className="p-3">
                <div className="font-medium text-xs truncate">{photo.name}</div>
                {photo.date && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {photo.date}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* WhatsApp Sources */}
      <Card>
        <CardHeader className="border-b border-border py-3">
          <CardTitle className="text-base flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-cyan-500" />
            WhatsApp Photo Sources
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead>Chat</TableHead>
                <TableHead className="hidden md:table-cell">Path</TableHead>
                <TableHead className="w-24 text-right">Est. Photos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-border">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <FolderOpen className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Hearts × Enegix Tech</span>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <span className="text-xs font-mono text-muted-foreground">
                    /WhatsApp_Enegix_extracted/
                  </span>
                </TableCell>
                <TableCell className="text-right">~80</TableCell>
              </TableRow>
              <TableRow className="border-border">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <FolderOpen className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Yerbo Enegix</span>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <span className="text-xs font-mono text-muted-foreground">
                    /WhatsApp_Yerbo_extracted/
                  </span>
                </TableCell>
                <TableCell className="text-right">~69</TableCell>
              </TableRow>
              <TableRow className="border-border">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <FolderOpen className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Dimitri Enegix</span>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <span className="text-xs font-mono text-muted-foreground">
                    /WhatsApp_Dimitri_extracted/
                  </span>
                </TableCell>
                <TableCell className="text-right">~53</TableCell>
              </TableRow>
              <TableRow className="border-border">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <FolderOpen className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">DPG Company Transfer</span>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <span className="text-xs font-mono text-muted-foreground">
                    /WhatsApp_DPG_extracted/
                  </span>
                </TableCell>
                <TableCell className="text-right">~17</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
