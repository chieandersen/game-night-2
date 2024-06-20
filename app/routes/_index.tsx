import type { MetaFunction } from '@remix-run/node';
import clsx from 'clsx';
import { useReferencePanel } from '~/provider/ReferencePanelProvider';
import Navigation from './Navigation';
import ReferencePanel from '~/component/ReferencePanel';
import OpenReferencePanelButton from '~/component/button/OpenReferencePanelButton';

export const meta: MetaFunction = () => {
  return [
    { title: 'Game Night' },
    {
      name: 'One Stop for all things Game Night',
      content: 'Game Night',
    },
  ];
};

export default function Index() {
  const {
    isReferencePanelOpen,
    mainContentWidth,
    containerRef,
    mainContentRef,
  } = useReferencePanel();

  return (
    <article className="text-brand-900 flex h-full overflow-hidden font-josefin">
      <Navigation />
      <div className="flex flex-1" ref={containerRef}>
        <article
          className={clsx(
            'flex flex-col justify-items-center gap-4 p-4'
          )}
          style={{
            width: isReferencePanelOpen ? mainContentWidth : '100%',
          }}
          ref={mainContentRef}
          id="MAIN-CONTENT_CONTAINER"
        >
          {mainContentWidth}
          <OpenReferencePanelButton>
            Open in reference panel
          </OpenReferencePanelButton>
        </article>
        {isReferencePanelOpen && <ReferencePanel />}
      </div>
    </article>
  );
}
