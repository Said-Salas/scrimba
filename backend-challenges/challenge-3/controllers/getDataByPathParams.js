import { startups } from '../data/data.js'
import { boolMatch } from '../utils/boolMatch.js' 
import { equalStrings } from '../utils/equalStrings.js'

export const getDataByPathParams = (req, res) => {
    let results = startups

    const { field, term } = req.params
    results = results.filter(data => {
        return field === 'is_seeking_funding' || field === 'has_mvp' ? boolMatch(data[field], term) : equalStrings(data[field], term)
    })
    
    res.json(results)
}