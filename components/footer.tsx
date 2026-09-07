import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { socialLinks } from '@/lib/data/social';
import { SocialLinks } from '@/components/social-links';

const footerLinks = [
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'CV', href: '/cv' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="no-print mt-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <div className="font-serif text-lg font-semibold text-foreground">
              {siteConfig.name}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              {siteConfig.role}
            </div>
            <div className="mt-0.5 text-sm text-muted-foreground">
              {siteConfig.university}
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground/80">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/70">
              Quick Links
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/70">
              Connect
            </div>
            <SocialLinks links={socialLinks} size="sm" />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-6 text-[13px] text-muted-foreground/70 sm:flex-row">
          <span>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </span>
          <span>Built with care for research.</span>
        </div>
      </div>
    </footer>
  );
}
