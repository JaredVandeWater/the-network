import { AppState } from '../AppState'
import router from '../router'
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
    const res = await api.post('api/projects', data)
    router.push({ name: 'ProjectDetails', params: { id: res.data.id } })
    // this.getAll()
  }
}

export const postsService = new PostsService()
