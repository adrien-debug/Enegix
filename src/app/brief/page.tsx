"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Users,
  Building2,
  Printer,
  Mail,
} from "lucide-react";

// Sorted chronologically by date
const accusations = [
  {
    id: 1,
    action: "You created DPG and installed your own team member as owner",
    quote: "One of our team members holding ownership. We need to transfer it to you.",
    source: "Yerbolsyn Sarsenov (Enegix CEO)",
    date: "May 17, 2024",
    proof: "WhatsApp - DPG company transfer",
    screenshot: "/evidence/whatsapp/dpg-transfer-1.jpg",
  },
  {
    id: 2,
    action: "You confirmed BTC never went through DPG",
    quote: "DPG has multiple subaccounts each withdrawing mined digital assets to their respective wallet addresses which are NOT UNDER DPG'S CONTROL",
    source: "Dimitri Ivanov (Enegix)",
    date: "July 2, 2024",
    proof: "WhatsApp - Yerbo Enegix",
  },
  {
    id: 3,
    action: "You appointed your family member as Director of DPG",
    quote: "Sarsenov Olzhas Bolatovich appointed as Director",
    source: "Official Registration Document",
    date: "August 30, 2024",
    proof: "РЕШЕНИЕ о перерегистрации_v.1.pdf",
    screenshot: "/evidence/whatsapp/registration-doc.jpg",
  },
  {
    id: 4,
    action: "You charged us $31,500 for YOUR staff to run DPG",
    quote: "Administrative fee for 9 months February-October 2024: $31,500 (Director + Accountant + Lawyer salaries)",
    source: "DPG Invoice to Hearst",
    date: "November 5, 2024",
    proof: "00002037-DPG admin invoice.pdf",
  },
  {
    id: 5,
    action: "You told us this structure was required for importing miners",
    quote: "Kazakhstan mining license regulations prohibit hosters (VerCom LLC) from renting premises to miners (Digital Performance Group LLC)",
    source: "Dimitri Ivanov (Enegix Sales Director)",
    date: "October 30, 2025",
    proof: "WhatsApp - DPG company transfer",
    screenshot: "/evidence/whatsapp/dpg-transfer-2.jpg",
  },
  {
    id: 6,
    action: "You managed all administrative and legal matters",
    quote: "Almas managed everything... you manage everything since beginning",
    source: "Olivier Nejkovic to Enegix",
    date: "October 31, 2025",
    proof: "WhatsApp - DPG company transfer",
    screenshot: "/evidence/whatsapp/dpg-transfer-3.jpg",
  },
  {
    id: 7,
    action: "You never gave us access to Kazakhstan systems",
    quote: "He doesn't have any [Kazakhstan phone number], what's the solution?",
    source: "WhatsApp conversation",
    date: "October 31, 2025",
    proof: "WhatsApp - DPG company transfer",
    screenshot: "/evidence/whatsapp/recent-1.jpg",
  },
  {
    id: 8,
    action: "Now you demand we pay $265,000 for YOUR declaration",
    quote: "Given the exchange rate, maybe you can send 3 BTC",
    source: "Dimitri Ivanov (Enegix)",
    date: "January 12, 2026",
    proof: "Telegram - Dimitri Enegix",
  },
  {
    id: 9,
    action: "You made the tax declaration of 67 BTC without our knowledge",
    quote: "How we can be aware if you never spoke about this",
    source: "Olivier Nejkovic to Enegix",
    date: "January 16, 2026",
    proof: "Telegram - Dimitri Enegix",
    screenshot: "/evidence/whatsapp/recent-2.jpg",
  },
];

const keyFacts = [
  "DPG was created BY Enegix, not by Hearst",
  "DPG's Director is an Enegix family member (Sarsenov)",
  "Hearst paid Enegix $31,500 to manage DPG",
  "Hearst never had access to Kazakhstan government systems",
  "Hearst has no Kazakhstan phone number or digital signature",
  "The 67 BTC declaration was made by YOUR Director, not Hearst",
  "BTC went directly to client wallets - never through DPG",
  "DPG is an infrastructure provider, NOT a miner (exempt from CIT on BTC)",
];

export default function BriefPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      {/* Print Button - Hidden in print */}
      <div className="print:hidden flex justify-end gap-2 mb-4">
        <Button variant="outline" size="sm" onClick={handlePrint}>
          <Printer className="h-4 w-4 mr-1.5" />
          <span className="hidden sm:inline">Print / Save PDF</span>
          <span className="sm:hidden">PDF</span>
        </Button>
        <Button variant="outline" size="sm">
          <Mail className="h-4 w-4 mr-1.5" />
          <span className="hidden sm:inline">Send to Enegix</span>
          <span className="sm:hidden">Send</span>
        </Button>
      </div>

      {/* Header */}
      <div className="text-center mb-8 md:mb-10">
        <div className="flex justify-center mb-3">
          <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-primary/10 flex items-center justify-center">
            <FileText className="h-6 w-6 md:h-7 md:w-7 text-primary" />
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-1">CASE BRIEF</h1>
        <h2 className="text-base md:text-lg text-muted-foreground mb-3">
          DPG Kazakhstan Tax Dispute
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="outline" className="text-xs">
            Hearst vs. Enegix
          </Badge>
          <Badge variant="outline" className="text-xs">
            Jan 2026
          </Badge>
        </div>
      </div>

      <Separator className="my-6" />

      {/* Introduction - Addressed to Authority */}
      <Card className="mb-6 bg-muted/30">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base md:text-lg">
            <Users className="h-4 w-4 text-primary" />
            Introduction
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm md:text-base text-muted-foreground">
          <p>
            Hearst Solutions DMCC is a <strong className="text-foreground">Dubai-regulated entity</strong> operating in the digital assets sector since 2021. The company manages Bitcoin mining infrastructure for institutional clients across the EMEA region.
          </p>
          
          <div className="bg-background rounded-lg p-4 border">
            <h4 className="font-semibold text-foreground mb-3 text-sm">Client Track Record with Enegix (2024-2026):</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                <span><strong className="text-foreground">24 months</strong> of continuous operations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                <span><strong className="text-foreground">100%</strong> payment on time - never late</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                <span><strong className="text-foreground">$10M+</strong> total paid to Enegix</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                <span><strong className="text-foreground">Zero disputes</strong> until this tax claim</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                <span><strong className="text-foreground">3,500+ miners</strong> hosted at Ekibastuz site</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                <span><strong className="text-foreground">Full compliance</strong> with all invoices</span>
              </div>
            </div>
          </div>

          <p>
            The relationship between Hearst and Enegix was built on trust. When Enegix requested the creation of DPG LLC for &ldquo;regulatory compliance purposes,&rdquo; Hearst followed their guidance without question. Enegix handled all legal, administrative, and fiscal matters in Kazakhstan—<strong className="text-foreground">they charged $31,500 specifically for this service.</strong>
          </p>
          
          <p>
            The current tax dispute arises not from any action by Hearst, but from <strong className="text-foreground">unilateral declarations made by Enegix&apos;s own appointed Director</strong>—a family member of Enegix&apos;s CEO—without Hearst&apos;s knowledge, consent, or even notification.
          </p>
        </CardContent>
      </Card>

      {/* Legal Framework - Kazakhstan Crypto Law */}
      <Card className="mb-6 border-primary/50 bg-primary/5">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base md:text-lg">
            <FileText className="h-4 w-4 text-primary" />
            Legal Framework: Why DPG is NOT Taxable
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm md:text-base">
          <div className="bg-background rounded-lg p-4 border border-primary/30">
            <h4 className="font-bold text-primary mb-2">Kazakhstan Law No. 194-VII (Digital Mining Regulation)</h4>
            <p className="text-muted-foreground mb-3">
              According to Kazakhstan legislation, taxation on digital mining activities applies specifically to:
            </p>
            <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
              <p className="font-semibold text-foreground italic">
                &ldquo;The entity that <strong>consumes electricity</strong> for the purpose of digital mining operations.&rdquo;
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Key Legal Distinctions:</h4>
            
            <div className="grid gap-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">1</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Mining Operator (Taxable)</p>
                  <p className="text-sm text-muted-foreground">The entity that owns mining equipment AND consumes electricity to mine digital assets for its own account.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div className="h-6 w-6 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-success">2</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Infrastructure Provider (NOT Taxable on BTC)</p>
                  <p className="text-sm text-muted-foreground">The entity that provides hosting services, electricity passthrough, and facility management. <strong className="text-success">This is DPG.</strong></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-success/10 rounded-lg p-4 border border-success/30">
            <h4 className="font-semibold text-success mb-2">PwC Kazakhstan Confirmation</h4>
            <p className="text-muted-foreground italic">
              &ldquo;The provision of mining infrastructure (and not the digital mining itself) is <strong className="text-foreground">not subject to the digital mining tax</strong>.&rdquo;
            </p>
            <p className="text-xs text-muted-foreground mt-2">— PwC Kazakhstan, Digital Assets Tax Advisory</p>
          </div>

          <div className="bg-background rounded-lg p-4 border">
            <h4 className="font-semibold text-foreground mb-3">DPG&apos;s Actual Role:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                <span>Provided <strong>hosting infrastructure</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                <span>Passed through electricity <strong>at cost</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                <span>Never owned <strong>any mining equipment</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                <span>Never held <strong>any BTC wallets</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                <span>Never received <strong>mining rewards</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                <span>Billed clients in <strong>USD/USDT only</strong></span>
              </div>
            </div>
          </div>

          <div className="bg-warning/10 rounded-lg p-4 border border-warning/30">
            <h4 className="font-semibold text-warning mb-2">Conclusion</h4>
            <p className="text-muted-foreground">
              Since DPG <strong className="text-foreground">did not consume electricity for its own mining operations</strong> and <strong className="text-foreground">never received any BTC</strong>, the 67 BTC declared by Enegix&apos;s Director <strong className="text-warning">cannot legally be attributed as DPG revenue</strong>. The tax claim of $265,000 is based on a fundamental mischaracterization of DPG&apos;s legal status.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Executive Summary */}
      <Card className="mb-6 border-warning/30 bg-warning/5">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base md:text-lg">
            <AlertTriangle className="h-4 w-4 text-warning" />
            The Dispute
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm md:text-base">
          <p className="text-muted-foreground">
            Enegix now demands <strong className="text-foreground">$265,000 USD</strong> (129.8M KZT) in Corporate Income Tax, claiming DPG received <strong className="text-foreground">67 BTC</strong> as revenue.
          </p>
          <p className="font-semibold text-warning text-sm">
            This claim is illegitimate because:
          </p>
          <ol className="list-decimal list-inside space-y-1.5 text-sm">
            <li>DPG was created and controlled by <strong>Enegix, not Hearst</strong></li>
            <li>The tax declaration was made by <strong>Enegix&apos;s Director</strong></li>
            <li>DPG <strong>never received or controlled any BTC</strong></li>
            <li>DPG is an <strong>infrastructure provider</strong> (exempt under Kazakhstan law)</li>
            <li>Enegix <strong>admitted the structure violated regulations</strong></li>
          </ol>
        </CardContent>
      </Card>

      {/* You Made Us Do This Section */}
      <div className="mb-8">
        <h2 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-warning/10 text-warning">
            <ArrowRight className="h-4 w-4" />
          </span>
          What YOU Made Us Do
        </h2>

        <div className="space-y-3">
          {accusations.map((item, index) => (
            <Card key={item.id} className="border-l-4 border-l-primary">
              <CardContent className="py-4 px-3 md:px-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shrink-0 text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm md:text-base mb-2">{item.action}</h3>
                    <blockquote className="bg-muted/50 rounded-lg p-2.5 md:p-3 mb-2 border-l-2 border-primary/50 italic text-xs md:text-sm text-muted-foreground">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    {item.screenshot && (
                      <div className="mb-3 rounded-lg overflow-hidden border bg-muted/30">
                        <img 
                          src={item.screenshot} 
                          alt={`Evidence: ${item.action}`}
                          className="w-full max-h-64 object-contain"
                        />
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <Badge variant="secondary" className="text-xs">{item.date}</Badge>
                      <span className="truncate">{item.source}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-6" />

      {/* Undisputed Facts */}
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base md:text-lg">
            <CheckCircle2 className="h-4 w-4 text-success" />
            Undisputed Facts
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {keyFacts.map((fact, index) => (
              <div
                key={index}
                className="flex items-start gap-2 p-2 rounded-lg bg-success/5 border border-success/20"
              >
                <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm">{fact}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* The Reality */}
      <Card className="mb-6 border-warning/30 bg-warning/5">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-warning text-base md:text-lg">
            <Building2 className="h-4 w-4" />
            Reality vs. Claims
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-xs md:text-sm text-muted-foreground">Enegix Claims:</h4>
              <ul className="space-y-1 text-xs md:text-sm text-muted-foreground">
                <li>• DPG is Hearst&apos;s</li>
                <li>• DPG received 67 BTC</li>
                <li>• Hearst owes $265K</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-xs md:text-sm text-success">The Truth:</h4>
              <ul className="space-y-1 text-xs md:text-sm">
                <li className="flex items-start gap-1">
                  <CheckCircle2 className="h-3 w-3 text-success shrink-0 mt-0.5" />
                  DPG = Enegix
                </li>
                <li className="flex items-start gap-1">
                  <CheckCircle2 className="h-3 w-3 text-success shrink-0 mt-0.5" />
                  BTC → clients
                </li>
                <li className="flex items-start gap-1">
                  <CheckCircle2 className="h-3 w-3 text-success shrink-0 mt-0.5" />
                  YOUR Director declared
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conclusion */}
      <Card className="border-2 border-primary">
        <CardHeader className="pb-2">
          <CardTitle className="text-center text-base md:text-lg">Our Position</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-3">
          <p className="text-sm md:text-base">
            Hearst <strong>refuses</strong> to pay $265,000 because:
          </p>
          <div className="bg-primary/10 rounded-lg p-3 md:p-4 space-y-2 text-left">
            <p className="font-semibold text-primary text-xs md:text-sm">
              1. YOUR Director made the declaration
            </p>
            <p className="font-semibold text-primary text-xs md:text-sm">
              2. 67 BTC went to OUR clients, not DPG
            </p>
            <p className="font-semibold text-primary text-xs md:text-sm">
              3. YOU managed DPG, not us
            </p>
            <p className="font-semibold text-primary text-xs md:text-sm">
              4. YOU admitted it was illegal
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            All evidence preserved. Ready for authorities and legal proceedings.
          </p>
        </CardContent>
      </Card>

      {/* Signature Block */}
      <div className="mt-8 text-center text-muted-foreground text-xs md:text-sm">
        <Separator className="my-4" />
        <p className="font-semibold">Hearst Solutions DMCC</p>
        <p>Dubai, UAE • January 2026</p>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          nav, aside, .sidebar {
            display: none !important;
          }
          main {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
