import { useReferencePanel } from '~/provider/ReferencePanelProvider';
import GameInfo from './referencePanel/GameInfo';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from '@remix-run/react';

export default function ReferencePanel() {
  const { reference, resizerRef, setIsResizing } = useReferencePanel();
  const location = useLocation();

  return (
    <>
      <button
        className="flex h-full w-2 cursor-ew-resize touch-none select-none items-center justify-center bg-brand-200"
        ref={resizerRef}
        onMouseDown={() => setIsResizing(true)}
      >
        <div className="h-24 w-0.5 rounded bg-brand-50" />
      </button>
      <div
        className="flex flex-1 flex-col justify-items-center gap-4 p-4"
        id="REFERENCE-PANEL-CONTAINER"
      >
        <Link className="h-fit w-fit rounded p-1" to={`${location.pathname}`}>
          <XMarkIcon className="w-6" />
        </Link>
        {reference === 'gameInfo' && <GameInfo />}
      </div>
    </>
  );
}
