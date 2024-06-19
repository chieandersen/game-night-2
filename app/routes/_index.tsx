import type { MetaFunction } from "@remix-run/node";
import clsx from "clsx";
import { useReferencePanel } from "~/component/ReferencePanelProvider";

export const meta: MetaFunction = () => {
  return [
    { title: "Game Night" },
    { name: "One Stop for all things Game Night", content: "Game Night" },
  ];
};

export default function Index() {
  const value = useReferencePanel();
  const {
    setIsResizing,
    mainContentWidth,
    containerRef,
    navRef,
    mainContentRef,
    resizerRef,
  } = value;

  return (
    <article className="font-josefin flex">
      <nav className="w-72 bg-pink-200 p-4 h-svh" ref={navRef}>
        <h1 className="text-3xl">Game Night</h1>
        <ul className="list-disc mt-4 pl-6 space-y-2 w-72">
          <li>
            <a
              className="text-blue-700 underline visited:text-purple-900"
              target="_blank"
              href="https://remix.run/start/quickstart"
              rel="noreferrer"
            >
              5m Quick Start
            </a>
          </li>
          <li>
            <a
              className="text-blue-700 underline visited:text-purple-900"
              target="_blank"
              href="https://remix.run/start/tutorial"
              rel="noreferrer"
            >
              30m Tutorial
            </a>
          </li>
          <li>
            <a
              className="text-blue-700 underline visited:text-purple-900"
              target="_blank"
              href="https://remix.run/docs"
              rel="noreferrer"
            >
              Remix Docs
            </a>
          </li>
        </ul>
      </nav>
      <section className="flex w-full h-screen" ref={containerRef}>
        <div
          className={clsx("flex justify-items-center border")}
          style={{ width: mainContentWidth }}
          ref={mainContentRef}
        >
          {mainContentWidth}
        </div>
        <button
          className="flex items-center h-full w-2 bg-pink-950 cursor-ew-resize select-none touch-none"
          ref={resizerRef}
          onMouseDown={() => setIsResizing(true)}
        />
        <div className="flex justify-items-center flex-1 border-2">
          ref panel
        </div>
      </section>
    </article>
  );
}
