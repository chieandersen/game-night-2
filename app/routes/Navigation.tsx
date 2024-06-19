import { useReferencePanel } from '~/provider/ReferencePanelProvider';

export default function Navigation() {
  const { navRef } = useReferencePanel();
  return (
    <nav ref={navRef} className="w-72 bg-primary p-4">
      <h1 className="text-lg font-black">Game Night</h1>
    </nav>
  );
}
