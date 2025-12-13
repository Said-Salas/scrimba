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
    const usedTags = []
    for (const dino of communications) {
         mapDinos.set(dino.tag, dino.name)
    }
    for (const dino of mapDinos.keys()) {
        if (mapDinos.has(lotteryNumber - dino) && (mapDinos.has(lotteryNumber - dino) !== dino)) {
             if (!usedTags.some(subArr => subArr.includes(dino) || subArr.includes(lotteryNumber - dino))) {
                 winners.push([mapDinos.get(dino), mapDinos.get(lotteryNumber - dino)].toSorted())
                 usedTags.push([dino, lotteryNumber - dino])
             }
        }
    }
    if (winners.length > 0) {
        console.log(winners)
        return winners
    } return 'No winners'
  }
  

export const tagSumLotteryBetter = (communications, lotteryNumber) => {
  const mapDinos = new Map()
  const winners = []
  for (let i = 0; i < communications.length; i++) {
    const difference = lotteryNumber - communications[i].tag
    if (mapDinos.has(difference)) {
        winners.push([mapDinos.get(difference), communications[i].name].toSorted())
    } else {
        mapDinos.set(communications[i].tag, communications[i].name)
    }
  }
  if (winners.length > 0) {
    console.log(winners)
      return winners
  } return "No winners"
}

tagSumLottery(communications, 50)
tagSumLotteryBetter(communications, 50)


