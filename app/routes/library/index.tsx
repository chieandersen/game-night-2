import clsx from 'clsx';
import { GAMES } from './games';
import OpenReferencePanelButton from '~/component/button/OpenReferencePanelButton';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useReferencePanel } from '~/provider/ReferencePanelProvider';

export async function loader() {
  const libraryData = await GAMES;

  return json({ libraryData });
}
export const LibraryLoader = typeof loader;

export default function LibraryIndex() {
  const { libraryData } = useLoaderData<typeof loader>();
  const { openReference } = useReferencePanel();

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col py-6">
      <div className="w-full border-b-2 border-neutral-200">
        <h1 className="text-3xl font-extrabold">Library</h1>
      </div>
      <div className="flex flex-wrap py-6">
        {libraryData.length > 0 ? (
          libraryData.map(({ id, title, image }) => {
            return (
              <OpenReferencePanelButton
                key={id}
                buttonClass="flex w-fit flex-col items-center p-3"
                dataId={id}
              >
                <div
                  className={clsx(
                    'flex aspect-square w-44 items-center justify-center',
                    'overflow-y-hidden rounded border-2 border-neutral-600',
                    'hover:shadow-md hover:shadow-neutral-700',
                    'grayscale hover:grayscale-0',
                    'blur-[0.5px] hover:blur-none'
                  )}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover shadow-inner shadow-neutral-800"
                  />
                </div>
                <h2 className="mt-2 font-semibold"> = {title} = </h2>
              </OpenReferencePanelButton>
            );
          })
        ) : (
          <div>No Games to show</div>
        )}
        <button
          className="flex w-fit flex-col items-start p-3"
          onClick={() =>
            openReference('/library?editgame=true', '', 'add-new-game')
          }
        >
          <div
            className={clsx(
              'flex aspect-square w-44 items-center justify-center align-middle',
              'rounded border-2 border-neutral-600',
              'hover:shadow-md hover:shadow-neutral-700'
            )}
          >
            <PlusIcon className="-mt-1 h-fit w-5" />
            <p className="h-fit">Add Game</p>
          </div>
        </button>
      </div>
    </div>
  );
}
