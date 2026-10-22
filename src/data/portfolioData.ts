export interface Project {
  title: string;
  badge: string;
  badgeColor: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  isPrivate?: boolean;
  sfx: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'AI Workflow V3',
    badge: 'Agent Core',
    badgeColor: 'bg-amber-300 text-amber-950',
    tagline: 'Deterministic AI Agent Control Plane & SCIP Indexer in Go',
    description: 'Go-first orchestration engine with SCIP symbol graph indexing. Replaces full-file context dumps with precise structural references via native MCP servers and deterministic loops.',
    tags: ['Go', 'MCP Protocol', 'SCIP/AST', 'Multi-Agent', 'CLI'],
    githubUrl: 'https://github.com/Taki7980/Ai-workflow-V3',
    isPrivate: false,
    sfx: 'ドドド'
  },
  {
    title: 'RevenueOS Backend',
    badge: 'Fintech Engine',
    badgeColor: 'bg-emerald-300 text-emerald-950',
    tagline: 'Multi-Tenant B2B Revenue Quotation Engine & Idempotent Ledger in Go',
    description: 'Production-grade B2B quotation agent in Go with PostgreSQL. Features WorkOS JWT/JWKS auth, row-level security, transactional outbox with SKIP LOCKED, integer minor-unit money math, and WhatsApp webhook processing.',
    tags: ['Go', 'PostgreSQL', 'Docker', 'Idempotency', 'WorkOS'],
    isPrivate: true,
    sfx: 'バーン'
  },
  {
    title: 'AI Workflow Control Plane V2',
    badge: 'Systems & ML',
    badgeColor: 'bg-emerald-300 text-emerald-950',
    tagline: 'Budget-Constrained Context Assembly & Adaptive Routing Engine',
    description: 'Autonomous control plane coordinating structural AST intelligence, BM25/RRF fusion ranking, and submodular context assembly with crash-consistent atomic state transitions.',
    tags: ['Python', 'AST Indexing', 'Context Optimization', 'Telemetry', 'Distributed'],
    githubUrl: 'https://github.com/Taki7980/ai-workflow-control-plane-v2',
    isPrivate: false,
    sfx: 'バーン'
  },
  {
    title: 'Distributed File Storage',
    badge: 'P2P Network',
    badgeColor: 'bg-sky-300 text-sky-950',
    tagline: 'Decentralized Content-Addressed Storage System',
    description: 'Peer-to-peer storage cluster created from scratch in Go. Implements TCP framing, peer handshakes, CAS SHA-256 routing, and streaming encryption without heavy frameworks.',
    tags: ['Go', 'P2P', 'TCP Sockets', 'CAS', 'Crypto'],
    githubUrl: 'https://github.com/Taki7980/distributed-file-storage',
    isPrivate: false,
    sfx: 'ゴゴゴ'
  },
  {
    title: 'AI PRD Generator',
    badge: 'Productivity',
    badgeColor: 'bg-purple-300 text-purple-950',
    tagline: 'Multi-Model Engineering Requirements Workbench with pgvector',
    description: 'Converts product ideas into structured PRDs with RICE scoring. Implements multi-model ensemble orchestration across Claude, GPT-4o, and Gemini with Zod schema validation, pgvector RAG, and cross-family LLM evaluation.',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'pgvector', 'Zod'],
    isPrivate: true,
    sfx: 'シャキーン'
  },
  {
    title: 'Context Bridge',
    badge: 'Privacy Extension',
    badgeColor: 'bg-rose-300 text-rose-950',
    tagline: 'Local-First Chrome Extension for Secure AI Prompts',
    description: 'Sanitizes developer context before it reaches third-party LLMs. Filters sensitive tokens and credentials, exporting structured snippets via clipboard or native MCP bridges.',
    tags: ['TypeScript', 'Chrome MV3', 'Security', 'Privacy'],
    githubUrl: 'https://github.com/Taki7980/Context-Bridge',
    isPrivate: false,
    sfx: 'ピカーン'
  },
  {
    title: 'AllmightyAPI',
    badge: 'API Gateway',
    badgeColor: 'bg-blue-300 text-blue-950',
    tagline: 'Unified REST & Developer Utility Services Hub',
    description: 'Modular API backend and developer utility hub providing low-latency helper endpoints, format converters, and lightweight utilities for developer workflows.',
    tags: ['JavaScript', 'Node.js', 'REST API', 'Backend'],
    githubUrl: 'https://github.com/Taki7980/AllmightyAPI',
    isPrivate: false,
    sfx: 'シャキーン'
  },
  {
    title: 'Elden Ring Utility',
    badge: 'Companion Tool',
    badgeColor: 'bg-yellow-300 text-yellow-950',
    tagline: 'Zero-Telemetry Browser Gaming Tool',
    description: 'Offline-capable gaming extension engineered for minimal permissions and zero telemetry tracking. Fast, lightweight reference built for desktop browsers.',
    tags: ['JavaScript', 'Extension', 'Tools'],
    githubUrl: 'https://github.com/Taki7980/elden-ring-extension',
    isPrivate: false,
    sfx: 'ダダダ'
  }
];

export interface Essay {
  title: string;
  date: string;
  summary: string;
  content: string;
}

export const ESSAYS: Essay[] = [
  {
    title: 'Why Deterministic Systems Beat LLM Prompts in Production',
    date: 'Oct 2026',
    summary: 'Building reliable transaction systems by keeping probabilistic models far away from business state logic.',
    content: 'Large Language Models are probabilistic generators, while financial ledgers, inventory counts, and state gates demand strict determinism. In production system design, we isolate LLMs strictly to parsing unstructured input into strongly-typed schemas. State transitions, idempotency keys, and persistence are executed exclusively in compiled backend services with ACID guarantees. Never let an LLM do arbitrary math or directly authorize transactional transitions.'
  },
  {
    title: 'Designing Content-Addressed Storage from Sockets to Disk',
    date: 'Sep 2026',
    summary: 'A deep-dive into TCP framing, SHA-256 CAS routing, and p2p handshakes without third-party frameworks.',
    content: 'Building a distributed peer-to-peer storage engine from scratch forces you to understand every layer of the network stack. Instead of relying on libp2p, we implemented raw TCP socket framing with explicit byte lengths, handshakes with cryptographic identity verification, and content-addressed storage where file paths are derived strictly from SHA-256 digests. This guarantees deduplication across the entire cluster by design.'
  },
  {
    title: 'The Token Optimization Playbook for High-Efficiency Agents',
    date: 'Aug 2026',
    summary: 'How AST symbol indexing, tree-sitter, and SCIP cut agent context window waste.',
    content: 'Dumping entire source repositories into model context windows is an inefficient way to run coding agents. In AI Workflow architectures, we build an indexer producing SCIP symbol definitions and references. When the agent investigates an issue, it fetches only the exact function signature, docstring, and immediate callers rather than raw thousands-line files. Unnecessary token bloat drops while response precision rises.'
  }
];
