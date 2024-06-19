import { useReferencePanel } from '~/provider/ReferencePanelProvider';

type OpenReferencePanelButtonType = {
  children: string;
  icon?: string;
};

export default function OpenReferencePanelButton({
  children,
  icon = '',
}: OpenReferencePanelButtonType) {
  const { setIsReferencePanelOpen } = useReferencePanel();

  return (
    <button
      className="border bg-pink-50 h-fit p-3 rounded"
      onClick={() => setIsReferencePanelOpen(true)}
    >
      {icon !== '' && <svg>svg</svg>}
      {children}
    </button>
  );
}
