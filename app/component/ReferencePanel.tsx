import { useReferencePanel } from '~/provider/ReferencePanelProvider';

export default function ReferencePanel() {
  const { setIsReferencePanelOpen, resizerRef, setIsResizing } =
    useReferencePanel();

  return (
    <>
      <button
        className="bg-brand-200 flex h-full w-2 cursor-ew-resize touch-none select-none items-center justify-center"
        ref={resizerRef}
        onMouseDown={() => setIsResizing(true)}
      >
        <div className="bg-brand-50 h-24 w-0.5 rounded" />
      </button>
      <div
        className="flex flex-1 flex-col justify-items-center gap-4 p-4"
        id="REFERENCE-PANEL-CONTAINER"
      >
        ref panel
        <button
          className="h-fit w-fit rounded p-3"
          onClick={() => setIsReferencePanelOpen(false)}
        >
          Close
        </button>
      </div>
    </>
  );
}
