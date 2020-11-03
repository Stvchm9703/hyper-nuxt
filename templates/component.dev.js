import Vue, { component } from 'vue'
import options from './options';
const compName = options['component']['tagType'] | "span";

Vue.component(options['component']['tagName'], {
  props: {
    type: { type: String, default: "string" },
    value: { type: String, default: "" },
    isI18n: { type: Boolean, default: false }
  },
  template: `<${compName}}> ${value || $slot} </${compName}>`
})

