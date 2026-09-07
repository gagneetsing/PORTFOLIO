'use client';

import { useState } from 'react';
import { Copy, Check, FileText, Code2, ExternalLink } from 'lucide-react';
import type { Publication } from '@/lib/types';
import { StatusBadge, VenueTypeBadge, ResearchTag } from '@/components/badges';

function highlightAuthor(name: string, highlight?: string) {
  if (highlight && name === highlight) {
    return <strong className="font-semibold text-foreground">{name}</strong>;
  }
  return <span className="text-muted-foreground">{name}</span>;
}

export function PublicationCard({ pub }: { pub: Publication }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const copyBibTeX = () => {
    if (!pub.bibtex) return;
    navigator.clipboard.writeText(pub.bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="group relative rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-border hover:shadow-sm sm:p-6">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {pub.status && <StatusBadge status={pub.status} />}
          <VenueTypeBadge type={pub.venueType} />
          {pub.featured && (
            <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">
              Featured
            </span>
          )}
        </div>

        <h3 className="font-serif text-[17px] font-semibold leading-snug tracking-tight text-foreground sm:text-[18px]">
          {pub.title}
        </h3>

        <div className="text-[13.5px] leading-relaxed">
          {pub.authors.map((author, i) => (
            <span key={i}>
              {highlightAuthor(author, pub.highlightAuthor)}
              {i < pub.authors.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>

        <div className="text-[13px] text-muted-foreground">
          <span className="italic">{pub.venue}</span>
          <span className="mx-1.5">&middot;</span>
          <span>{pub.year}</span>
        </div>

        {pub.abstract && (
          <p
            className={`text-[13.5px] leading-relaxed text-muted-foreground ${
              expanded ? '' : 'line-clamp-2'
            }`}
          >
            {pub.abstract}
          </p>
        )}
        {pub.abstract && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="w-fit text-[12.5px] font-medium text-accent hover:underline"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}

        {pub.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {pub.tags.map((tag) => (
              <ResearchTag key={tag} tag={tag} />
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 pt-1 text-[13px]">
          {pub.paperUrl && (
            <a
              href={pub.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-accent"
            >
              <FileText className="h-3.5 w-3.5" />
              Paper
            </a>
          )}
          {pub.arxivUrl && (
            <a
              href={pub.arxivUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-accent"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              arXiv
            </a>
          )}
          {pub.codeUrl && (
            <a
              href={pub.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-accent"
            >
              <Code2 className="h-3.5 w-3.5" />
              Code
            </a>
          )}
          {pub.projectUrl && (
            <a
              href={pub.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-accent"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Project
            </a>
          )}
          {pub.bibtex && (
            <button
              onClick={copyBibTeX}
              className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-accent"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-accent" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
              {copied ? 'Copied!' : 'BibTeX'}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
