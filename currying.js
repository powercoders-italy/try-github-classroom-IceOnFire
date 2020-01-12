const sayHello = (who = 'world') => `Hello ${who}!`
const sayGoodbye = who => `Goodbye ${who}...`

const simonSays = (greeting, who) => `Simon says: "${greeting(who)}"`
const simonSaysCurried = greeting => who => `Simon says: "${greeting(who)}"`

module.exports = { sayHello, sayGoodbye, simonSays, simonSaysCurried }
