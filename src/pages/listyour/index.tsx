import React from 'react';
import ListYourComponents from 'src/components/ListYourComponents';
import Container from 'src/components/Navigation/navContainer';

type Props = {};

const ListYour = (props: Props) => {
  return (
    <div>
      <Container>
        List your
        <div className="border-4 flex justify-center bg-gray-50 p-8">
          <ListYourComponents />
        </div>
      </Container>
    </div>
  );
};

export default ListYour;
