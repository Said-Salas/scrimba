import express from 'express'
import { startups } from './data/data.js'

const PORT = 8000

const app = express()

const equalStrings = (a, b) => a?.toLowerCase() === b?.toLowerCase()
const isTrue = param => param?.toLowerCase() === 'true'
const boolMatch = (dataBool, queryBool) => dataBool === isTrue(queryBool)

app.get('/api', (req, res) => {
    let results = startups

    const { industry, country, continent, is_seeking_funding: funding, has_mvp } = req.query

    results = results.filter(data => [
        (!industry || equalStrings(data.industry, industry)),
        (!country || equalStrings(data.country, country)),
        (!continent || equalStrings(data.continent, continent)),
        (!funding || boolMatch(data.is_seeking_funding, funding)),
        (!has_mvp || boolMatch(data.has_mvp, has_mvp))
    ].every(Boolean))

    res.json(results)
})

app.get('/api/:field/:term', (req, res) => {
    let results = startups

    const { field, term } = req.params
    results = results.filter(data => {
        return field === 'is_seeking_funding' || field === 'has_mvp' ? boolMatch(data[field], term) : equalStrings(data[field], term)
    })
    
    res.json(results)
})

app.listen(PORT, () => console.log(`server connected on port ${PORT}`))
