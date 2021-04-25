
import { api } from './AxiosService'

class ProfilesService {
  async getAllByOneProfile(id) {
    const res = await api.get(`api/profiles/${id}/posts`)
    return res.data.posts
  }

  async getProfileById(id) {
    const res = await api.get(`api/profiles/${id}`)
    return res.data
  }
}

export const profilesService = new ProfilesService()
