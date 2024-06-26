import {
  Dispatch,
  MutableRefObject,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

type ReferencePanelContextType = {
  reference: ReferenceType;
  setReference: Dispatch<SetStateAction<ReferenceType>>;
  dataId: string | null;
  setdataId: Dispatch<SetStateAction<string | null>>;
  setIsResizing: Dispatch<SetStateAction<boolean>>;
  mainContentWidth: string;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  navRef: MutableRefObject<HTMLDivElement | null>;
  mainContentRef: MutableRefObject<HTMLDivElement | null>;
  resizerRef: MutableRefObject<HTMLButtonElement | null>;
} | null;

type ReferenceType = 'gameInfo' | null;

export const ReferencePanelContext =
  createContext<ReferencePanelContextType>(null);

export function ReferencePanelProvider({ children }: PropsWithChildren) {
  const [reference, setReference] = useState<ReferenceType>('gameInfo');
  const [dataId, setdataId] = useState<string | null>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [mainContentWidth, setMainContentWidth] = useState<string>('60%');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const mainContentRef = useRef<HTMLDivElement | null>(null);
  const resizerRef = useRef<HTMLButtonElement | null>(null);

  const referencePanelValue: ReferencePanelContextType = {
    reference,
    setReference,
    dataId,
    setdataId,
    setIsResizing,
    mainContentWidth,
    containerRef,
    navRef,
    mainContentRef,
    resizerRef,
  };

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isResizing && containerRef.current && navRef.current) {
        const navWidth = navRef.current.clientWidth;
        const containerWidth = containerRef.current.clientWidth;

        const defaultWidth = (event.clientX - navWidth) / containerWidth; // width in %
        const maxWidth = 0.7; // 80%
        const minWidth = 0.3; // 20%

        const newWidth = () => {
          // return min, max, or default
          if (defaultWidth < minWidth) {
            return minWidth * 100;
          } else if (defaultWidth > maxWidth) {
            return maxWidth * 100;
          }
          return Math.round(defaultWidth * 100);
        };

        setMainContentWidth(`${newWidth()}%`);
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener('mouseup', () => setIsResizing(false));
    return () => {
      window.addEventListener('mouseup', () => setIsResizing(false));
    };
  }, []);

  useEffect(() => {
    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener('mousemove', handleMouseMove);
      return () => {
        containerElement.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [handleMouseMove]);

  return (
    <ReferencePanelContext.Provider value={referencePanelValue}>
      {children}
    </ReferencePanelContext.Provider>
  );
}

export function useReferencePanel() {
  const referencePanelContext = useContext(ReferencePanelContext);

  if (!referencePanelContext) {
    throw new Error(
      'useReferencePanel has to be used within <ReferencePanelProvider>'
    );
  }
  return referencePanelContext;
}
