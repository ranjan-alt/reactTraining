const Generator = () => {
  function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }

  const gen = simpleGenerator();

  console.log(gen.next());
  console.log(gen.next());
  console.log(gen.next());
  console.log(gen.next());
  return <></>;
};

export default Generator;
