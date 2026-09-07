import { cn } from '@/lib/utils';

export function PageContainer({
  children,
  className,
  wide = false,
}: {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div className={cn('mx-auto px-4 sm:px-6', wide ? 'max-w-6xl' : 'max-w-5xl', className)}>
      {children}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="pt-28 pb-10 sm:pt-32 sm:pb-12">
      {eyebrow && (
        <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </div>
      )}
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
