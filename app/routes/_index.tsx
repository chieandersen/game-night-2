import { type MetaFunction } from '@remix-run/node';

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
  return <div>I am Index</div>;
}
