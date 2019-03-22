const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  locales: ['en', 'ru', 'hy'],
  locale: 'en'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

export const actions = {
  nuxtServerInit({ commit }, ctx) {
  // auth staff
    let auth = null
    if (ctx.req.headers.cookie) {
      const parsed = cookieparser.parse(ctx.req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
        if (auth) {
          ctx.app.$axios.setToken(auth.token, '')
        }
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('auth/setAuth', auth)
  }
}
