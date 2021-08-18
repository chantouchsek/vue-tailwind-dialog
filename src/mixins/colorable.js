export default {
  props: {
    type: {
      type: String,
      default: undefined
    },
    color: {
      type: String,
      default: undefined
    }
  },
  computed: {
    getColor () {
      return this.color || this.type
    }
  }
}
