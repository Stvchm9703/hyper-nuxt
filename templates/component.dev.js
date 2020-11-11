import Vue, { component } from 'vue'
import options from './options';
const compName = options['component']['tagType'] | "span"; 
// global setting




Vue.component(options['component']['tagName'], {
  functional : true,
  props: {
    type: { type: String, default: ""  }, // custom element
    //value: { type: String, default: "" },
    placeHolder : {type: String, default:""},
    isI18nCSR: { type: Boolean, default: false }
  },
  //template: `<${compName}}> ${value || $slot} </${compName}>`
  render: function ( ce) {
    return ce( this.type ?? compName, {
      value: this.$slots ?? this.value,
    })
  }
})
