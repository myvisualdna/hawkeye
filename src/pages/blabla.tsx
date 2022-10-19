import React from 'react';

type Props = {};

const Blabla = (props: Props) => {
    //Average with single parameter
  const ratings: { food: number }[] = [
    { food: 3 },
    { food: 4 },
    { food: 5 },
    { food: 2 },
  ];
  let foodTotal = 0;
  const length = ratings.length;
  ratings.forEach(({ food }) => (foodTotal += food));
  console.log('FOOD', foodTotal / length);
  ///////////////////////////////
  //Average with more parameters
  const data: {name: string, gender: string, age: number }[] = [
    {name:'Sarah', gender:'female', age:25},
    {name:'Tom', gender:'male', age:18},
    {name:'Tim', gender:'male', age:65},
    {name:'Kim', gender:'female', age:58}
  ];
  
  const filteredData = data.filter(({ gender }) => gender == 'female'),
      avg = filteredData.reduce((r, c) => r + c.age, 0) / filteredData.length;
                   
  console.log(avg);
  return <div>Blabla</div>;
};

export default Blabla;
