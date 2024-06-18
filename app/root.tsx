import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
// import "./tailwind.css";
import tailwindStyleSheet from "~/tailwind.css?url";

export const links: LinksFunction = () => {
  return [
    { rel: "preload", href: tailwindStyleSheet, as: "style" },
    // cssBundleHref ? { rel: "preload", href: cssBundleHref, as: "style" } : null,
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "stylesheet preconnect crossorigin",
      href: "https://fonts.gstatic.com",
      as: "style",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      as: "style",
    },
    // cssBundleHref ? { rel: "stylesheet", href: cssBundleHref } : null,
    { rel: "stylesheet", href: tailwindStyleSheet },
  ].filter(Boolean);
};


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex font-josefin flex-col w-72 h-svh overflow-hidden bg-pink-300">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
