import type { NextPage } from 'next';

import { Button } from '../src/components/Button';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Desing Page</h1>
      <Button theme='primary' onClick={() => console.log('hello')}>
        Hello
      </Button>
    </div>
  );
};

export default Home;
