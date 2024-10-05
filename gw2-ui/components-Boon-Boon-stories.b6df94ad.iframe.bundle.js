"use strict";(self.webpackChunk_discretize_gw2_ui_new=self.webpackChunk_discretize_gw2_ui_new||[]).push([[785],{"./src/components/Boon/Boon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BoonMight:()=>BoonMight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Boon_stories});__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");var i18n=__webpack_require__("./src/i18n/index.ts");const TRANSLATIONS_BOONS={Aegis:{de:"Aegis"},Alacrity:{de:"Tatendrang"},Fury:{de:"Wut"},Might:{de:"Macht"},Protection:{de:"Schutz"},Quickness:{de:"Schnelligkeit"},Regeneration:{de:"Regeneration"},Resistance:{de:"Widerstand"},Resolution:{de:"Entschlossenheit"},Stability:{de:"Stabilität"},Swiftness:{de:"Eile"},Vigor:{de:"Elan"}},TRANSLATIONS_BOON_DESCRIPTIONS={Aegis:{en:"Block the next incoming attack; stacks duration.",de:"Blockt den nächsten Angriff; Dauer summiert sich."},Alacrity:{en:"Skills recharge faster.",de:"Fertigkeiten laden sich schneller wieder auf."},Fury:{en:"Critical Chance increased by 25%; stacks duration.",de:"Erhöht die Chance auf kritischen Treffer um 25%; Dauer summiert sich."},Might:{en:"Increased outgoing damage; stacks intensity.",de:"Erhöht zugefügten Schaden; Intensität summiert sich."},Protection:{en:"Incoming damage decreased by 33%; stacks duration.",de:"Reduziert erlittenen Schlagschaden um 33%; Dauer summiert sich."},Quickness:{en:"Skills and actions are faster.",de:"Fertigkeiten und Aktionen sind schneller."},Regeneration:{en:"Gain health every second; stacks duration.",de:"Erhaltet jede Sekunde Lebenspunkte; Dauer summiert sich."},Resistance:{en:"Nondamaging conditions currently on you are ineffective; stacks duration.",de:"Zustände, die Euch zum gegenwärtigen Zeitpunkt betreffen und die keinen Schaden verursachen, haben keine Wirkung; Dauer summiert sich."},Resolution:{en:"Incoming condition damage decreased by 33%; stacks duration.",de:"Reduziert erlittenen Zustandsschaden um 33%; Dauer summiert sich."},Stability:{en:"Cannot be knocked down, pushed back, pulled, launched, stunned, dazed, floated, sunk, feared or taunted.",de:"Immun gegen Niederschlag, Hoch- und Zurückschleudern, Ziehen, Betäubung, Benommenheit, Schweben, Sinken, Furcht oder Provozieren."},Swiftness:{en:"Movement speed increased by 33%; stacks duration.",de:"Erhöht Bewegungsgeschwindigkeit um 33%; Dauer summiert sich."},Vigor:{en:"Endurance regeneration increased by 50%; stacks duration.",de:"Erhöht Ausdauerregeneration um 50%; Dauer summiert sich."}};var Effect=__webpack_require__("./src/components/Effect/Effect.tsx"),jsx_runtime=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");const Boon=props=>{const{name,count=1}=props,language=(0,i18n.i$)(),translation=(0,i18n.Tl)(TRANSLATIONS_BOONS,name,language),description=(0,i18n.Tl)(TRANSLATIONS_BOON_DESCRIPTIONS,name,language);return(0,jsx_runtime.jsx)(Effect.A,{...props,type:"Boon",name,displayName:translation,description,iconProps:{applyCount:count}})},Boon_Boon=Boon;try{Boon.displayName="Boon",Boon.__docgenInfo={description:"",displayName:"Boon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"Aegis"'},{value:'"Alacrity"'},{value:'"Fury"'},{value:'"Might"'},{value:'"Protection"'},{value:'"Quickness"'},{value:'"Regeneration"'},{value:'"Resistance"'},{value:'"Resolution"'},{value:'"Stability"'},{value:'"Swiftness"'},{value:'"Vigor"'}]}},count:{defaultValue:null,description:"",name:"count",required:!1,type:{name:"number"}},disableTooltip:{defaultValue:null,description:"",name:"disableTooltip",required:!1,type:{name:"boolean"}},disableText:{defaultValue:null,description:"",name:"disableText",required:!1,type:{name:"boolean"}},disableLink:{defaultValue:null,description:"",name:"disableLink",required:!1,type:{name:"boolean"}},disableIcon:{defaultValue:null,description:"",name:"disableIcon",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Boon/Boon.tsx#Boon"]={docgenInfo:Boon.__docgenInfo,name:"Boon",path:"src/components/Boon/Boon.tsx#Boon"})}catch(__react_docgen_typescript_loader_error){}const Boon_stories={title:"Components/Boon",component:Boon_Boon,argTypes:{className:{control:!1}}},BoonMight={render:args=>(0,jsx_runtime.jsx)(Boon_Boon,{...args}),args:{name:"Might"}},__namedExportsOrder=["BoonMight"];BoonMight.parameters={...BoonMight.parameters,docs:{...BoonMight.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    name: 'Might'\n  }\n}",...BoonMight.parameters?.docs?.source}}}}}]);