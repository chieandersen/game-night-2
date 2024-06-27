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

type ReferenceType = 'game' | 'match' | 'add-new-game' | '';

type PanelStateType = {
  referenceUrl: string;
  referenceId: string | null;
  referenceType: ReferenceType;
};

type ReferencePanelContextType = {
  openReference: (
    url: string,
    referenceId: string,
    referenceType: ReferenceType
  ) => void;
  closeReference: () => void;
  referenceUrl: string | null;
  referenceId: string | null;
  referenceType?: ReferenceType;
  showPanel: boolean;

  setIsResizing: Dispatch<SetStateAction<boolean>>;
  mainContentWidth: string;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  navRef: MutableRefObject<HTMLDivElement | null>;
  mainContentRef: MutableRefObject<HTMLDivElement | null>;
  resizerRef: MutableRefObject<HTMLButtonElement | null>;
} | null;

export const ReferencePanelContext =
  createContext<ReferencePanelContextType>(null);

export function ReferencePanelProvider({ children }: PropsWithChildren) {
  const [panelState, setPanelState] = useState<PanelStateType>({
    referenceUrl: '',
    referenceId: null,
    referenceType: '',
  });

  const [isResizing, setIsResizing] = useState(false);
  const [mainContentWidth, setMainContentWidth] = useState<string>('60%');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const mainContentRef = useRef<HTMLDivElement | null>(null);
  const resizerRef = useRef<HTMLButtonElement | null>(null);

  function openReference(
    referenceUrl: string,
    referenceId: string | null,
    referenceType: ReferenceType
  ) {
    setPanelState({ referenceUrl, referenceId, referenceType });
  }

  function closeReference() {
    setPanelState({ referenceUrl: '', referenceId: null, referenceType: '' });
  }

  const showPanel = panelState.referenceUrl === '' ? false : true;

  const referencePanelValue: ReferencePanelContextType = {
    ...panelState,
    openReference,
    closeReference,
    showPanel,

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
