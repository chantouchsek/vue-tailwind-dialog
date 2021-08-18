<template>
  <dialog-actions
      :actions="actions"
      :title="title"
      :header-bg-variant="type"
      :header-text-variant="headerTextVariant"
  >
    <div class="dialog-confirm-text" v-html="text" />
  </dialog-actions>
</template>

<script>
import { Confirmable } from '@chantouchsek/vue-dialog'
import Colorable from '../mixins/colorable'
import DialogActions from './DialogActions.vue'

export default {
  components: { DialogActions },
  layout: 'default',
  mixins: [ Confirmable, Colorable ],
  computed: {
    headerTextVariant () {
      return ['info', 'danger'].indexOf(this.type) >= 0 ? 'light' : 'dark'
    }
  }
}
</script>
