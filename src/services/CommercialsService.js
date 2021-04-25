
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class CommercialsService {
  async getCommercials() {
    logger.log(AppState.currentAds)
    const res = await api.get('api/ads')
    AppState.currentAds = res.data
    logger.log(AppState.currentAds)
  }
}

export const commercialsService = new CommercialsService()
