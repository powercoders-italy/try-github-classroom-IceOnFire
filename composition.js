const shout = str => str.toUpperCase()
const exclamation = excl => str => str + excl
const html = tag => str => `<${tag}>${str}</${tag}>`

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)

module.exports = { shout, exclamation, html, compose }
