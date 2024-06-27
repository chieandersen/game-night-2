import { useEffect, useState } from 'react';
import { useReferencePanel } from '~/provider/ReferencePanelProvider';
import { GAMESType } from '~/routes/library/games';
type GameInfoProps = { data: { libraryData: GAMESType[] } };

export default function GameInfo({ data }: GameInfoProps) {
  const { referenceId } = useReferencePanel();
  const [currentData, setCurrentData] = useState<GAMESType | null>(null);

  useEffect(() => {
    if (!data) {
      return;
    }
    const gameData = data.libraryData;
    setCurrentData(gameData.filter((game) => game.id === referenceId)[0]);
  }, [data, referenceId]);

  return <div>{currentData?.title}</div>;
}
