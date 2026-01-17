import { Evidence, Actor, TimelineEvent, DefenseArgument, CaseMetrics } from "./types";

export const caseMetrics: CaseMetrics = {
  totalEvidence: 8,
  strongEvidence: 8,
  totalDocuments: 263,
  timelineEvents: 15,
  debtAmount: 265000,
  debtCurrency: "USD",
  debtBTC: 2.82,
  btcDeclared: 67,
  deadline: "2026-01-15",
  caseStatus: "active",
};

export const evidence: Evidence[] = [
  {
    id: "EVD-001",
    title: "Enegix Controlled DPG Ownership",
    quote: "One of our team members holding ownership. We need to transfer it to you",
    source: "WhatsApp - DPG company transfer",
    date: "2024-05-17",
    category: "control",
    strength: "strong",
    tags: ["ownership", "enegix-control", "sarsenov"],
    documentRef: "dpg_company_transfer/_chat.txt",
  },
  {
    id: "EVD-002",
    title: "Director = Enegix Family",
    quote: "Sarsenov Olzhas Bolatovich appointed as Director - same family as Yerbolsyn Sarsenov (Enegix CEO)",
    source: "Official Registration Document",
    date: "2024-08-30",
    category: "control",
    strength: "strong",
    tags: ["director", "family-ties", "conflict-of-interest"],
    documentRef: "РЕШЕНИЕ о перерегистрации_v.1.pdf",
  },
  {
    id: "EVD-003",
    title: "Enegix Admits Illegal Structure",
    quote: "Kazakhstan mining license regulations prohibit hosters (VerCom LLC) from renting premises to miners (Digital Performance Group LLC)",
    source: "WhatsApp - Dimitri Enegix",
    date: "2025-10-30",
    category: "illegal",
    strength: "strong",
    tags: ["illegal-structure", "admission", "regulations"],
    documentRef: "dpg_company_transfer/_chat.txt",
  },
  {
    id: "EVD-004",
    title: "Hearst Had No System Access",
    quote: "i think we never use this before / Almas managed everything / you manage everything since beginning",
    source: "WhatsApp - DPG company transfer",
    date: "2025-10-31",
    category: "access",
    strength: "strong",
    tags: ["no-access", "enegix-managed", "egov"],
    documentRef: "dpg_company_transfer/_chat.txt",
  },
  {
    id: "EVD-005",
    title: "No Kazakhstan Phone Number",
    quote: "He doesn't have any, what's the solution?",
    source: "WhatsApp - DPG company transfer",
    date: "2025-10-31",
    category: "access",
    strength: "strong",
    tags: ["no-phone", "no-access", "digital-signature"],
    documentRef: "dpg_company_transfer/_chat.txt",
  },
  {
    id: "EVD-006",
    title: "Administrative Fee Invoice $31,500",
    quote: "Administrative fee for 9 months February-October 2024: $31,500 (Director + Accountant + Lawyer salaries)",
    source: "DPG Admin Invoice",
    date: "2024-11-05",
    category: "control",
    strength: "strong",
    tags: ["admin-fees", "enegix-staff", "payment"],
    documentRef: "00002037-DPG admin invoice.pdf",
  },
  {
    id: "EVD-007",
    title: "BTC Wallets NOT Under DPG Control",
    quote: "DPG has multiple subaccounts each withdrawing mined digital assets to their respective wallet addresses which are NOT UNDER DPG'S CONTROL",
    source: "WhatsApp - Yerbo Enegix (via Adrien)",
    date: "2024-07-02",
    category: "btc",
    strength: "strong",
    tags: ["wallets", "no-control", "clients"],
    documentRef: "yerbo_enegix/_chat.txt",
  },
  {
    id: "EVD-008",
    title: "Never Informed About Taxes",
    quote: "How we can be aware if you never spoke about this",
    source: "Telegram - Dimitri Enegix",
    date: "2026-01-16",
    category: "fiscal",
    strength: "strong",
    tags: ["tax-ignorance", "no-information", "enegix-fault"],
    documentRef: "Telegram conversation",
  },
];

export const actors: Actor[] = [
  {
    id: "ACT-001",
    name: "Adrien Nejkovic",
    role: "Sole Shareholder (from Aug 2024)",
    organization: "DPG / Hearst Solutions DMCC",
    type: "defendant",
    notes: "Never had operational control. Signed documents without translation.",
  },
  {
    id: "ACT-002",
    name: "Olivier Nejkovic",
    role: "Operations Manager",
    organization: "Hearst Solutions DMCC",
    type: "defendant",
    email: "olivier@hearstcorporation.io",
    notes: "Handled day-to-day communications with Enegix.",
  },
  {
    id: "ACT-003",
    name: "Yerbolsyn Sarsenov",
    role: "CEO / Founder",
    organization: "Enegix / ACMining",
    type: "witness",
    email: "y.sarsenov@acmining.kz",
    notes: "Family of DPG Director. Created DPG with their team member.",
    linkedActors: ["ACT-004"],
  },
  {
    id: "ACT-004",
    name: "Olzhas Sarsenov",
    role: "Director of DPG",
    organization: "DPG / Enegix",
    type: "witness",
    notes: "Same family as Yerbolsyn. Made the 67 BTC tax declaration.",
    linkedActors: ["ACT-003"],
  },
  {
    id: "ACT-005",
    name: "Dimitri Ivanov",
    role: "Sales Director",
    organization: "Enegix / ACMining",
    type: "witness",
    email: "d.ivanov@acmining.kz",
    phone: "+7 775 615 8563",
    notes: "Main point of contact. Sent tax payment demands.",
  },
  {
    id: "ACT-006",
    name: "Almas (Legalalmas)",
    role: "Lawyer",
    organization: "Enegix",
    type: "witness",
    notes: "Managed all legal and administrative matters for DPG.",
  },
  {
    id: "ACT-007",
    name: "State Revenue Department - Ekibastuz",
    role: "Tax Authority",
    organization: "Kazakhstan Government",
    type: "authority",
    notes: "Issued tax debt notification for 129.8M KZT CIT.",
  },
];

export const timeline: TimelineEvent[] = [
  {
    id: "TL-001",
    date: "2024-02-06",
    title: "First Contact with Enegix",
    description: "Adrien meets Yerbo in Dubai. Discusses mining hosting in Kazakhstan.",
    category: "communication",
    actors: ["ACT-001", "ACT-003"],
    importance: "medium",
  },
  {
    id: "TL-002",
    date: "2024-02-22",
    title: "DPG-VerCom Hosting Agreement Signed",
    description: "Hosting agreement between DPG and VerCom LLC for computing infrastructure services.",
    category: "contract",
    actors: ["ACT-004"],
    importance: "high",
  },
  {
    id: "TL-003",
    date: "2024-03-29",
    title: "Contract of Sale No. 6 Signed",
    description: "Hearst Solutions DMCC sells mining equipment to DPG. Value: $3,000,000.",
    category: "contract",
    actors: ["ACT-001", "ACT-004"],
    importance: "high",
  },
  {
    id: "TL-004",
    date: "2024-05-17",
    title: "Enegix Reveals DPG Ownership",
    description: "Yerbolsyn confirms 'One of our team members holding ownership. We need to transfer it to you.'",
    category: "transfer",
    actors: ["ACT-003"],
    evidenceIds: ["EVD-001"],
    importance: "critical",
  },
  {
    id: "TL-005",
    date: "2024-07-02",
    title: "Enegix Admits No Wallet Control",
    description: "Dimitri confirms wallets are 'NOT UNDER DPG'S CONTROL' - BTC goes directly to clients.",
    category: "communication",
    actors: ["ACT-005"],
    evidenceIds: ["EVD-007"],
    importance: "critical",
  },
  {
    id: "TL-006",
    date: "2024-08-30",
    title: "DPG Transferred to Adrien",
    description: "Adrien becomes sole shareholder. Olzhas Sarsenov remains Director.",
    category: "transfer",
    actors: ["ACT-001", "ACT-004"],
    evidenceIds: ["EVD-002"],
    importance: "critical",
  },
  {
    id: "TL-007",
    date: "2024-11-05",
    title: "Admin Fee Invoice Sent",
    description: "DPG invoices Hearst $31,500 for 9 months of administrative fees (Director, Accountant, Lawyer).",
    category: "fiscal",
    actors: ["ACT-004"],
    evidenceIds: ["EVD-006"],
    importance: "critical",
  },
  {
    id: "TL-008",
    date: "2025-10-30",
    title: "Enegix Admits Illegal Structure",
    description: "Dimitri states 'Kazakhstan mining license regulations prohibit hosters from renting premises to miners.'",
    category: "communication",
    actors: ["ACT-005"],
    evidenceIds: ["EVD-003"],
    importance: "critical",
  },
  {
    id: "TL-009",
    date: "2025-10-31",
    title: "Hearst Confirms No Access",
    description: "Olivier confirms 'we never use this before', 'you manage everything since beginning'.",
    category: "communication",
    actors: ["ACT-002"],
    evidenceIds: ["EVD-004", "EVD-005"],
    importance: "critical",
  },
  {
    id: "TL-010",
    date: "2025-11-26",
    title: "VerCom Renamed to ACMining",
    description: "Enegix rebrands from VerCom LLC to Alem Crypto Mining (ACMining).",
    category: "communication",
    actors: ["ACT-005"],
    importance: "low",
  },
  {
    id: "TL-011",
    date: "2025-12-31",
    title: "Tax Debt Notification Issued",
    description: "State Revenue Department issues CIT debt notice: 129,829,500 KZT (~$265,000).",
    category: "fiscal",
    actors: ["ACT-007"],
    importance: "critical",
  },
  {
    id: "TL-012",
    date: "2026-01-12",
    title: "First Payment Demand",
    description: "Olzhas Sarsenov sends letter demanding CIT payment of 131M KZT by Jan 15.",
    category: "threat",
    actors: ["ACT-004"],
    importance: "high",
  },
  {
    id: "TL-013",
    date: "2026-01-15",
    title: "Payment Deadline Passed",
    description: "Tax payment deadline expires without payment.",
    category: "fiscal",
    actors: [],
    importance: "critical",
  },
  {
    id: "TL-014",
    date: "2026-01-16",
    title: "Second Payment Demand with Threats",
    description: "Enegix threatens account freeze, asset seizure, and hosting suspension.",
    category: "threat",
    actors: ["ACT-004", "ACT-005"],
    evidenceIds: ["EVD-008"],
    importance: "critical",
  },
  {
    id: "TL-015",
    date: "2026-01-17",
    title: "Defense Case Initiated",
    description: "Legal defense strategy and evidence compilation begins.",
    category: "communication",
    actors: ["ACT-001", "ACT-002"],
    importance: "high",
  },
];

export const defenseArguments: DefenseArgument[] = [
  {
    id: "DEF-001",
    number: 1,
    title: "DPG Was Controlled by Enegix, Not Hearst",
    summary: "Enegix created DPG, installed their family member as director, and managed all operations.",
    details: `Evidence shows that:
    
1. Enegix created DPG with their own team member as owner (Yerbolsyn Sarsenov, May 17, 2024)
2. Director Olzhas Sarsenov is from the same family as Enegix CEO
3. Enegix's lawyer (Almas) managed all legal/administrative matters
4. Hearst paid $31,500 for Enegix staff to run DPG (Director, Accountant, Lawyer salaries)
5. Hearst never had access to Kazakhstan government portals (egov.kz)
6. Hearst had no Kazakhstan phone number for digital signature access`,
    legalBasis: "Agency liability - the principal (Hearst) cannot be held responsible for unauthorized acts by the agent (Enegix-controlled director)",
    evidenceIds: ["EVD-001", "EVD-002", "EVD-004", "EVD-005", "EVD-006"],
    strength: "strong",
  },
  {
    id: "DEF-002",
    number: 2,
    title: "DPG Never Received or Controlled the 67 BTC",
    summary: "Bitcoin went directly from mining pool to client wallets via Fireblocks - never through DPG.",
    details: `The tax claim is based on 67 BTC as DPG revenue, but:

1. Dimitri (Enegix) confirmed wallets are "NOT UNDER DPG'S CONTROL"
2. Each client had their own wallet (DPG Wallets.xlsx)
3. BTC was sent directly to clients via Fireblocks (institutional custody)
4. DPG had no wallet, no bank account for crypto
5. DPG's only revenue was service fees at 6.9¢/kWh (pass-through, no margin)`,
    legalBasis: "Tax Code - CIT applies to actual received income, not third-party assets that transit through a conduit",
    evidenceIds: ["EVD-007"],
    strength: "strong",
  },
  {
    id: "DEF-003",
    number: 3,
    title: "Tax Declaration Made Without Hearst's Knowledge or Approval",
    summary: "The director (Enegix employee) made erroneous tax declarations without consulting Hearst.",
    details: `The 67 BTC declaration was made by Olzhas Sarsenov (Director):

1. Sarsenov is an Enegix employee/family member
2. Hearst was never consulted about tax filings
3. Hearst was never informed about tax obligations ("How we can be aware if you never spoke about this")
4. Hearst had no access to tax filing systems
5. Hearst never signed any tax declarations`,
    legalBasis: "Unauthorized acts by corporate officer - shareholder not liable for acts outside their knowledge and control",
    evidenceIds: ["EVD-002", "EVD-004", "EVD-008"],
    strength: "strong",
  },
  {
    id: "DEF-004",
    number: 4,
    title: "Enegix Admits the Structure Was Illegal",
    summary: "Enegix themselves confirmed that their hosting arrangement violated Kazakhstan regulations.",
    details: `On October 30, 2025, Dimitri Ivanov (Enegix) wrote:

"Kazakhstan mining license regulations prohibit hosters (VerCom LLC) from renting premises to miners (Digital Performance Group LLC)."

This admission proves:
1. Enegix knew the structure was problematic
2. They continued operating despite the regulatory violation
3. They are attempting to shift liability to Hearst`,
    legalBasis: "Estoppel / Clean hands doctrine - Enegix cannot benefit from their own illegal arrangement",
    evidenceIds: ["EVD-003"],
    strength: "strong",
  },
  {
    id: "DEF-005",
    number: 5,
    title: "DPG Is Infrastructure Provider, Not Miner",
    summary: "DPG provided hosting services only - the actual mining was done by clients who own the BTC.",
    details: `According to PwC Kazakhstan Tax Alert (November 2021):

"The provision of mining infrastructure (and not the digital mining itself) is not subject to the digital mining tax."

DPG's role was:
- Hosting client equipment
- Providing electricity (at cost, 6.9¢/kWh)
- Maintenance services

DPG did NOT:
- Own the mining equipment (owned by European bank)
- Receive the mined BTC
- Control client wallets`,
    legalBasis: "PwC Kazakhstan Tax Alert, Nov 2021 - Infrastructure providers exempt from mining tax",
    evidenceIds: ["EVD-006", "EVD-007"],
    strength: "strong",
  },
];

export function getEvidenceById(id: string): Evidence | undefined {
  return evidence.find((e) => e.id === id);
}

export function getActorById(id: string): Actor | undefined {
  return actors.find((a) => a.id === id);
}

export function getTimelineByImportance(importance: TimelineEvent["importance"]): TimelineEvent[] {
  return timeline.filter((t) => t.importance === importance);
}

export function getCriticalEvents(): TimelineEvent[] {
  return timeline.filter((t) => t.importance === "critical");
}
