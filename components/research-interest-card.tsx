import { Eye, Activity, Languages, Layers, Brain, Cpu, type LucideIcon } from 'lucide-react';
import { researchInterests } from '@/lib/data/research';

const iconMap: Record<string, LucideIcon> = {
  eye: Eye,
  activity: Activity,
  languages: Languages,
  layers: Layers,
  brain: Brain,
  cpu: Cpu,
};

export function ResearchInterestCard({
  interest,
}: {
  interest: (typeof researchInterests)[number];
}) {
  const Icon = iconMap[interest.icon] ?? Brain;
  return (
    <div className="group rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-border hover:shadow-sm sm:p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-105">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-serif text-[15.5px] font-semibold tracking-tight text-foreground">
        {interest.title}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
        {interest.description}
      </p>
    </div>
  );
}
