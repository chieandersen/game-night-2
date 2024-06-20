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
      className="bg-brand-800 text-brand-50 h-fit w-fit rounded-lg px-3 py-2"
      onClick={() => setIsReferencePanelOpen(true)}
    >
      {icon !== '' && <svg>svg</svg>}
      {children}
    </button>
  );
}
