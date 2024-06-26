import clsx from 'clsx';
import { GAMES } from './games';
import OpenReferencePanelButton from '~/component/button/OpenReferencePanelButton';
// import { ActionFunctionArgs } from '@remix-run/node';

// export async function action({ request }: ActionFunctionArgs) {
//   const data = await request.formData();
//   return;
// }

export default function LibraryIndex() {
  const games = GAMES;

  return (
    <div>
      <div className="w-full border-b-2 border-neutral-200">
        <h1 className="text-3xl font-extrabold">Library</h1>
      </div>
      <div className="flex max-w-5xl flex-wrap justify-around py-6">
        {games.length > 0 ? (
          games.map(({ id, title, image }) => {
            return (
              <OpenReferencePanelButton
                key={id}
                buttonClass="mr-auto flex w-fit flex-col items-center p-3"
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
      </div>
    </div>
  );
}
