export const getDataByQueryParams = (destinations, parameters) => {
    if (Object.keys(parameters).length > 0) {

        const searchParameters = Object.entries(parameters)
        // console.log(searchParameters[0][0])
        let i = 0
        let resultingArray = ''
        
        const filterData = (data, arrayParameters) => {
            // console.log(arrayParameters[i][1])
            if (i === arrayParameters.length){
                console.log(resultingArray, i)
                return resultingArray
            }

            if (arrayParameters[i][1] === 'true' || arrayParameters[i][1] === 'false') {
                arrayParameters[i][1] = arrayParameters[i][1] === 'true'
            }

            resultingArray = data.filter( object => {

                if (typeof object[arrayParameters[i][0]] === 'boolean') {
                    return object[arrayParameters[i][0]] === arrayParameters[i][1]
                }
                else {
                    // console.log(object[arrayParameters[i][0]])
                    return object[arrayParameters[i][0]].toLowerCase() === arrayParameters[i][1].toLowerCase()
                }
            })
            i++
            filterData(resultingArray, arrayParameters)
            return resultingArray
        }

        filterData(destinations, searchParameters)
        return resultingArray
    }
    else {
        return destinations
    }
}

// export const getDataByQueryParam = (arrayDestinations, queryParams) => {
//     if (Object.keys(queryParams).length > 0){

//       const arrayParameters = Object.entries(queryParams)
//       if (arrayParameters.length === 1){
//         const results = arrayDestinations.filter(object => {
//           return object[arrayParameters[0][0]].toLowerCase() === arrayParameters[0][1]
//         })
//         return results
//       }

//       else if (arrayParameters.length === 2){
//         const results = arrayDestinations.filter(object => {
//           return (object[arrayParameters[0][0]].toLowerCase() === arrayParameters[0][1]) 
//           && (object[arrayParameters[1][0]]
//             .toLowerCase() === arrayParameters[1][1])
//         })
//         return results
//       }

//       else if (arrayParameters.length === 3){
//         const results = arrayDestinations.filter(object => {
//           return (object[arrayParameters[0][0]].toLowerCase() === arrayParameters[0][1]) 
//           && (object[arrayParameters[1][0]]
//             .toLowerCase() === arrayParameters[1][1]) && (object[arrayParameters[2][0]] 
//                 === arrayParameters[2][1])
//         })
//         return results
//       }

//       return results
//     }

//     else {
//       return arrayDestinations
//     }
// }