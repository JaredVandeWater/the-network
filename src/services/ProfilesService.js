
import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

class ProfilesService {
  async getAllByOneProfile(id) {
    const res = await api.get(`api/profiles/${id}/posts`)
    AppState.currentProfilePosts = res.data.posts
    AppState.newer = res.data.newer
    AppState.older = res.data.older
  }

  async getProfileById(id) {
    const res = await api.get(`api/profiles/${id}`)
    AppState.currentProfile = res.data
  }

  async getNewerPosts() {
    logger.log(AppState.newer)
    const res = await api.get(AppState.newer)
    AppState.currentProfilePosts = res.data.posts
    AppState.newer = res.data.newer
    AppState.older = res.data.older
    logger.log(AppState.newer)

    // https://bcw-sandbox.herokuapp.com/api/profiles/cb6aecad-060a-4a42-9ee6-2d1986239e56/posts?page=2
    // REVIEW this doesnt seem to work with the api
  }

  async getOlderPosts() {
    const res = await api.get(AppState.older)
    AppState.currentProfilePosts = res.data.posts
    AppState.newer = res.data.newer
    AppState.older = res.data.older
  }
}

export const profilesService = new ProfilesService()
