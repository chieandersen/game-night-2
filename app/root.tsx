import { LinksFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
// import "./tailwind.css";
import tailwindStyleSheet from '~/tailwind.css?url';
import {
  ReferencePanelProvider,
  useReferencePanel,
} from './provider/ReferencePanelProvider';
import Navigation from './component/Navigation';
import OpenReferencePanelButton from './component/button/OpenReferencePanelButton';
import ReferencePanel from './component/ReferencePanel';
import clsx from 'clsx';

export const links: LinksFunction = () => {
  return [
    // { rel: "preload", href: tailwindStyleSheet, as: "style" },
    // cssBundleHref ? { rel: "preload", href: cssBundleHref, as: "style" } : null,
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'stylesheet preconnect crossorigin',
      href: 'https://fonts.gstatic.com',
      as: 'style',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      as: 'style',
    },
    // cssBundleHref ? { rel: "stylesheet", href: cssBundleHref } : null,
    {
      rel: 'stylesheet',
      href: tailwindStyleSheet,
    },
  ].filter(Boolean);
};

export function Layout({ children }: { children: React.ReactNode }) {
  console.log('Render Layout');
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Meta />
        <Links />
      </head>
      <body className="flex h-svh w-svw flex-row overflow-hidden bg-brand-50 font-josefin text-brand-900">
        <ReferencePanelProvider>
          <Navigation />
          {children}
          <ScrollRestoration />
        </ReferencePanelProvider>
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const {
    isReferencePanelOpen,
    mainContentWidth,
    containerRef,
    mainContentRef,
  } = useReferencePanel();

  return (
    <>
      <section className="flex h-full w-full overflow-hidden bg-neutral-600 font-josefin">
        <div className="flex flex-1" ref={containerRef}>
          <article
            className={clsx(
              'flex flex-col justify-items-center gap-4 p-4'
            )}
            style={{
              width: isReferencePanelOpen ? mainContentWidth : '100%',
            }}
            ref={mainContentRef}
            id="MAIN-CONTENT_CONTAINER"
          >
            {mainContentWidth}
            <Outlet />
            <OpenReferencePanelButton>
              Open in reference panel
            </OpenReferencePanelButton>
          </article>
          {isReferencePanelOpen && <ReferencePanel />}
        </div>
      </section>
    </>
  );
}
