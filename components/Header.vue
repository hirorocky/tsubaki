<template>
  <div class="w-full h-10 bg-blue-700">
    <nuxt-link to="/" class="float-left bg-blue-100 h-full">tsubaki</nuxt-link>
    <button v-if="isLogined" class="float-right bg-blue-100" @click="logout">
      ログアウト
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from 'firebase/app'
import { auth } from '~/plugins/firebase'

export default Vue.extend({
  data() {
    return {
      isLogined: false as boolean,
      user: null as firebase.User | null,
    }
  },
  mounted() {
    auth.onAuthStateChanged((user) => {
      this.isLogined = !!user
      this.user = user
    })
  },
  methods: {
    login() {
      this.$router.push('/login')
    },
    async logout() {
      await auth.signOut()
      this.$router.push('/login')
    },
  },
})
</script>
