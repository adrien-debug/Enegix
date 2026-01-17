export interface Evidence {
  id: string;
  title: string;
  quote: string;
  source: string;
  date: string;
  category: "control" | "btc" | "fiscal" | "illegal" | "access";
  strength: "strong" | "medium" | "weak";
  tags: string[];
  documentRef?: string;
}

export interface Actor {
  id: string;
  name: string;
  role: string;
  organization: string;
  type: "plaintiff" | "defendant" | "witness" | "authority";
  email?: string;
  phone?: string;
  notes?: string;
  linkedActors?: string[];
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  category: "contract" | "transfer" | "fiscal" | "communication" | "threat";
  actors: string[];
  evidenceIds?: string[];
  importance: "critical" | "high" | "medium" | "low";
}

export interface DefenseArgument {
  id: string;
  number: number;
  title: string;
  summary: string;
  details: string;
  legalBasis?: string;
  evidenceIds: string[];
  strength: "strong" | "medium" | "weak";
}

export interface Document {
  id: string;
  name: string;
  type: "pdf" | "docx" | "xlsx" | "txt" | "image" | "audio";
  path: string;
  category: "contract" | "invoice" | "whatsapp" | "fiscal" | "evidence";
  dateAdded: string;
  size?: string;
  ocrText?: string;
}

export interface CaseMetrics {
  totalEvidence: number;
  strongEvidence: number;
  totalDocuments: number;
  timelineEvents: number;
  debtAmount: number;
  debtCurrency: string;
  debtBTC: number;
  btcDeclared: number;
  deadline: string;
  caseStatus: "active" | "pending" | "resolved";
}
