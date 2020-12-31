<template>
  <div>
    <div
      class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
    >
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
        ログイン
      </h2>

      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600"
          >メールアドレス</label
        >
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div class="relative mb-4">
        <label for="password" class="leading-7 text-sm text-gray-600"
          >パスワード</label
        >
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <button
        class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        @click="login"
      >
        ログイン
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '~/plugins/firebase'
export default Vue.extend({
  data() {
    return {
      email: '' as string,
      password: '' as string,
    }
  },
  methods: {
    login() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => this.$router.push('/'))
        .catch((error) => alert(error.message))
    },
  },
})
</script>
