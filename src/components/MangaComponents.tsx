import React from 'react';

interface MangaPanelProps {
  children: React.ReactNode;
  className?: string;
  badge?: string;
  badgeColor?: string;
}

export function MangaPanel({ children, className = '', badge, badgeColor = 'bg-yellow-300' }: MangaPanelProps) {
  return (
    <section className={`relative bg-white border-3 border-slate-900 rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#0f172a] hover:shadow-[8px_8px_0px_#0f172a] transition-all duration-200 overflow-hidden ${className}`}>
      {badge && (
        <div className={`absolute top-0 left-6 -translate-y-1/2 border-2 border-slate-900 px-3 py-0.5 rounded-full text-xs font-black uppercase tracking-wider text-slate-950 shadow-[2px_2px_0px_#0f172a] z-20 ${badgeColor}`}>
          {badge}
        </div>
      )}
      {children}
    </section>
  );
}

interface SpeechBubbleProps {
  children: React.ReactNode;
  variant?: 'speech' | 'shout' | 'thought';
  className?: string;
}

export function SpeechBubble({ children, variant = 'speech', className = '' }: SpeechBubbleProps) {
  let styleClasses = 'bg-white border-2 border-slate-900 rounded-2xl p-3 sm:p-4 text-xs sm:text-sm font-bold text-slate-900 relative shadow-[3px_3px_0px_#0f172a] break-words overflow-hidden';
  
  if (variant === 'shout') {
    styleClasses = 'bg-yellow-100 border-3 border-slate-900 rounded-xl p-3 sm:p-4 text-xs sm:text-sm font-black text-slate-950 relative shadow-[4px_4px_0px_#0f172a] break-words overflow-hidden';
  } else if (variant === 'thought') {
    styleClasses = 'bg-sky-50 border-2 border-dashed border-slate-900 rounded-3xl p-3 sm:p-4 text-xs sm:text-sm font-semibold text-slate-800 relative break-words overflow-hidden';
  }

  return (
    <div className={`${styleClasses} ${className}`} aria-live="polite">
      <div className="relative z-10 break-words overflow-hidden">
        {children}
      </div>
    </div>
  );
}

interface SfxBadgeProps {
  text: string;
  className?: string;
}

export function SfxBadge({ text, className = '' }: SfxBadgeProps) {
  return (
    <span 
      aria-hidden="true"
      className={`inline-block font-black select-none text-pink-600 drop-shadow-[2px_2px_0px_#000] tracking-widest transform -rotate-6 hover:scale-110 transition-transform ${className}`}
    >
      {text}
    </span>
  );
}
