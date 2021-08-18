<template>
  <div class="flex justify-between bg-white rounded overflow-hidden p-2 space-x-1"
  >
    <div class="flex items-baseline">
      <span class="bg-green-300 bg-opacity-50 rounded-full p-1">
        <svg
            class="h-6 w-auto text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
        >
          <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
          />
        </svg>
      </span>
    </div>
    <div class="flex flex-grow items-center">
      <p class="leading-tight text-xs md:text-sm" v-html="text" />
    </div>
    <div>
      <button
          type="button"
          class="bg-indigo-300 bg-opacity-25 text-gray-700 rounded overflow-hidden p-1 lg:p-2 focus:outline-none"
          @click="$emit('submit')"
      >
        <svg
            class="h-4 w-auto"
            fill="currentColor"
            viewBox="0 0 20 20"
        >
          <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>

import DialogActions from './DialogActions.vue'

export default {
  components: { DialogActions },
  layout: ['notification', { showClose: false }],
  props: {
    type: {
      type: String,
      default: () => 'info'
    },
    actions: [ Array, Object ],
    text: String,
    dismissible: {
      type: Boolean,
      default: true
    }
  }
}
</script>
