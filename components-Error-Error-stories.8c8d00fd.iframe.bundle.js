"use strict";(self.webpackChunk_discretize_gw2_ui_new=self.webpackChunk_discretize_gw2_ui_new||[]).push([[191],{"./src/components/Error/Error.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NetworkError:()=>NetworkError,NotFound:()=>NotFound,Translated:()=>Translated,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");var _i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/i18n/index.ts"),_Error__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Error/Error.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Helper Components/Error",component:_Error__WEBPACK_IMPORTED_MODULE_2__.A,argTypes:{className:{control:!1}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Error__WEBPACK_IMPORTED_MODULE_2__.A,{...args})}),ERROR_NAMES={404:{en:"Mishap :(",es:"Accidente :("},500:"Network Mishap :("},ERROR_MESSAGES={404:{en:"Quaggan looked everywhere but coouldn't find what yoou're looking foor *pohooo*",es:"Quaggan did not expect the spanish translation."},500:"Quaggan's network waddles slower than a centaur *pohooo*"},NotFound={render:Template,args:{code:404,message:ERROR_MESSAGES,name:ERROR_NAMES}},NetworkError={render:Template,args:{code:500,message:ERROR_MESSAGES,name:ERROR_NAMES}};function Translated(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["English: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Error__WEBPACK_IMPORTED_MODULE_2__.A,{code:404,message:ERROR_MESSAGES,name:ERROR_NAMES}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_i18n__WEBPACK_IMPORTED_MODULE_3__.SU,{value:"es",children:["Spanish:"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Error__WEBPACK_IMPORTED_MODULE_2__.A,{code:404,message:ERROR_MESSAGES,name:ERROR_NAMES})]})]})}const __namedExportsOrder=["NotFound","NetworkError","Translated"];NotFound.parameters={...NotFound.parameters,docs:{...NotFound.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    code: 404,\n    message: ERROR_MESSAGES,\n    name: ERROR_NAMES\n  }\n}",...NotFound.parameters?.docs?.source}}},NetworkError.parameters={...NetworkError.parameters,docs:{...NetworkError.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    code: 500,\n    message: ERROR_MESSAGES,\n    name: ERROR_NAMES\n  }\n}",...NetworkError.parameters?.docs?.source}}},Translated.parameters={...Translated.parameters,docs:{...Translated.parameters?.docs,source:{originalSource:"function Translated() {\n  return <>\n      English: <Error code={404} message={ERROR_MESSAGES} name={ERROR_NAMES} />\n      <br />\n      <APILanguageProvider value=\"es\">\n        Spanish:{' '}\n        <Error code={404} message={ERROR_MESSAGES} name={ERROR_NAMES} />\n      </APILanguageProvider>\n    </>;\n}",...Translated.parameters?.docs?.source}}}},"./src/components/Error/Error.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Error_Error});var clsx=__webpack_require__("../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),i18n=(__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),__webpack_require__("./src/i18n/index.ts")),DetailsHeader=__webpack_require__("./src/components/DetailsHeader/DetailsHeader.tsx"),DetailsText=__webpack_require__("./src/components/DetailsText/DetailsText.tsx"),IconWithText=__webpack_require__("./src/components/IconWithText/IconWithText.tsx"),Tooltip=__webpack_require__("./src/components/Tooltip/Tooltip.tsx"),injectStylesIntoStyleTag=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../node_modules/.pnpm/style-loader@3.3.4_webpack@5.94.0/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Error_module=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./src/components/Error/Error.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Error_module.A,options);const Error_Error_module=Error_module.A&&Error_module.A.locals?Error_module.A.locals:void 0;var jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Error=_ref=>{let{code,id,name:nameProps,message:messageProps,disableIcon,disableText,disableTooltip,inline,tooltipProps,className,style}=_ref;const language=(0,i18n.i$)(),errorIconClass=404===code?Error_Error_module.imageError404:Error_Error_module.imageError500;function getMessage(raw){let by_code,by_language;by_code="string"!=typeof raw&&"function"!=typeof raw?raw[code]:raw,by_language="string"!=typeof by_code&&"function"!=typeof by_code?by_code[language]||by_code.en:by_code;return void 0===by_language?"":"string"==typeof by_language?by_language:void 0!==id?by_language(id):""}const name=getMessage(nameProps),message=getMessage(messageProps);return(0,jsx_runtime.jsx)(Tooltip.A,{content:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(DetailsHeader.A,{iconProps:{className:errorIconClass,iconViaClassname:!0},titleClassName:Error_Error_module.errorColor,children:name}),(0,jsx_runtime.jsx)(DetailsText.A,{lines:[message]})]}),disabled:disableTooltip,...tooltipProps,children:(0,jsx_runtime.jsx)(IconWithText.A,{text:name,disableIcon,disableText,inline,iconProps:{className:errorIconClass,iconViaClassname:!0},className:(0,clsx.A)(className,Error_Error_module.errorColor),style})})},Error_Error=Error;try{Error.displayName="Error",Error.__docgenInfo={description:"",displayName:"Error",props:{code:{defaultValue:null,description:"",name:"code",required:!0,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"ErrorStrings"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"ErrorStrings"}},disableIcon:{defaultValue:null,description:"",name:"disableIcon",required:!1,type:{name:"boolean"}},disableText:{defaultValue:null,description:"",name:"disableText",required:!1,type:{name:"boolean"}},disableTooltip:{defaultValue:null,description:"",name:"disableTooltip",required:!1,type:{name:"boolean"}},inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:"TooltipProps"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Error/Error.tsx#Error"]={docgenInfo:Error.__docgenInfo,name:"Error",path:"src/components/Error/Error.tsx#Error"})}catch(__react_docgen_typescript_loader_error){}},"./src/i18n/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bd:()=>useTranslation,SU:()=>APILanguageProvider,Tl:()=>translate,i$:()=>useAPILanguage});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");const API_LANGUAGES=["de","en","es","fr","zh"];function isAPILanguage(l){return API_LANGUAGES.includes(l)}const APILanguageContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(function getNavigatorDefaultLanguage(){if("undefined"==typeof navigator)return"en";const languages=navigator.languages||[navigator.language];for(let l of languages)if(l=l?.split("-")[0].toLowerCase(),isAPILanguage(l))return l;return"en"}()),APILanguageProvider=APILanguageContext.Provider;function useAPILanguage(){return react__WEBPACK_IMPORTED_MODULE_0__.useContext(APILanguageContext)}function translate(map,key,lang){const t=map[key];return t&&(t[lang]||t.en)||key}function useTranslation(map,key){return translate(map,key,useAPILanguage())}},"../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./src/components/Error/Error.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/api.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/.pnpm/css-loader@6.11.0_webpack@5.94.0/node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./src/assets/icons/404.png"),__webpack_require__.b),___CSS_LOADER_URL_IMPORT_1___=new URL(__webpack_require__("./src/assets/icons/500.png"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=_node_modules_pnpm_css_loader_6_11_0_webpack_5_94_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);___CSS_LOADER_EXPORT___.push([module.id,`.Error-module__errorColor__WH9xD {\n  color: var(--gw2-color-error);\n}\n\n.Error-module__imageError404__gpBMq {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n.Error-module__imageError500__WzHF4 {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n`,"",{version:3,sources:["webpack://./src/components/Error/Error.module.css"],names:[],mappings:"AAAA;EACE,6BAA6B;AAC/B;;AAEA;EACE,yDAAmD;AACrD;AACA;EACE,yDAAmD;AACrD",sourcesContent:[".errorColor {\n  color: var(--gw2-color-error);\n}\n\n.imageError404 {\n  background-image: url('../../assets/icons/404.png');\n}\n.imageError500 {\n  background-image: url('../../assets/icons/500.png');\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={errorColor:"Error-module__errorColor__WH9xD",imageError404:"Error-module__imageError404__gpBMq",imageError500:"Error-module__imageError500__WzHF4"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/assets/icons/404.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/404.f1b1ced6.png"},"./src/assets/icons/500.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/500.44d1495d.png"}}]);