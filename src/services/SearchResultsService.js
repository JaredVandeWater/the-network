import { AppState } from '../AppState'
import { api } from './AxiosService'

class SearchResultsService {
  async getAllByQuery(query) {
    const res = await api.get(`api/posts?query=${query}`)
    AppState.searchedPosts = res.data.posts
  }
}
export const searchResultsService = new SearchResultsService()
