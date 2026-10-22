import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Terminal, 
  Server, 
  Layers, 
  Code2, 
  Heart, 
  Copy, 
  Check, 
  ArrowUpRight,
  BookOpen,
  Volume2,
  VolumeX,
  Zap,
  Flame,
  Laugh,
  AlertCircle
} from 'lucide-react';
import { sound } from './utils/sound';
import { PROJECTS, ESSAYS, type Project } from './data/portfolioData';
import { MangaPanel, SpeechBubble, SfxBadge } from './components/MangaComponents';

function GithubIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

export default function App() {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [mioExcitement, setMioExcitement] = useState(1);
  const [muted, setMuted] = useState(sound.isMuted());
  const [activeSpeech, setActiveSpeech] = useState<string>("Writing high-throughput Go microservices with MAXIMUM INTENSITY!");
  const [selectedEssay, setSelectedEssay] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Hardened Konami Code Listener
  useEffect(() => {
    const konamiSequence = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];
    let curIndex = 0;

    const onKey = (e: KeyboardEvent) => {
      const pressed = e.key.toLowerCase();
      if (pressed === konamiSequence[curIndex]) {
        curIndex++;
        if (curIndex === konamiSequence.length) {
          curIndex = 0;
          sound.playDramaticBoom();
          confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.5 },
            colors: ['#ff0055', '#ffaa00', '#00ffcc', '#aa00ff']
          });
          setActiveSpeech("🎉 KONAMI CODE ACTIVATED! ULTRA OVERCLOCKING UNLOCKED!");
        }
      } else {
        curIndex = pressed === konamiSequence[0] ? 1 : 0;
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggleSound = () => {
    const next = !muted;
    setMuted(next);
    sound.setMuted(next);
    if (!next) sound.playBlip();
  };

  const triggerMioCelebration = () => {
    setMioExcitement(prev => prev + 1);
    sound.playSparkle();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#fb7185', '#fde047', '#34d399', '#a855f7']
    });

    const quotes = [
      "Wait, did this Go routine just deadlock?! No way!",
      "I will optimize this Redis cache if it's the last thing I do!",
      "Who needs sleep when there are distributed state machines to debug?!",
      "GAAAAH! That is a 0.2ms latency improvement!",
      "SUPER MIO CHOP! All memory leaks eradicated!"
    ];
    setActiveSpeech(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('nirjharsarkar8@gmail.com');
      setCopyStatus('success');
      sound.playBlip();
    } catch {
      setCopyStatus('error');
    } finally {
      setTimeout(() => setCopyStatus('idle'), 2500);
    }
  };

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.tags.includes(activeFilter));

  const allTags = ['All', 'Go', 'TypeScript', 'MCP Protocol', 'P2P', 'Security'];

  return (
    <div className="min-h-screen halftone-bg py-8 px-4 sm:px-6 md:px-12 selection:bg-pink-300 selection:text-slate-900 overflow-x-hidden">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Manga Top Banner */}
        <MangaPanel className="flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden pt-6 sm:pt-8">
          <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none select-none text-8xl sm:text-9xl font-black text-slate-900 hidden sm:block">
            日常
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 z-10 text-center sm:text-left">
            <button 
              type="button" 
              onClick={triggerMioCelebration}
              className="relative group cursor-pointer focus:outline-hidden focus:ring-4 focus:ring-pink-400 rounded-2xl shrink-0"
              aria-label="Click to boost Mio's excitement level"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-3 border-slate-900 shadow-[3px_3px_0px_#0f172a] group-hover:scale-105 group-hover:-rotate-2 transition-transform">
                <img 
                  src="/mio_profile.jpg" 
                  alt="Mio Naganohara Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-2 -right-2 bg-pink-400 border-2 border-slate-900 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1 z-20">
                <Heart className="w-3 h-3 fill-pink-600 text-pink-600" /> Mio Lv.{mioExcitement}
              </span>
            </button>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-200 border-2 border-slate-900 rounded-full text-xs font-black text-slate-900 mb-2">
                <Zap className="w-3.5 h-3.5 fill-yellow-500 text-yellow-600" /> Nichijou Ordinary Life Edition
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight flex items-center justify-center sm:justify-start gap-2">
                Nirjhar Sarkar
              </h1>
              <p className="text-sm sm:text-base font-bold text-slate-600 mt-1">
                Distributed Systems Hacker • Go & AI Control Planes
              </p>
            </div>
          </div>

          <div className="z-10 flex flex-col sm:flex-row md:flex-col gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={triggerMioCelebration}
              className="manga-btn bg-pink-400 hover:bg-pink-300 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-slate-900"
            >
              <Sparkles className="w-4 h-4" /> Mio Sparkle Attack!
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={copyEmail}
                className="manga-btn flex-1 bg-sky-200 hover:bg-sky-100 text-slate-950 font-bold px-3 py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                aria-label="Copy Nirjhar's email address"
              >
                {copyStatus === 'success' && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                {copyStatus === 'error' && <AlertCircle className="w-3.5 h-3.5 text-rose-600" />}
                {copyStatus === 'idle' && <Copy className="w-3.5 h-3.5" />}
                <span>
                  {copyStatus === 'success' ? 'Copied!' : copyStatus === 'error' ? 'Copy Failed' : 'Copy Email'}
                </span>
              </button>
              <button
                type="button"
                onClick={toggleSound}
                className="manga-btn bg-amber-200 hover:bg-amber-100 text-slate-950 font-bold px-3 py-2 rounded-xl text-xs flex items-center justify-center cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                title={muted ? 'Unmute Sound FX' : 'Mute Sound FX'}
                aria-label={muted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
              >
                {muted ? <VolumeX className="w-4 h-4 text-rose-600" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
              </button>
            </div>
          </div>
        </MangaPanel>

        {/* Dynamic Speech & Hero Panel */}
        <MangaPanel badge="Episode 1: The Go Engine" badgeColor="bg-sky-300">
          <div className="grid md:grid-cols-5 gap-6 items-center">
            <div className="md:col-span-3 space-y-4">
              <SpeechBubble variant="shout" className="mb-4">
                <span className="flex items-start gap-2">
                  <Laugh className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
                  <span className="break-words leading-relaxed">"{activeSpeech}"</span>
                </span>
              </SpeechBubble>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                Writing high-throughput backends with the chaotic passion of Mio!
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                When I'm not architecting event-driven microservices in <strong>Go</strong> or fine-tuning <strong>AI agent control planes</strong>, I build ultra-performant tools, design P2P distributed file layers, and craft reactive TypeScript applications.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <button 
                  type="button"
                  onClick={() => { sound.playDramaticBoom(); setActiveSpeech("200+ algorithms defeated! Dynamic programming mastered!"); }}
                  className="bg-amber-100 border-2 border-slate-900 text-slate-900 text-xs font-black px-3 py-1 rounded-lg cursor-pointer hover:bg-amber-200 transition focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                  aria-label="View Leetcode metric quote"
                >
                  ⚡ 200+ LeetCode Solved
                </button>
                <button 
                  type="button"
                  onClick={() => { sound.playSparkle(); setActiveSpeech("Over 80 open source repositories published on GitHub!"); }}
                  className="bg-emerald-100 border-2 border-slate-900 text-slate-900 text-xs font-black px-3 py-1 rounded-lg cursor-pointer hover:bg-emerald-200 transition focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                  aria-label="View Open source metric quote"
                >
                  🛰️ 80+ Open Source Repos
                </button>
                <button 
                  type="button"
                  onClick={() => { sound.playWhoosh(); setActiveSpeech("P99 latency down to sub-millisecond territory!"); }}
                  className="bg-purple-100 border-2 border-slate-900 text-slate-900 text-xs font-black px-3 py-1 rounded-lg cursor-pointer hover:bg-purple-200 transition focus:outline-hidden focus:ring-2 focus:ring-slate-900"
                  aria-label="View Go Architecture latency quote"
                >
                  🚀 Sub-ms Go Architecture
                </button>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col items-center justify-center">
              <button 
                type="button"
                onClick={() => { sound.playDramaticBoom(); triggerMioCelebration(); }}
                className="relative border-3 border-slate-900 rounded-2xl overflow-hidden shadow-[4px_4px_0px_#0f172a] w-full max-w-[320px] aspect-[4/3] group cursor-pointer text-left focus:outline-hidden focus:ring-4 focus:ring-pink-400"
                aria-label="Mio Naganohara Dramatic Burst"
              >
                <img 
                  src="/mio_hero.webp" 
                  alt="Nichijou Mio Artwork" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <SfxBadge text="ドドド" className="text-xl" />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-slate-950/85 text-white text-[11px] font-bold py-2 px-3 text-center leading-tight">
                  Mio Naganohara (Click for Dramatic Burst!)
                </div>
              </button>
            </div>
          </div>
        </MangaPanel>

        {/* Featured Projects with Interactive Filter Bar */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="bg-slate-900 text-white font-black text-sm px-3 py-1 rounded-lg">
                ACT II
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Major Inventions
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-1.5">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    setActiveFilter(tag);
                    sound.playBlip();
                  }}
                  className={`text-xs font-black px-2.5 py-1 rounded-lg border-2 border-slate-900 transition cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-slate-900 ${
                    activeFilter === tag 
                      ? 'bg-slate-900 text-white shadow-[2px_2px_0px_#fb7185]' 
                      : 'bg-white text-slate-800 hover:bg-slate-100 shadow-[2px_2px_0px_#0f172a]'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((proj: Project) => {
              const CardTag = proj.isPrivate ? 'div' : 'a';
              const cardProps = proj.isPrivate 
                ? { role: 'article', 'aria-label': `${proj.title} (Private Repository)` }
                : { href: proj.githubUrl, target: '_blank', rel: 'noreferrer' };

              return (
                <CardTag 
                  key={proj.title} 
                  {...cardProps}
                  className={`bg-white border-3 border-slate-900 rounded-xl p-5 flex flex-col justify-between shadow-[4px_4px_0px_#0f172a] transition-all group overflow-hidden ${
                    proj.isPrivate 
                      ? 'cursor-default' 
                      : 'hover:shadow-[6px_6px_0px_#0f172a] hover:-translate-y-1 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-slate-900'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`text-[10px] font-black border-2 border-slate-900 px-2 py-0.5 rounded-md shrink-0 ${proj.badgeColor}`}>
                          {proj.badge}
                        </span>
                        {proj.isPrivate && (
                          <span className="text-[10px] font-black border-2 border-slate-900 bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded-md shrink-0 uppercase tracking-tight">
                            Private Repo
                          </span>
                        )}
                      </div>
                      <SfxBadge text={proj.sfx} className="text-xs shrink-0" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base mb-1 group-hover:text-pink-600 transition-colors flex items-center justify-between gap-1 break-words">
                      <span className="break-words">{proj.title}</span>
                      {!proj.isPrivate && (
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                      )}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-2 break-words">
                      {proj.tagline}
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed mb-4 break-words">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t-2 border-slate-100">
                    {proj.tags.map((t: string, tid: number) => (
                      <span key={tid} className="text-[10px] font-bold bg-slate-100 border border-slate-300 px-1.5 py-0.5 rounded text-slate-700 break-all">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardTag>
              );
            })}
          </div>
        </div>

        {/* Technical Stats & Arsenal Panel */}
        <MangaPanel badge="ACT III: Battle Stats" badgeColor="bg-pink-400">
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              <Flame className="w-6 h-6 text-pink-600" /> Engineering Arsenal & Core Capabilities
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <button 
                type="button"
                onClick={() => { sound.playDramaticBoom(); setActiveSpeech("Go concurrency channels are bulletproof!"); }}
                className="bg-sky-50 border-2 border-slate-900 rounded-xl p-4 text-center shadow-[3px_3px_0px_#0f172a] hover:scale-102 transition cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-slate-900 overflow-hidden"
              >
                <Server className="w-6 h-6 mx-auto mb-2 text-sky-600 shrink-0" />
                <h3 className="font-black text-slate-900 text-sm break-words">Distributed Core</h3>
                <p className="text-xs font-semibold text-slate-600 mt-1 break-words">Go, Redis, Kafka, PostgreSQL, TCP protocols, Docker</p>
              </button>
              <button 
                type="button"
                onClick={() => { sound.playBlip(); setActiveSpeech("TypeScript strict mode enabled everywhere!"); }}
                className="bg-pink-50 border-2 border-slate-900 rounded-xl p-4 text-center shadow-[3px_3px_0px_#0f172a] hover:scale-102 transition cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-slate-900 overflow-hidden"
              >
                <Layers className="w-6 h-6 mx-auto mb-2 text-pink-600 shrink-0" />
                <h3 className="font-black text-slate-900 text-sm break-words">Frontend Magic</h3>
                <p className="text-xs font-semibold text-slate-600 mt-1 break-words">TypeScript, React, Next.js, Tailwind CSS, Vite</p>
              </button>
              <button 
                type="button"
                onClick={() => { sound.playWhoosh(); setActiveSpeech("Model Context Protocol AST parsing reduces unnecessary context bloat!"); }}
                className="bg-amber-50 border-2 border-slate-900 rounded-xl p-4 text-center shadow-[3px_3px_0px_#0f172a] hover:scale-102 transition cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-slate-900 overflow-hidden"
              >
                <Terminal className="w-6 h-6 mx-auto mb-2 text-amber-600 shrink-0" />
                <h3 className="font-black text-slate-900 text-sm break-words">AI Orchestration</h3>
                <p className="text-xs font-semibold text-slate-600 mt-1 break-words">MCP protocol, SCIP AST trees, structured outputs</p>
              </button>
              <button 
                type="button"
                onClick={() => { sound.playSparkle(); setActiveSpeech("Observability with New Relic and deterministic testing!"); }}
                className="bg-emerald-50 border-2 border-slate-900 rounded-xl p-4 text-center shadow-[3px_3px_0px_#0f172a] hover:scale-102 transition cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-slate-900 overflow-hidden"
              >
                <Code2 className="w-6 h-6 mx-auto mb-2 text-emerald-600 shrink-0" />
                <h3 className="font-black text-slate-900 text-sm break-words">Observability</h3>
                <p className="text-xs font-semibold text-slate-600 mt-1 break-words">New Relic, tracing, LeetCode 200+, unit testing</p>
              </button>
            </div>
          </div>
        </MangaPanel>

        {/* Technical Essays Section */}
        <MangaPanel badge="Technical Deep-Dives" badgeColor="bg-emerald-300">
          <div className="space-y-4">
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" /> Architecture Notes & Production Lessons
            </h2>
            <div className="space-y-3">
              {ESSAYS.map((essay, idx) => (
                <div 
                  key={essay.title}
                  className="p-4 rounded-xl border-2 border-slate-900 bg-amber-50/40 hover:bg-amber-50 shadow-[2px_2px_0px_#0f172a] transition overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedEssay(selectedEssay === idx ? null : idx);
                      sound.playBlip();
                    }}
                    className="w-full text-left flex justify-between items-start cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-slate-900 gap-3"
                  >
                    <div className="overflow-hidden">
                      <h3 className="font-black text-sm text-slate-900 hover:text-pink-600 transition break-words">
                        {essay.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-600 mt-1 break-words">
                        {essay.summary}
                      </p>
                    </div>
                    <span className="text-xs text-slate-500 font-bold ml-2 shrink-0 whitespace-nowrap">
                      {essay.date}
                    </span>
                  </button>
                  {selectedEssay === idx && (
                    <div className="mt-3 p-4 rounded-lg bg-white text-xs leading-relaxed text-slate-800 border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] break-words overflow-hidden">
                      {essay.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </MangaPanel>

        {/* Footer / Socials / Mio Spin */}
        <footer className="bg-white border-3 border-slate-900 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[5px_5px_0px_#0f172a]">
          <div className="flex items-center gap-4">
            <button 
              type="button"
              onClick={() => { sound.playSparkle(); triggerMioCelebration(); }}
              className="cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-pink-400 rounded-lg"
              aria-label="Click animated Mio sprite"
            >
              <img 
                src="/mio_spin.gif" 
                alt="Mio animated sprite" 
                className="w-12 h-12 object-contain hover:rotate-12 transition-transform"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/mio_profile.jpg';
                }}
              />
            </button>
            <div>
              <p className="text-sm font-black text-slate-900">
                Created by Nirjhar Sarkar
              </p>
              <p className="text-xs font-bold text-slate-500">
                Inspired by Nichijou (My Ordinary Life) • React 19 + Vite + Tailwind 4
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/Taki7980" 
              target="_blank" 
              rel="noreferrer" 
              className="manga-btn p-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-900 inline-block cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-slate-900"
              title="GitHub"
            >
              <GithubIcon />
            </a>
            <a 
              href="https://www.linkedin.com/in/nirjhar-sarkar/" 
              target="_blank" 
              rel="noreferrer" 
              className="manga-btn p-2.5 bg-sky-100 hover:bg-sky-200 rounded-xl text-sky-800 inline-block cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-slate-900"
              title="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a 
              href="https://x.com/nirjharsarkar_7" 
              target="_blank" 
              rel="noreferrer" 
              className="manga-btn p-2.5 bg-slate-900 hover:bg-slate-800 rounded-xl text-white inline-block cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-slate-900"
              title="X / Twitter"
            >
              <TwitterIcon />
            </a>
            <a 
              href="https://leetcode.com/" 
              target="_blank" 
              rel="noreferrer" 
              className="manga-btn p-2.5 bg-amber-100 hover:bg-amber-200 rounded-xl text-amber-800 inline-block cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-slate-900"
              title="LeetCode"
            >
              <Code2 className="w-4 h-4" />
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}
