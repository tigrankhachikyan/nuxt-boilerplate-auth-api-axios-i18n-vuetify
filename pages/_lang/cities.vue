<template>
  <v-layout>
    <v-flex text-xs-center>
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        <footer>
          <small>
            <em>Cities</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  head() {
    return { title: this.$t('home.title') }
  }
}
</script>
