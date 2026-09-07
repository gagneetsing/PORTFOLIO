import Link from 'next/link';
import { ArrowRight, FileText, Code2, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/types';
import { ResearchTag } from '@/components/badges';

const statusColors: Record<string, string> = {
  Ongoing: 'border-accent/30 bg-accent/10 text-accent',
  'In Progress': 'border-chart-3/30 bg-chart-3/10 text-chart-3',
  Completed: 'border-muted-foreground/20 bg-muted text-muted-foreground',
};

export function ResearchProjectCard({
  project,
  showDetails = false,
}: {
  project: Project;
  showDetails?: boolean;
}) {
  return (
    <article className="group flex flex-col rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-border hover:shadow-sm sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-accent">
            {project.area}
          </span>
          <h3 className="mt-1.5 font-serif text-[17px] font-semibold leading-snug tracking-tight text-foreground sm:text-[18px]">
            {project.title}
          </h3>
        </div>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
            statusColors[project.status] ??
            'border-border bg-muted text-muted-foreground'
          }`}
        >
          {project.status}
        </span>
      </div>

      <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {project.institution && (
        <p className="mt-2 text-[12.5px] text-muted-foreground/80">
          {project.institution}
        </p>
      )}

      {showDetails && project.methodology && project.methodology.length > 0 && (
        <div className="mt-4">
          <h4 className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground/70">
            Methodology
          </h4>
          <ul className="mt-2 space-y-1.5">
            {project.methodology.map((m, i) => (
              <li
                key={i}
                className="flex gap-2 text-[13px] leading-relaxed text-muted-foreground"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      )}

      {showDetails && project.contributions && project.contributions.length > 0 && (
        <div className="mt-4">
          <h4 className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground/70">
            Key Contributions
          </h4>
          <ul className="mt-2 space-y-1.5">
            {project.contributions.map((c, i) => (
              <li
                key={i}
                className="flex gap-2 text-[13px] leading-relaxed text-muted-foreground"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}

      {showDetails && project.technologies && project.technologies.length > 0 && (
        <div className="mt-4">
          <h4 className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground/70">
            Technologies
          </h4>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <ResearchTag key={t} tag={t} />
            ))}
          </div>
        </div>
      )}

      {project.timeline && (
        <p className="mt-3 text-[12px] text-muted-foreground/70">
          {project.timeline}
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-3 pt-1 text-[13px]">
        {project.paperUrl && (
          <a
            href={project.paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-accent"
          >
            <FileText className="h-3.5 w-3.5" />
            Paper
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-accent"
          >
            <Code2 className="h-3.5 w-3.5" />
            Code
          </a>
        )}
        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-accent"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Project
          </a>
        )}
      </div>
    </article>
  );
}
