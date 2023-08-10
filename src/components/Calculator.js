import React from 'react';
import Buttons from './Buttons';

function Calculator() {
  const Data = [
    {
      id: 1,
      title: 'AC',
    },
    {
      id: 2,
      title: '+/-',
    },
    {
      id: 3,
      title: '%',
    },
    {
      id: 4,
      title: '7',
    },
    {
      id: 5,
      title: '8',
    },
    {
      id: 6,
      title: '9',
    },
    {
      id: 7,
      title: '4',
    },
    {
      id: 8,
      title: '5',
    },
    {
      id: 9,
      title: '6',
    },
    {
      id: 10,
      title: '1',
    },
    {
      id: 11,
      title: '2',
    },
    {
      id: 12,
      title: '3',
    },
    {
      id: 13,
      title: '0',
    },
    {
      id: 13,
      title: '.',
    },
  ];
  const Operators = [
    {
      id: 14,
      title: '÷',
    },
    {
      id: 15,
      title: '×',
    },
    {
      id: 16,
      title: '−',
    },
    {
      id: 17,
      title: '+',
    },
    {
      id: 18,
      title: '=',
    },
  ];
  return (
    <main className="calculator">
      <section className="digits">
        {Data.map(({ id, title }) => (
          <Buttons className="btns" key={id} title={title} />
        ))}
      </section>
      <section className="operators">
        {Operators.map(({ id, title }) => (
          <Buttons className="operatorBtns" key={id} title={title} />
        ))}
      </section>
    </main>
  );
}

export default Calculator;
