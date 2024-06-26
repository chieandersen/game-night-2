import { Form, Link } from '@remix-run/react';
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
  const { setReference, setdataId } = useReferencePanel();

  function handleOnClick() {
    setReference('gameInfo');
    setdataId(dataId);
  }

  return (
    <Form>
      <Link
        className={clsx(buttonClass)}
        onClick={handleOnClick}
        to={`?id=${dataId}`}
      >
        {icon !== '' && <svg>svg</svg>}
        {children}
      </Link>
    </Form>
  );
}
