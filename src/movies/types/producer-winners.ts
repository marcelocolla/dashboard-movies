export type ProducerWinner = {
  producer: 'string'
  interval: number
  previousWin: number
  followingWin: number
}

export type ProducerInternalBetweenWinners = {
  min: ProducerWinner[]
  max: ProducerWinner[]
}
