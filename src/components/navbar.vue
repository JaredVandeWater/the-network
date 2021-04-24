<template>
  <nav class="navbar-dark bg-dark container-fluid">
    <div class="row">
      <div class="col-4">
        <button
          class="btn btn-outline-primary text-uppercase"
          @click="login"
          v-if="!user.isAuthenticated"
        >
          Login
        </button>

        <div v-else>
          <div class="d-flex">
            <div>
              <!-- <img
                :src="user.picture"
                alt="user photo"
                height="40"
                class="rounded"
              /> -->
              <!-- <span class="mx-3">{{ user.name }}</span> -->
            </div>
            <div>
              <button
                class="btn btn-outline-primary text-uppercase"
                @click="logout"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <router-link :to="{ name: 'Home' }">
          <div class="d-flex justify-content-around">
            <img
              alt="logo"
              src="../assets/img/smily-web-icon.png"
              height="60"
            />
          </div>
        </router-link>
      </div>
      <div class="col-4">
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
export default {
  name: 'Navbar',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        await AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
}
</style>
