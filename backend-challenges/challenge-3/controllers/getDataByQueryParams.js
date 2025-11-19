import { startups } from '../data/data.js'
import { boolMatch } from '../utils/boolMatch.js' 
import { equalStrings } from '../utils/equalStrings.js'

export const getDataByQueryParams = (req, res) => {
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
}