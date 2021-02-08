import Vue, { component } from 'vue'
// global setting

Vue.component('<%= options["component"]["tagName"] || "HyperSSRText" %>' , {
  props: {
    type: { type: String, default: "" }, // custom element
    value: { type: String, default: "" },
    placeHolder: { type: String, default: "" },
    isInCSR: { type: Boolean, default: false }
  },

  render: function (h, prop) {
    return h(this.type || '<%= options["component"]["tagType"] || "span" %>' , this.$props ,  [{
      value: this.$slots || (Vue.$t ? Vue.$t(this.value) : this.value),
    }])
  }
})
