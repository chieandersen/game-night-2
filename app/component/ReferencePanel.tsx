import { useReferencePanel } from '~/provider/ReferencePanelProvider';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useFetcher } from '@remix-run/react';
import GameInfo from './referencePanel/GameInfo';
import { useEffect } from 'react';
import { GAMESType } from '~/routes/library/games';
import GameEditor from './referencePanel/GameEditor';

export default function ReferencePanel() {
  const {
    referenceType,
    referenceUrl,
    closeReference,
    showPanel,

    resizerRef,
    setIsResizing,
  } = useReferencePanel();
  const fetcher = useFetcher();
  const referenceParam = referenceUrl || null;

  useEffect(() => {
    if (!referenceParam) {
      return;
    }
    fetcher.load(referenceParam);
    //  dependency doesn't need fetcher
  }, [referenceParam]); // eslint-disable-line

  function handleOnClick() {
    closeReference();

    return;
  }

  return (
    <>
      {showPanel ? (
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
            <button className="h-fit w-fit rounded p-1" onClick={handleOnClick}>
              <XMarkIcon className="w-6" />
            </button>
            {referenceType === 'game' && (
              <GameInfo data={fetcher.data as { libraryData: GAMESType[] }} />
            )}
            {referenceType === 'add-new-game' && <GameEditor />}
          </div>
        </>
      ) : null}
    </>
  );
}
