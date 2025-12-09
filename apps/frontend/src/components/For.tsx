import type { JSX, Key } from 'react';

interface ChildrenProps<Value> {
  data: Value;
  index: number;
  uuid: string;
}

interface ForProps<Value> {
  children: (props: ChildrenProps<Value>) => React.ReactNode;
  map?: Value[];
}
const For = <Value,>({ map = [], children }: ForProps<Value>): JSX.Element => {
  return <>{map.map((data, index) => children({data, uuid : crypto.randomUUID() as string, index}))}</>;
};
export default For;
