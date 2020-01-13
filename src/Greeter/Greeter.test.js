const Greeter = require('./Greeter');

describe('Greeter', () => {
  let greeter;
  const noonTime = new Date('2019-12-25T13:00:00');
  const morningTime = new Date('2019-12-25T06:00:00');

  beforeEach(() => {
    global.Date = jest.fn(() => noonTime);
    greeter = new Greeter();
  });
  afterEach(() => {
    global.Date.mockRestore()
  });

  it('says Hello and name', () => {
    expect(greeter.greet('Daniel')).toEqual('Hello Daniel!');
    expect(greeter.greet('Taka')).toEqual('Hello Taka!');
  });

  it('trims the input', () => {
    expect(greeter.greet('   Daniel ')).toEqual('Hello Daniel!');
    expect(greeter.greet('　マレック')).toEqual('Hello マレック!');
  });

  it('capitalizes the first letter of the name', () => {
    expect(greeter.greet('daNiel')).toEqual('Hello DaNiel!');
    expect(greeter.greet('d')).toEqual('Hello D!');
  });

  it('Good morning <name> when the time is 06:00-12:00', () => {
    global.Date = jest.fn(() => morningTime);
    expect(greeter.greet('daniel')).toEqual('Good morning Daniel!');
  });
});