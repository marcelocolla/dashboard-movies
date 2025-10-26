import { httpClient, type Response } from '~/app/core/services/http-client'
import type { ProducerInternalBetweenWinners } from '~/movies/types/producer-winners'

const API_URL = '/movies/maxMinWinIntervalForProducers'

export async function producersIntervalBetweenWinners() {
  const res = await httpClient.get<never, Response<ProducerInternalBetweenWinners>>(API_URL)

  return res.data
}
