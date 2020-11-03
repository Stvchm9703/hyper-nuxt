import merge from 'deepmerge';
export var InjectLangType;
(function (InjectLangType) {
    InjectLangType[InjectLangType["php"] = 0] = "php";
    InjectLangType[InjectLangType["java"] = 1] = "java";
    InjectLangType[InjectLangType["golang"] = 2] = "golang";
})(InjectLangType || (InjectLangType = {}));
export var InjectTemplateType;
(function (InjectTemplateType) {
    InjectTemplateType[InjectTemplateType["php"] = 0] = "php";
    InjectTemplateType[InjectTemplateType["jsp"] = 1] = "jsp";
    InjectTemplateType[InjectTemplateType["rocker"] = 2] = "rocker";
    InjectTemplateType[InjectTemplateType["golang"] = 3] = "golang";
})(InjectTemplateType || (InjectTemplateType = {}));
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
};
const initOptions = function (moduleOptions) {
    return merge.all([
        defaultOptionSetting,
        this.options['hyperSSR'] || {},
        moduleOptions || {},
    ]);
};
export default initOptions;
