const Reverso = require('../src/reverso.js')
const reverso = new Reverso()

reverso.getContext(
    'meet me half way',
    'english',
    'russian',
    (err, response) => {
        if (err) throw new Error(err.message)

        console.log(response)
    }
)

reverso.getSpellCheck('helo', 'english', (err, response) => {
    if (err) throw new Error(err.message)

    console.log(response)
})

reverso.getSynonyms('dzień dobry', 'polish', (err, response) => {
    if (err) throw new Error(err.message)

    console.log(response)
})

reverso.getTranslation(
    'how is going?',
    'english',
    'chinese',
    (err, response) => {
        if (err) throw new Error(err.message)

        console.log(response)
    }
)

const reversoInsecureHTTPParser = new Reverso({ insecureHTTPParser: true })
reversoInsecureHTTPParser.getContext(
    'see you later',
    'english',
    'dutch',
    (err, response) => {
        if (err) throw new Error(err.message)

        console.log(response)
    }
)
