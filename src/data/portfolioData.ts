export interface Project {
  title: string;
  badge: string;
  badgeColor: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl: string;
  sfx: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'AI Workflow V3',
    badge: 'Agent Core',
    badgeColor: 'bg-amber-300 text-amber-950',
    tagline: 'Deterministic AI Agent Control Plane & SCIP Indexer in Go',
    description: 'Go-first orchestration platform. Escalates model capability instead of bloating prompt tokens. Includes native MCP server, AST symbol navigation, and replay journals.',
    tags: ['Go', 'MCP Protocol', 'AST Parser', 'Multi-Agent', 'CLI'],
    githubUrl: 'https://github.com/Taki7980/Ai-workflow-V3',
    sfx: 'ドドド'
  },
  {
    title: 'RevenueOS Backend',
    badge: 'Fintech Engine',
    badgeColor: 'bg-emerald-300 text-emerald-950',
    tagline: 'High-Concurrency Automated Quotation & Order Engine',
    description: 'Production B2B sales automation engine. Keeps probabilistic LLMs away from money calculations: validates via strict schemas while Go handles deterministic ledger states.',
    tags: ['Go', 'PostgreSQL', 'Docker', 'REST API', 'WhatsApp Bot'],
    githubUrl: 'https://github.com/Taki7980/RevenueOS-backend',
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
    sfx: 'ゴゴゴ'
  },
  {
    title: 'Context Bridge',
    badge: 'Privacy Extension',
    badgeColor: 'bg-rose-300 text-rose-950',
    tagline: 'Local-First Chrome Extension for Secure AI Prompts',
    description: 'Sanitizes developer context before it hits the LLM. Scans for leaked keys/tokens and exports structured snippets via clipboard or native MCP bridges.',
    tags: ['TypeScript', 'Chrome MV3', 'Security', 'Privacy'],
    githubUrl: 'https://github.com/Taki7980/Context-Bridge',
    sfx: 'ピカーン'
  },
  {
    title: 'PRD Generator',
    badge: 'Productivity',
    badgeColor: 'bg-purple-300 text-purple-950',
    tagline: 'Structured Requirements Workbench with Multi-Model AI',
    description: 'Transforms messy feature brainstorms into structured engineering PRDs with RICE scoring. Unifies Claude, GPT-4o, and Gemini with strict schema enforcement.',
    tags: ['TypeScript', 'React', 'Multi-Model', 'Schemas'],
    githubUrl: 'https://github.com/Taki7980/PRD_Generator',
    sfx: 'シャキーン'
  },
  {
    title: 'Elden Ring Utility',
    badge: 'Companion Tool',
    badgeColor: 'bg-yellow-300 text-yellow-950',
    tagline: 'Zero-Telemetry Browser Gaming Tool',
    description: 'Offline-capable gaming extension audited for minimal permissions and zero telemetry. Fast, lightweight reference built for desktop browsers.',
    tags: ['JavaScript', 'Extension', 'Audited'],
    githubUrl: 'https://github.com/Taki7980/elden-ring-extension',
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
    summary: 'Building reliable revenue systems by keeping probabilistic models far away from business state logic.',
    content: 'Large Language Models are probabilistic generators, while financial ledgers, inventory counts, and authentication gates demand 100% determinism. When building RevenueOS, we isolated LLMs strictly to parsing unstructured customer intent into strongly-typed JSON schemas. The transaction logic, idempotency keys, and state transitions are executed exclusively in Go with ACID guarantees in PostgreSQL. Never let an LLM do math or decide whether an order is valid.'
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
    summary: 'How AST symbol indexing, tree-sitter, and SCIP cut agent context window usage by up to 70%.',
    content: 'Dumping entire source repositories into model context windows is the most expensive and error-prone way to build coding agents. In AI Workflow V3, we built an indexer that produces SCIP symbol definitions and references. When the agent investigates a bug, it fetches only the exact function signature, docstring, and immediate callers rather than raw 1,000-line files. Token consumption drops significantly while response precision skyrockets.'
  }
];
