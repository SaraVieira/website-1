import Vue from 'vue'
import StoryblokClient from 'storyblok-js-client'
import StoryblokVue from 'storyblok-vue'

const Client = {
  install () {
    if (!Vue.prototype.$storyapi) {
      Vue.prototype.$storyapi = new StoryblokClient({
        accessToken: 'plc0fBh2no8owEeTALSN2wtt',
        cache: {
          clear: 'auto',
          type: 'memory'
        }
      })
    }
  }
}

Vue.use(Client)
Vue.use(StoryblokVue)

export default (ctx) => {
  const { app, store } = ctx

  app.$storyapi = Vue.prototype.$storyapi
  ctx.$storyapi = Vue.prototype.$storyapi

  if (store) {
    store.$storyapi = Vue.prototype.$storyapi
  }
}
