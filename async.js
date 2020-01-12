// NOTE: this code is for reference only, it's not meant to work

const $ = require('jquery')

const URL = 'https://swapi.co/api/people'

function hadoukenCode() {
  $.get(
    URL,
    function(response1) {
      $.get(response1.results[0].url, function(response2) {
        setTimeout(function() {
          console.log(42)
        }, 1000)
      })
    },
    function(err) {
      console.error(err)
    },
  )
}

function promises() {
  $.get(URL)
    .then(response1 => $.get(response1.results[0].url))
    .then(
      response2 => new Promise(resolve => setTimeout(() => resolve(42), 1000)),
    )
    .then(console.log)
    .catch(console.error)
    .finally(() => console.log('Finally!'))
}

function parallelPromises() {
  const [response1, response2] = Promise.all([
    $.get(`${URL}/1`),
    $.get(`${URL}/2`),
  ])
  return { response1, response2 }
}

async function asyncFunction() {
  try {
    const response1 = await $.get(URL)
    const response2 = await $.get(response1.results[0].url)
    const num = await new Promise(resolve =>
      setTimeout(() => resolve(42), 1000),
    )
    return num
  } catch (err) {
    console.error(err)
  } finally {
    console.log('Finally!')
  }
}

// NOTE: async functions return promises
// asyncFunction().then(num => console.log(num))

async function parallelAsync() {
  const [response1, response2] = await Promise.all([`${URL}/1`, `${URL}/2`])
  return { response1, response2 }
}
