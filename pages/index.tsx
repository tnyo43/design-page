import type { NextPage } from 'next';

import { Button } from '../src/components/Button';
import CreateIcon from '../src/assets/create.svg';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Desing Page</h1>
      <Button theme="primary" onClick={() => console.log('hello')}>
        Hello
      </Button>
      <Button theme="primary">
        <CreateIcon />
        Create
      </Button>
    </div>
  );
};

export default Home;
