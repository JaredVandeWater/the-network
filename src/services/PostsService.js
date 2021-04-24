import { AppState } from '../AppState'
import { api } from './AxiosService'

class PostsService {
  async getAll() {
    const res = await api.get('api/posts')
    AppState.posts = res.data.posts
  }

  async getByPostId(id) {
    const res = await api.get('api/posts/' + id)
    AppState.activeProject = res.data
  }

  async getMyProjects() {
    const res = await api.get(`api/projects?creatorId=${AppState.account.id}`)
    AppState.myProjects = res.data
  }

  async getByProfileId(id) {
    const res = await api.get(`api/projects?creatorId=${id}`)
    AppState.activeProjects = res.data
  }

  async create(data) {
    await api.post('api/posts', data)
    this.getAll()
  }
}

export const postsService = new PostsService()
