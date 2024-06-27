import { useId, useState } from 'react';
import { useReferencePanel } from '~/provider/ReferencePanelProvider';
import {
  BookOpenIcon,
  QueueListIcon,
  XCircleIcon,
  ChartPieIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Link, useLocation } from '@remix-run/react';

export default function Navigation() {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const { navRef } = useReferencePanel();
  const id = useId();
  const currentNav = useLocation().pathname.split('/')[1];

  return (
    <nav
      ref={navRef}
      className={clsx(
        'flex shrink-0 flex-col border-r-4 border-brand-300 bg-brand-100',
        isNavExpanded ? 'w-44 p-4' : 'w-14 items-center py-4'
      )}
    >
      <Link className="text-lg font-black" to="/">
        {isNavExpanded ? 'Game Night' : 'GN'}
      </Link>
      <ul className="mt-4 flex flex-col gap-2">
        {LINKS.map(({ slug, label, href, icon: Icon }, itemIndex) => {
          const layoutId = `${id}-${itemIndex}`;

          return (
            <li key={slug} className="font-light text-brand-700">
              <div key={layoutId} className="hovered-backdrop" />
              <button
                className={clsx(
                  'flex items-center',
                  isNavExpanded ? 'flex-row gap-3' : 'flex-col text-xs'
                )}
              >
                <Icon
                  className={clsx(
                    'size-6',
                    currentNav === slug && 'text-accent-600 fill-current'
                  )}
                />
                <Link
                  to={href}
                  className={clsx(
                    'pt-1',
                    currentNav === slug && 'text-accent-600 font-bold'
                  )}
                >
                  {label}
                </Link>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="h-full" />
      <button
        onClick={() => setIsNavExpanded(!isNavExpanded)}
        className="justify-self-end"
      >
        <XCircleIcon className="size-6" />
      </button>
    </nav>
  );
}

type LinkType = {
  slug: 'library' | 'history' | 'stats';
  label: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
};

const LINKS: LinkType[] = [
  {
    slug: 'library',
    label: 'Library',
    href: '/library',
    icon: BookOpenIcon,
  },
  {
    slug: 'history',
    label: 'History',
    href: '/history',
    icon: QueueListIcon,
  },
  {
    slug: 'stats',
    label: 'Stats',
    href: '/stats',
    icon: ChartPieIcon,
  },
] as const;
