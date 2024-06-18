import type { MetaFunction } from "@remix-run/node";
import clsx from "clsx";
import {
  MouseEvent,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Game Night" },
    { name: "One Stop for all things Game Night", content: "Game Night" },
  ];
};

export default function Index() {
  const [isResizing, setIsResizing] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [mainContentWidth, setMainContentWidth] = useState<string>("30%");
  const [navState, setNavState] = useState<"minimized" | "expanded">(
    "expanded"
  );
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const mainContentRef = useRef<HTMLDivElement | null>(null);
  const resizerRef = useRef<HTMLButtonElement | null>(null);
  const referenceContentRef = useRef<HTMLDivElement | null>(null);

  // the new width will be the
  // (xPosition - navWidth)

  const handleMouseMove = useCallback(
    (event) => {
      if (isResizing) {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });

        // w-72 is 288px
        const navWidth = navRef.current
          ? navRef.current.clientWidth
          : navState === "expanded"
          ? 288
          : 50;

        // set min max width
        const newWidth = () => {
          const containerWidth =
            containerRef.current && containerRef.current.clientWidth;
          const defaultWidth = (event.clientX - navWidth) / containerWidth;
          const maxWidth = 80 / 100;
          const minWidth = 20 / 100;

          // if default < containerWidth*minWidth = return containerWidth*minWidth
          if (containerWidth && defaultWidth < containerWidth * minWidth) {
            return containerWidth * minWidth;
          } else if (
            containerWidth &&
            defaultWidth > containerWidth * maxWidth
          ) {
            return containerWidth * maxWidth;
          }
          return defaultWidth;
        };
        setMainContentWidth(`${Math.round(newWidth())}px`);
      }
    },
    [isResizing, navState]
  );

  useEffect(() => {
    window.addEventListener("mouseup", () => setIsResizing(false));
    return () => {
      window.addEventListener("mouseup", () => setIsResizing(false));
    };
  }, []);

  useEffect(() => {
    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener("mousemove", handleMouseMove);
      return () => {
        containerElement.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [handleMouseMove]);

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
        <div
          className="flex justify-items-center flex-1 border-2"
          ref={referenceContentRef}
        >
          ref panel
        </div>
      </section>
    </article>
  );
}
