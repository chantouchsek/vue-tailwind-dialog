<template>
  <div>
    <dialog-card :title="title" :actions="parsedActions">
      <b-form-input
          autofocus
          @keypress.enter="onSubmit"
          v-model="editedValue"
          :placeholder="text"
          required
        />
    </dialog-card>
  </div>
</template>

<script>

import { Confirmable } from '@chantouchsek/vue-dialog'
import DialogCard from './DialogCard.vue'

export default {
  components: { DialogCard },
  layout: 'default',
  mixins: [ Confirmable ],
  props: {
    value: {
      type: String,
      default: undefined
    }
  },
  computed: {
    parsedActions () {
      const actions = this.actions
      if (actions[true]) {
        if (typeof actions[true] === 'string') {
          actions[true] = {
            'text': actions[true],
            handle: this.onSubmit
          }
        } else {
          actions[true].handle = this.onSubmit
        }
      }
      return actions
    }
  },
  data () {
    return {
      editedValue: this.value
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submit', this.editedValue)
    }
  }
}
</script>
