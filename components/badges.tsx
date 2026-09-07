import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const statusStyles: Record<string, string> = {
  Accepted: 'border-accent/30 bg-accent/10 text-accent',
  'Oral Presentation': 'border-chart-3/30 bg-chart-3/10 text-chart-3',
  'Best Paper': 'border-chart-5/30 bg-chart-5/10 text-chart-5',
  Preprint: 'border-muted-foreground/30 bg-muted text-muted-foreground',
};

const venueTypeStyles: Record<string, string> = {
  Conference: 'border-border bg-muted/50 text-muted-foreground',
  Journal: 'border-border bg-muted/50 text-muted-foreground',
  Workshop: 'border-border bg-muted/50 text-muted-foreground',
  Preprint: 'border-border bg-muted/50 text-muted-foreground',
};

export function StatusBadge({ status }: { status?: string }) {
  if (!status) return null;
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium',
        statusStyles[status] ?? 'border-border bg-muted/50 text-muted-foreground'
      )}
    >
      {status}
    </span>
  );
}

export function VenueTypeBadge({ type }: { type: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium',
        venueTypeStyles[type] ?? venueTypeStyles.Preprint
      )}
    >
      {type}
    </span>
  );
}

export function ResearchTag({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-[12px] font-medium text-muted-foreground">
      {tag}
    </span>
  );
}
