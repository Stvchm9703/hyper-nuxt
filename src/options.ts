import { Module } from "@nuxt/types";
import { ModuleThis } from "@nuxt/types/config/module";
import merge from 'deepmerge';

export interface HyperSSROption {
  component?: HyperSSROptionComponent;
  injection?: HyperSSROptionInjection;
  // afterContent?:
}
/** *
 * @interface : -Component
 * desp       : 
 *  for component, it generate a plugin at "build:before" (as similar as vuetify)
 *  ctx 
 *  
 *  */
export interface HyperSSROptionComponent {
  tagName?: String; //  component-tag e.g.: hs-text
  tagType?: String; // tag name after render , default : 'span' 
  devOption?: CompDevOption;
  genOption?: CompGenOption;

}
export interface CompDevOption {
  useApi?: String;
  proxy?: Boolean;
  useI18nModule?: Boolean;
}
//
export interface CompGenOption {
  useContent?: Boolean;
  useApi?: String; // 'SPA-mode' component may need fetching i18n json from web-server
  proxy?: Boolean;
  // Remark: how about fetching modal/pop-up/component content(xml) from server 
  //  extract component as single xml , like storybook
  apiFallback?: Boolean;
  buildI18n?: Boolean;
}


export interface HyperSSROptionInjection {
  outDir?: String;
  template?: TemplateStruct
  createStruct?: InjectCreateStruct; // default : null
  extractI18n?: Boolean
  extractedI18nFormat?: String // json / yaml / csv / sql / code 
  extractedI18nDir?: String | Array<String> // default:"/i18n"
}

export enum InjectLangType { php, java, golang }

export enum InjectTemplateType { php, jsp, rocker, golang, }

export interface TemplateStruct {
  // html template 
  langType?: InjectLangType;
  templateType: InjectTemplateType | String | undefined;
  tagPreflexBefore?: String;
  tagPreflexAfter?: String;
  referenceTemplate?: String;
  fileNamePreflex?: String;

}

export interface InjectCreateStruct {
  structPrefix?: String// "[componentName]"
  withDesp?: Boolean
}

// default-option-setting
export const defaultOptionSetting = {
  component: {
    tagName: "HyperSSRText",
    tagType: 'span',
    devOption: {
      useApi: null,
      proxy: false,
      useI18nModule: false,
    },
    genOption: {
      useContent: false,
      useApi: null,
      proxy: false,
      apiFallback: false,
      buildI18n: true,
    }
  },
  injection: {
    outDir: './dist-ssr-tmpl',
    template: {
      langType: InjectLangType.php,
      template: InjectTemplateType.php,
      // tagPreflexBefore: "", skip
      // tagPreflexAfter: "", skip
      
      // referenceTemplate: 
      //    skip -> langType auto redirct if you use default
      fileNamePreflex: `[fileName].tmpl.[ext]`,
    },
    createStruct: {
      structPrefix: "[componentName]",
      withDesp: true
    },
    extractI18n: true,
    extractedI18nFormat: 'json',
    extractedI18nDir: "/i18n"
  }
}
const initOptions = function (this: ModuleThis, moduleOptions?: HyperSSROption): Required<HyperSSROption> {
  return merge.all([
    defaultOptionSetting,
    this.options['hyperSSR'] || {},
    moduleOptions || {},
  ]) as Required<HyperSSROption>
}
export default initOptions;
