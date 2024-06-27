import { Form } from '@remix-run/react';
import { useState } from 'react';
import { GAMESType } from '~/routes/library/games';
import { range } from '~/utility/range';

export default function GameEditor() {
  const [gameInfo, setGameInfo] = useState<GAMESType>({
    id: crypto.randomUUID(),
    title: '',
    expansions: { 'fun-time': true },
    rating: 0,
    length: 0,
    image: {
      src: '',
      alt: '',
    },
  });

  function handleChange<FieldType>(
    type: keyof typeof gameInfo,
    value: FieldType
  ) {
    let newGameInfo = { ...gameInfo };

    newGameInfo = {
      ...newGameInfo,
      [type]: value,
    };

    console.log('newGameInfo', newGameInfo);
    setGameInfo(newGameInfo);
  }

  return (
    <Form action="/library" method="POST" className="text-neutral-600">
      <div className="pb-3" id="title">
        <label htmlFor="title" className="pr-3 text-sm">
          Title:
        </label>
        <input
          id="title"
          type="text"
          className="w-full rounded border border-neutral-200"
          required={true}
          maxLength={22}
          value={gameInfo.title}
          onChange={(event) => {
            handleChange<typeof gameInfo.title>('title', event.target.value);
          }}
        />
      </div>
      <div className="pb-3">
        <label htmlFor="expansions" className="pr-3 text-sm">
          Expansions:
        </label>
        {/* add an expansion name, then select if you own it or not */}
        <input
          id="expansions"
          type="text"
          className="w-full rounded border border-neutral-200"
          required={true}
          maxLength={22}
          value={gameInfo.title}
          onChange={(event) => {
            handleChange<typeof gameInfo.title>('title', event.target.value);
          }}
        />
        {gameInfo.expansions &&
          range(0, Object.keys(gameInfo.expansions).length).map(
            (expansion, index) => {
              console.log('expansion', expansion);
              return <div key={index}>hello</div>;
            }
          )}
      </div>
      <div className="pb-3" id="rating">
        <label htmlFor="rating" className="pr-3 text-sm">
          Rating:
        </label>
        <section className="flex">
          {range(0, 5).map((index) => {
            return (
              <button
                type="button"
                key={index}
                className="w-7"
                onClick={() => {
                  const updateStarTo =
                    index + 1 === gameInfo.rating ? 0 : index + 1;
                  //
                  handleChange<typeof gameInfo.rating>('rating', updateStarTo);
                }}
              >
                {index + 1 <= gameInfo.rating ? '⭐️' : '・'}
              </button>
            );
          })}
        </section>
      </div>
    </Form>
  );
}
