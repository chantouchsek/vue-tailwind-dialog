<template>
  <span class="dialog-actions">
    <button class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50" v-for="action in actionlist" :key="action.key"
      :variant="action.variant || variant"
      :loading="loadingAction === action.key"
      :disabled="isActionDisabled(action) || !!loadingAction"
      @click="onActionClick(action)">
      <loader v-if="loadingAction === action.key" size="8px"/>
      <template v-else>{{ action.text }}</template>
    </button>
  </span>
</template>
<script>
import { Actionable } from '@chantouchsek/vue-dialog'
import Loader from './Loader.vue'

export default {
  components: { Loader },
  mixins: [ Actionable ],
  props: {
    variant: {
      type: String,
      default: 'outline-primary'
    }
  }
}
</script>
<style>
  .dialog-actions button {
     margin-right: 4px;
     margin-right: .25rem;
  }
</style>
