import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent',
            align === 'center' && 'mx-auto'
          )}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
