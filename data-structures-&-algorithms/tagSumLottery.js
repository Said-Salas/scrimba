const communications = [
    { tag: 10, name: "Tim the T-Rex" },
    { tag: 26, name: "Vince the Veloci" },
    { tag: 40, name: "Sue the Bellu" },
    { tag: 47, name: "Dean the Edmon" },
    { tag: 15, name: "Sam the Seismo" },
    { tag: 24, name: "Karen the Cryol" }
  ]

export const tagSumLottery = (communications, lotteryNumber) => {
  const mapDinos = new Map()
  const winners = []
  for (const dino of communications) {
       mapDinos.set(dino.tag, dino.name)
  }
  for (const dino of mapDinos.keys()) {
      if (mapDinos.has(lotteryNumber - dino) && (mapDinos.has(lotteryNumber - dino) !== dino)) {
          if (!winners.includes([mapDinos.get(dino), mapDinos.get(lotteryNumber - dino)].toSorted())) {
               winners.push([mapDinos.get(dino), mapDinos.get(lotteryNumber - dino)].toSorted())
          }
      }
  }
  if (winners.length > 0) {
      console.log(winners)
      return winners
  } return 'No winners'
}

tagSumLottery(communications, 50)

// export const tagSumLottery = (communications, lotteryNumber) => {
//     const winners = []
//     const mapDinos = new Map()
//     for (const dino of communications) {
//         mapDinos.set(dino.tag, dino.name)
//     }
//     for (const dino of communications) {
//         for (const tag of mapDinos.keys()) {
//             if (dino.tag != tag) {
//                 if (dino.tag + tag === lotteryNumber) {
//                     winners.push([dino.name, mapDinos.get(tag)].toSorted())
//                 }
//             }
//         }
//     }

//     if (winners.length > 0) {
//       console.log(winners)
//        return winners
//     }
//     return 'No winners'
// }



// export function tagSumLottery(communications, lotteryNumber) {
//     const winners = []
//     for (let i = 0; i < communications.length; i++) {
//       for (let j = i + 1; j < communications.length; j++) {
//         if (communications[i].tag + communications[j].tag === lotteryNumber) {
//           winners.push([communications[i].name, communications[j].name].toSorted())
//         }
//       }
//     }
//     if (winners.length > 0) {
//       return winners
//     }
//     return "No winners"
// }

