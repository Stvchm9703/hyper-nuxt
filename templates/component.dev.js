import Vue, { component } from "vue";
import isEmpty from "lodash/isEmpty";
// global set

const __hyer_dev_comp__ = (_Vue) =>
  _Vue.component('<%= options["component"]["tagName"] || "HyperSSRText" %>', {
    props: {
      type: { type: String, default: "" }, // custom element
      value: { type: String, default: "" },
      placeHolder: { type: String, default: "" },
      isInCSR: { type: Boolean, default: false },
    },

   
    render: function (h, prop) {
      return h(
        this.type || '<%= options["component"]["tagType"] || "span" %>',
        prop,
        // !isEmpty(this.$slots.default) && !isEmpty(this.value)? String.For
        !isEmpty(this.$slots.default) ? this.$slots.default
          : !isEmpty(this.$t) ? this.$t(this.value) : this.value
      );
    },
  });

Vue.use({
  install() {
    __hyer_dev_comp__(Vue);
  },
});
