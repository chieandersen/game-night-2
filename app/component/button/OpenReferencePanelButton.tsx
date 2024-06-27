import clsx from 'clsx';
import { ReactNode } from 'react';
import { useReferencePanel } from '~/provider/ReferencePanelProvider';

type OpenReferencePanelButtonType = {
  children: ReactNode;
  icon?: string;
  buttonClass: string;
  dataId: string;
};

export default function OpenReferencePanelButton({
  children,
  icon = '',
  buttonClass,
  dataId,
}: OpenReferencePanelButtonType) {
  const { openReference } = useReferencePanel();

  function handleOnClick() {
    openReference(`/library?id=${dataId}`, dataId, 'game');
    return;
  }

  return (
    <button className={clsx(buttonClass)} onClick={handleOnClick}>
      {icon !== '' && <svg>svg</svg>}
      {children}
    </button>
  );
}
