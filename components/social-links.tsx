import {
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  FlaskConical,
  ExternalLink,
  FileText,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'graduation-cap': GraduationCap,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  'flask-conical': FlaskConical,
};

export function SocialLinks({
  links,
  className,
  size = 'default',
}: {
  links: { label: string; href: string; icon: string }[];
  className?: string;
  size?: 'sm' | 'default';
}) {
  return (
    <div className={`flex items-center gap-1.5 ${className ?? ''}`}>
      {links.map((link) => {
        const Icon = iconMap[link.icon] ?? ExternalLink;
        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
            className={`inline-flex items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              size === 'sm' ? 'h-8 w-8' : 'h-9 w-9'
            }`}
          >
            <Icon className={size === 'sm' ? 'h-4 w-4' : 'h-[18px] w-[18px]'} />
          </a>
        );
      })}
    </div>
  );
}

export { FileText, ExternalLink };
