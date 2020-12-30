<template>
  <div class="bg-gray rounded">
    <p>PUSH BUTTON</p>
    <div>{{ count }}</div>
    <input type="button" @click="countup" />
    <div
      class="p-6 max-w-sm mx-auto bg-white rounded-sm shadow-md flex items-center space-x-4"
    >
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="/img/logo.jpg" alt="ChitChat Logo" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      count: 0 as number,
    }
  },
  methods: {
    countup() {
      this.count += 1
    },
  },
})
</script>
