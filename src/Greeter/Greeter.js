function _capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
}

class Greeter {
  constructor() {
  }

  greet(name) {
    const trimmedName = name.trim();
    const capitalizedName = _capitalize(trimmedName);
    const hours = new Date().getHours();
    const greetMessage = hours >= 6 && hours < 12 ? 'Good morning' : 'Hello';
    return `${greetMessage} ${capitalizedName}!`;
  }
}

module.exports = Greeter;

