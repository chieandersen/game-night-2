import { useReferencePanel } from '~/provider/ReferencePanelProvider';

export default function ReferencePanel() {
  const { setIsReferencePanelOpen, resizerRef, setIsResizing } =
    useReferencePanel();

  return (
    <>
      <button
        className="flex items-center h-full w-2 bg-pink-950 cursor-ew-resize select-none touch-none"
        ref={resizerRef}
        onMouseDown={() => setIsResizing(true)}
      />
      <div
        className="flex justify-items-center flex-1 border-2"
        id="REFERENCE-PANEL-CONTAINER"
      >
        ref panel
        <button
          className="border bg-pink-50 h-fit p-3"
          onClick={() => setIsReferencePanelOpen(false)}
        >
          Close
        </button>
      </div>
    </>
  );
}
