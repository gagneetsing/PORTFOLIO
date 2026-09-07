import type { ExperienceEntry, EducationEntry } from '@/lib/types';
import { cn } from '@/lib/utils';

export function ExperienceTimeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[11px]" />
      <div className="space-y-8">
        {entries.map((entry) => (
          <div key={entry.id} className="relative pl-7 sm:pl-12">
            <div className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-accent bg-background sm:h-[23px] sm:w-[23px]">
              {entry.current && (
                <div className="h-1.5 w-1.5 rounded-full bg-accent sm:h-2 sm:w-2" />
              )}
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-border hover:shadow-sm sm:p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-serif text-[16px] font-semibold tracking-tight text-foreground">
                  {entry.position}
                </h3>
                <span className="text-[12.5px] font-medium text-muted-foreground">
                  {entry.duration}
                </span>
              </div>
              <div className="mt-0.5 text-[13.5px] font-medium text-accent">
                {entry.institution}
              </div>
              <div className="text-[12.5px] text-muted-foreground">
                {entry.location}
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                {entry.summary}
              </p>
              {entry.projects && entry.projects.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {entry.projects.map((p) => (
                    <span
                      key={p}
                      className="rounded-md bg-muted px-2 py-0.5 text-[12px] text-muted-foreground"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EducationCard({ entry }: { entry: EducationEntry }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-border hover:shadow-sm sm:p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-serif text-[16px] font-semibold tracking-tight text-foreground">
          {entry.degree}
        </h3>
        <span className="text-[12.5px] font-medium text-muted-foreground">
          {entry.duration}
        </span>
      </div>
      <div className="mt-0.5 text-[13.5px] font-medium text-accent">
        {entry.institution}
      </div>
      {entry.location && (
        <div className="text-[12.5px] text-muted-foreground">
          {entry.location}
        </div>
      )}
      {entry.details && (
        <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
          {entry.details}
        </p>
      )}
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1.5">
        {entry.gpa && (
          <div className="text-[13px]">
            <span className="text-muted-foreground">CGPA: </span>
            <span className="font-medium text-foreground">{entry.gpa}</span>
          </div>
        )}
        {entry.rank && (
          <div className="text-[13px]">
            <span className="text-muted-foreground">Rank: </span>
            <span className="font-medium text-foreground">{entry.rank}</span>
          </div>
        )}
      </div>
      {entry.thesis && (
        <div className="mt-3 rounded-lg border border-border/40 bg-muted/30 p-3">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
            Thesis
          </div>
          <p className="mt-1 font-serif text-[14px] italic leading-snug text-foreground">
            &ldquo;{entry.thesis}&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}

export function AwardCard({ award }: { award: { id: string; title: string; description: string; date: string; category: string } }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-4 transition-all hover:border-border hover:shadow-sm sm:p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      </div>
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-[14.5px] font-semibold text-foreground">
            {award.title}
          </h3>
          <span className="shrink-0 text-[12px] text-muted-foreground">
            {award.date}
          </span>
        </div>
        <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
          {award.description}
        </p>
        <span className="mt-2 inline-block rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
          {award.category}
        </span>
      </div>
    </div>
  );
}

export function TalkCard({ talk }: { talk: { id: string; title: string; event: string; location: string; date: string; slidesUrl?: string; videoUrl?: string; paperUrl?: string } }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-border hover:shadow-sm sm:p-6">
      <h3 className="font-serif text-[15.5px] font-semibold leading-snug tracking-tight text-foreground">
        {talk.title}
      </h3>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-muted-foreground">
        <span className="font-medium text-accent">{talk.event}</span>
        <span>{talk.location}</span>
        <span>{talk.date}</span>
      </div>
      {(talk.slidesUrl || talk.videoUrl || talk.paperUrl) && (
        <div className="mt-3 flex flex-wrap gap-3 text-[12.5px]">
          {talk.slidesUrl && (
            <a href={talk.slidesUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent">
              Slides
            </a>
          )}
          {talk.videoUrl && (
            <a href={talk.videoUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent">
              Video
            </a>
          )}
          {talk.paperUrl && (
            <a href={talk.paperUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-accent">
              Paper
            </a>
          )}
        </div>
      )}
    </div>
  );
}
