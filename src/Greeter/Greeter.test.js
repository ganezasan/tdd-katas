const Greeter = require('./Greeter');

describe('Greeter', () => {
  let greeter;

  beforeEach(() => {
    greeter = new Greeter();
  });

  it('says Hello and name', () => {
    expect(greeter.greet('Daniel')).toEqual('Hello Daniel!');
  });
});