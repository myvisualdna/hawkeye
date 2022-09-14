import type { NextPage } from 'next';
import Container  from 'src/components/Navigation/navContainer';
import { trpc } from '../utils/trpc';
import Homepage from './Homepage';


const Home: NextPage = () => {
  // const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

  return (
    <>
      <Container>
        <Homepage />
      </Container>
    </>
  );
};


export default Home;
