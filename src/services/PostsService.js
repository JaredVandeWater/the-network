import { AppState } from '../AppState'
import { api } from './AxiosService'

class PostsService {
  async getAll() {
    const res = await api.get('api/posts')
    AppState.posts = res.data.posts
    AppState.newer = res.data.newer
    AppState.older = res.data.older
  }

  async getNewerPosts() {
    const res = await api.get(AppState.newer)
    AppState.posts = res.data.posts
    AppState.newer = res.data.newer
    AppState.older = res.data.older
  }

  async getOlderPosts() {
    const res = await api.get(AppState.older)
    AppState.posts = res.data.posts
    AppState.newer = res.data.newer
    AppState.older = res.data.older
  }

  async getByPostId(id) {
    const res = await api.get('api/posts/' + id)
    AppState.activeProject = res.data
  }

  async remove(id) {
    await api.delete('api/posts/' + id)
    this.getAll()
  }

  async likePost(id) {
    await api.post(`api/posts/${id}/like`)
    this.getAll()
  }

  async create(data) {
    await api.post('api/posts', data)
    this.getAll()
  }
}

export const postsService = new PostsService()
