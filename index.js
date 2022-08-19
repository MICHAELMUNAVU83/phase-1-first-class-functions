const spy = chai.spy();
function receivesAFunction(spy) {
  spy();
}

function returnsANamedFunction() {
  const add = (a, b) => a + b;
  return add;
}

function returnsAnAnonymousFunction() {
  return () => "I";
}