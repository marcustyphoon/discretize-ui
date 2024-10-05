/*! For license information please see 176.a77a65c5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_discretize_gw2_ui_new=self.webpackChunk_discretize_gw2_ui_new||[]).push([[176],{"../node_modules/.pnpm/@floating-ui+dom@1.6.11/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{rD:()=>floating_ui_dom_computePosition,UU:()=>floating_ui_dom_flip,cY:()=>floating_ui_dom_offset,BN:()=>floating_ui_dom_shift});const floating_ui_utils_min=Math.min,floating_ui_utils_max=Math.max,round=Math.round,createCoords=(Math.floor,v=>({x:v,y:v})),oppositeSideMap={left:"right",right:"left",bottom:"top",top:"bottom"},oppositeAlignmentMap={start:"end",end:"start"};function floating_ui_utils_clamp(start,value,end){return floating_ui_utils_max(start,floating_ui_utils_min(value,end))}function floating_ui_utils_evaluate(value,param){return"function"==typeof value?value(param):value}function floating_ui_utils_getSide(placement){return placement.split("-")[0]}function floating_ui_utils_getAlignment(placement){return placement.split("-")[1]}function floating_ui_utils_getOppositeAxis(axis){return"x"===axis?"y":"x"}function floating_ui_utils_getAxisLength(axis){return"y"===axis?"height":"width"}function floating_ui_utils_getSideAxis(placement){return["top","bottom"].includes(floating_ui_utils_getSide(placement))?"y":"x"}function floating_ui_utils_getAlignmentAxis(placement){return floating_ui_utils_getOppositeAxis(floating_ui_utils_getSideAxis(placement))}function floating_ui_utils_getOppositeAlignmentPlacement(placement){return placement.replace(/start|end/g,(alignment=>oppositeAlignmentMap[alignment]))}function getOppositePlacement(placement){return placement.replace(/left|right|bottom|top/g,(side=>oppositeSideMap[side]))}function floating_ui_utils_rectToClientRect(rect){const{x,y,width,height}=rect;return{width,height,top:y,left:x,right:x+width,bottom:y+height,x,y}}function computeCoordsFromPlacement(_ref,placement,rtl){let{reference,floating}=_ref;const sideAxis=floating_ui_utils_getSideAxis(placement),alignmentAxis=floating_ui_utils_getAlignmentAxis(placement),alignLength=floating_ui_utils_getAxisLength(alignmentAxis),side=floating_ui_utils_getSide(placement),isVertical="y"===sideAxis,commonX=reference.x+reference.width/2-floating.width/2,commonY=reference.y+reference.height/2-floating.height/2,commonAlign=reference[alignLength]/2-floating[alignLength]/2;let coords;switch(side){case"top":coords={x:commonX,y:reference.y-floating.height};break;case"bottom":coords={x:commonX,y:reference.y+reference.height};break;case"right":coords={x:reference.x+reference.width,y:commonY};break;case"left":coords={x:reference.x-floating.width,y:commonY};break;default:coords={x:reference.x,y:reference.y}}switch(floating_ui_utils_getAlignment(placement)){case"start":coords[alignmentAxis]-=commonAlign*(rtl&&isVertical?-1:1);break;case"end":coords[alignmentAxis]+=commonAlign*(rtl&&isVertical?-1:1)}return coords}async function detectOverflow(state,options){var _await$platform$isEle;void 0===options&&(options={});const{x,y,platform,rects,elements,strategy}=state,{boundary="clippingAncestors",rootBoundary="viewport",elementContext="floating",altBoundary=!1,padding=0}=floating_ui_utils_evaluate(options,state),paddingObject=function floating_ui_utils_getPaddingObject(padding){return"number"!=typeof padding?function expandPaddingObject(padding){return{top:0,right:0,bottom:0,left:0,...padding}}(padding):{top:padding,right:padding,bottom:padding,left:padding}}(padding),element=elements[altBoundary?"floating"===elementContext?"reference":"floating":elementContext],clippingClientRect=floating_ui_utils_rectToClientRect(await platform.getClippingRect({element:null==(_await$platform$isEle=await(null==platform.isElement?void 0:platform.isElement(element)))||_await$platform$isEle?element:element.contextElement||await(null==platform.getDocumentElement?void 0:platform.getDocumentElement(elements.floating)),boundary,rootBoundary,strategy})),rect="floating"===elementContext?{x,y,width:rects.floating.width,height:rects.floating.height}:rects.reference,offsetParent=await(null==platform.getOffsetParent?void 0:platform.getOffsetParent(elements.floating)),offsetScale=await(null==platform.isElement?void 0:platform.isElement(offsetParent))&&await(null==platform.getScale?void 0:platform.getScale(offsetParent))||{x:1,y:1},elementClientRect=floating_ui_utils_rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect?await platform.convertOffsetParentRelativeRectToViewportRelativeRect({elements,rect,offsetParent,strategy}):rect);return{top:(clippingClientRect.top-elementClientRect.top+paddingObject.top)/offsetScale.y,bottom:(elementClientRect.bottom-clippingClientRect.bottom+paddingObject.bottom)/offsetScale.y,left:(clippingClientRect.left-elementClientRect.left+paddingObject.left)/offsetScale.x,right:(elementClientRect.right-clippingClientRect.right+paddingObject.right)/offsetScale.x}}function hasWindow(){return"undefined"!=typeof window}function getNodeName(node){return isNode(node)?(node.nodeName||"").toLowerCase():"#document"}function getWindow(node){var _node$ownerDocument;return(null==node||null==(_node$ownerDocument=node.ownerDocument)?void 0:_node$ownerDocument.defaultView)||window}function floating_ui_utils_dom_getDocumentElement(node){var _ref;return null==(_ref=(isNode(node)?node.ownerDocument:node.document)||window.document)?void 0:_ref.documentElement}function isNode(value){return!!hasWindow()&&(value instanceof Node||value instanceof getWindow(value).Node)}function isElement(value){return!!hasWindow()&&(value instanceof Element||value instanceof getWindow(value).Element)}function isHTMLElement(value){return!!hasWindow()&&(value instanceof HTMLElement||value instanceof getWindow(value).HTMLElement)}function isShadowRoot(value){return!(!hasWindow()||"undefined"==typeof ShadowRoot)&&(value instanceof ShadowRoot||value instanceof getWindow(value).ShadowRoot)}function isOverflowElement(element){const{overflow,overflowX,overflowY,display}=getComputedStyle(element);return/auto|scroll|overlay|hidden|clip/.test(overflow+overflowY+overflowX)&&!["inline","contents"].includes(display)}function isTableElement(element){return["table","td","th"].includes(getNodeName(element))}function isTopLayer(element){return[":popover-open",":modal"].some((selector=>{try{return element.matches(selector)}catch(e){return!1}}))}function isContainingBlock(elementOrCss){const webkit=isWebKit(),css=isElement(elementOrCss)?getComputedStyle(elementOrCss):elementOrCss;return"none"!==css.transform||"none"!==css.perspective||!!css.containerType&&"normal"!==css.containerType||!webkit&&!!css.backdropFilter&&"none"!==css.backdropFilter||!webkit&&!!css.filter&&"none"!==css.filter||["transform","perspective","filter"].some((value=>(css.willChange||"").includes(value)))||["paint","layout","strict","content"].some((value=>(css.contain||"").includes(value)))}function isWebKit(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function isLastTraversableNode(node){return["html","body","#document"].includes(getNodeName(node))}function getComputedStyle(element){return getWindow(element).getComputedStyle(element)}function getNodeScroll(element){return isElement(element)?{scrollLeft:element.scrollLeft,scrollTop:element.scrollTop}:{scrollLeft:element.scrollX,scrollTop:element.scrollY}}function getParentNode(node){if("html"===getNodeName(node))return node;const result=node.assignedSlot||node.parentNode||isShadowRoot(node)&&node.host||floating_ui_utils_dom_getDocumentElement(node);return isShadowRoot(result)?result.host:result}function getNearestOverflowAncestor(node){const parentNode=getParentNode(node);return isLastTraversableNode(parentNode)?node.ownerDocument?node.ownerDocument.body:node.body:isHTMLElement(parentNode)&&isOverflowElement(parentNode)?parentNode:getNearestOverflowAncestor(parentNode)}function floating_ui_utils_dom_getOverflowAncestors(node,list,traverseIframes){var _node$ownerDocument2;void 0===list&&(list=[]),void 0===traverseIframes&&(traverseIframes=!0);const scrollableAncestor=getNearestOverflowAncestor(node),isBody=scrollableAncestor===(null==(_node$ownerDocument2=node.ownerDocument)?void 0:_node$ownerDocument2.body),win=getWindow(scrollableAncestor);if(isBody){const frameElement=getFrameElement(win);return list.concat(win,win.visualViewport||[],isOverflowElement(scrollableAncestor)?scrollableAncestor:[],frameElement&&traverseIframes?floating_ui_utils_dom_getOverflowAncestors(frameElement):[])}return list.concat(scrollableAncestor,floating_ui_utils_dom_getOverflowAncestors(scrollableAncestor,[],traverseIframes))}function getFrameElement(win){return win.parent&&Object.getPrototypeOf(win.parent)?win.frameElement:null}function getCssDimensions(element){const css=getComputedStyle(element);let width=parseFloat(css.width)||0,height=parseFloat(css.height)||0;const hasOffset=isHTMLElement(element),offsetWidth=hasOffset?element.offsetWidth:width,offsetHeight=hasOffset?element.offsetHeight:height,shouldFallback=round(width)!==offsetWidth||round(height)!==offsetHeight;return shouldFallback&&(width=offsetWidth,height=offsetHeight),{width,height,$:shouldFallback}}function unwrapElement(element){return isElement(element)?element:element.contextElement}function getScale(element){const domElement=unwrapElement(element);if(!isHTMLElement(domElement))return createCoords(1);const rect=domElement.getBoundingClientRect(),{width,height,$}=getCssDimensions(domElement);let x=($?round(rect.width):rect.width)/width,y=($?round(rect.height):rect.height)/height;return x&&Number.isFinite(x)||(x=1),y&&Number.isFinite(y)||(y=1),{x,y}}const noOffsets=createCoords(0);function getVisualOffsets(element){const win=getWindow(element);return isWebKit()&&win.visualViewport?{x:win.visualViewport.offsetLeft,y:win.visualViewport.offsetTop}:noOffsets}function getBoundingClientRect(element,includeScale,isFixedStrategy,offsetParent){void 0===includeScale&&(includeScale=!1),void 0===isFixedStrategy&&(isFixedStrategy=!1);const clientRect=element.getBoundingClientRect(),domElement=unwrapElement(element);let scale=createCoords(1);includeScale&&(offsetParent?isElement(offsetParent)&&(scale=getScale(offsetParent)):scale=getScale(element));const visualOffsets=function shouldAddVisualOffsets(element,isFixed,floatingOffsetParent){return void 0===isFixed&&(isFixed=!1),!(!floatingOffsetParent||isFixed&&floatingOffsetParent!==getWindow(element))&&isFixed}(domElement,isFixedStrategy,offsetParent)?getVisualOffsets(domElement):createCoords(0);let x=(clientRect.left+visualOffsets.x)/scale.x,y=(clientRect.top+visualOffsets.y)/scale.y,width=clientRect.width/scale.x,height=clientRect.height/scale.y;if(domElement){const win=getWindow(domElement),offsetWin=offsetParent&&isElement(offsetParent)?getWindow(offsetParent):offsetParent;let currentWin=win,currentIFrame=getFrameElement(currentWin);for(;currentIFrame&&offsetParent&&offsetWin!==currentWin;){const iframeScale=getScale(currentIFrame),iframeRect=currentIFrame.getBoundingClientRect(),css=getComputedStyle(currentIFrame),left=iframeRect.left+(currentIFrame.clientLeft+parseFloat(css.paddingLeft))*iframeScale.x,top=iframeRect.top+(currentIFrame.clientTop+parseFloat(css.paddingTop))*iframeScale.y;x*=iframeScale.x,y*=iframeScale.y,width*=iframeScale.x,height*=iframeScale.y,x+=left,y+=top,currentWin=getWindow(currentIFrame),currentIFrame=getFrameElement(currentWin)}}return floating_ui_utils_rectToClientRect({width,height,x,y})}function getWindowScrollBarX(element,rect){const leftScroll=getNodeScroll(element).scrollLeft;return rect?rect.left+leftScroll:getBoundingClientRect(floating_ui_utils_dom_getDocumentElement(element)).left+leftScroll}function getClientRectFromClippingAncestor(element,clippingAncestor,strategy){let rect;if("viewport"===clippingAncestor)rect=function getViewportRect(element,strategy){const win=getWindow(element),html=floating_ui_utils_dom_getDocumentElement(element),visualViewport=win.visualViewport;let width=html.clientWidth,height=html.clientHeight,x=0,y=0;if(visualViewport){width=visualViewport.width,height=visualViewport.height;const visualViewportBased=isWebKit();(!visualViewportBased||visualViewportBased&&"fixed"===strategy)&&(x=visualViewport.offsetLeft,y=visualViewport.offsetTop)}return{width,height,x,y}}(element,strategy);else if("document"===clippingAncestor)rect=function getDocumentRect(element){const html=floating_ui_utils_dom_getDocumentElement(element),scroll=getNodeScroll(element),body=element.ownerDocument.body,width=floating_ui_utils_max(html.scrollWidth,html.clientWidth,body.scrollWidth,body.clientWidth),height=floating_ui_utils_max(html.scrollHeight,html.clientHeight,body.scrollHeight,body.clientHeight);let x=-scroll.scrollLeft+getWindowScrollBarX(element);const y=-scroll.scrollTop;return"rtl"===getComputedStyle(body).direction&&(x+=floating_ui_utils_max(html.clientWidth,body.clientWidth)-width),{width,height,x,y}}(floating_ui_utils_dom_getDocumentElement(element));else if(isElement(clippingAncestor))rect=function getInnerBoundingClientRect(element,strategy){const clientRect=getBoundingClientRect(element,!0,"fixed"===strategy),top=clientRect.top+element.clientTop,left=clientRect.left+element.clientLeft,scale=isHTMLElement(element)?getScale(element):createCoords(1);return{width:element.clientWidth*scale.x,height:element.clientHeight*scale.y,x:left*scale.x,y:top*scale.y}}(clippingAncestor,strategy);else{const visualOffsets=getVisualOffsets(element);rect={...clippingAncestor,x:clippingAncestor.x-visualOffsets.x,y:clippingAncestor.y-visualOffsets.y}}return floating_ui_utils_rectToClientRect(rect)}function hasFixedPositionAncestor(element,stopNode){const parentNode=getParentNode(element);return!(parentNode===stopNode||!isElement(parentNode)||isLastTraversableNode(parentNode))&&("fixed"===getComputedStyle(parentNode).position||hasFixedPositionAncestor(parentNode,stopNode))}function getRectRelativeToOffsetParent(element,offsetParent,strategy){const isOffsetParentAnElement=isHTMLElement(offsetParent),documentElement=floating_ui_utils_dom_getDocumentElement(offsetParent),isFixed="fixed"===strategy,rect=getBoundingClientRect(element,!0,isFixed,offsetParent);let scroll={scrollLeft:0,scrollTop:0};const offsets=createCoords(0);if(isOffsetParentAnElement||!isOffsetParentAnElement&&!isFixed)if(("body"!==getNodeName(offsetParent)||isOverflowElement(documentElement))&&(scroll=getNodeScroll(offsetParent)),isOffsetParentAnElement){const offsetRect=getBoundingClientRect(offsetParent,!0,isFixed,offsetParent);offsets.x=offsetRect.x+offsetParent.clientLeft,offsets.y=offsetRect.y+offsetParent.clientTop}else documentElement&&(offsets.x=getWindowScrollBarX(documentElement));let htmlX=0,htmlY=0;if(documentElement&&!isOffsetParentAnElement&&!isFixed){const htmlRect=documentElement.getBoundingClientRect();htmlY=htmlRect.top+scroll.scrollTop,htmlX=htmlRect.left+scroll.scrollLeft-getWindowScrollBarX(documentElement,htmlRect)}return{x:rect.left+scroll.scrollLeft-offsets.x-htmlX,y:rect.top+scroll.scrollTop-offsets.y-htmlY,width:rect.width,height:rect.height}}function isStaticPositioned(element){return"static"===getComputedStyle(element).position}function getTrueOffsetParent(element,polyfill){if(!isHTMLElement(element)||"fixed"===getComputedStyle(element).position)return null;if(polyfill)return polyfill(element);let rawOffsetParent=element.offsetParent;return floating_ui_utils_dom_getDocumentElement(element)===rawOffsetParent&&(rawOffsetParent=rawOffsetParent.ownerDocument.body),rawOffsetParent}function getOffsetParent(element,polyfill){const win=getWindow(element);if(isTopLayer(element))return win;if(!isHTMLElement(element)){let svgOffsetParent=getParentNode(element);for(;svgOffsetParent&&!isLastTraversableNode(svgOffsetParent);){if(isElement(svgOffsetParent)&&!isStaticPositioned(svgOffsetParent))return svgOffsetParent;svgOffsetParent=getParentNode(svgOffsetParent)}return win}let offsetParent=getTrueOffsetParent(element,polyfill);for(;offsetParent&&isTableElement(offsetParent)&&isStaticPositioned(offsetParent);)offsetParent=getTrueOffsetParent(offsetParent,polyfill);return offsetParent&&isLastTraversableNode(offsetParent)&&isStaticPositioned(offsetParent)&&!isContainingBlock(offsetParent)?win:offsetParent||function getContainingBlock(element){let currentNode=getParentNode(element);for(;isHTMLElement(currentNode)&&!isLastTraversableNode(currentNode);){if(isContainingBlock(currentNode))return currentNode;if(isTopLayer(currentNode))return null;currentNode=getParentNode(currentNode)}return null}(element)||win}const platform={convertOffsetParentRelativeRectToViewportRelativeRect:function convertOffsetParentRelativeRectToViewportRelativeRect(_ref){let{elements,rect,offsetParent,strategy}=_ref;const isFixed="fixed"===strategy,documentElement=floating_ui_utils_dom_getDocumentElement(offsetParent),topLayer=!!elements&&isTopLayer(elements.floating);if(offsetParent===documentElement||topLayer&&isFixed)return rect;let scroll={scrollLeft:0,scrollTop:0},scale=createCoords(1);const offsets=createCoords(0),isOffsetParentAnElement=isHTMLElement(offsetParent);if((isOffsetParentAnElement||!isOffsetParentAnElement&&!isFixed)&&(("body"!==getNodeName(offsetParent)||isOverflowElement(documentElement))&&(scroll=getNodeScroll(offsetParent)),isHTMLElement(offsetParent))){const offsetRect=getBoundingClientRect(offsetParent);scale=getScale(offsetParent),offsets.x=offsetRect.x+offsetParent.clientLeft,offsets.y=offsetRect.y+offsetParent.clientTop}return{width:rect.width*scale.x,height:rect.height*scale.y,x:rect.x*scale.x-scroll.scrollLeft*scale.x+offsets.x,y:rect.y*scale.y-scroll.scrollTop*scale.y+offsets.y}},getDocumentElement:floating_ui_utils_dom_getDocumentElement,getClippingRect:function getClippingRect(_ref){let{element,boundary,rootBoundary,strategy}=_ref;const clippingAncestors=[..."clippingAncestors"===boundary?isTopLayer(element)?[]:function getClippingElementAncestors(element,cache){const cachedResult=cache.get(element);if(cachedResult)return cachedResult;let result=floating_ui_utils_dom_getOverflowAncestors(element,[],!1).filter((el=>isElement(el)&&"body"!==getNodeName(el))),currentContainingBlockComputedStyle=null;const elementIsFixed="fixed"===getComputedStyle(element).position;let currentNode=elementIsFixed?getParentNode(element):element;for(;isElement(currentNode)&&!isLastTraversableNode(currentNode);){const computedStyle=getComputedStyle(currentNode),currentNodeIsContaining=isContainingBlock(currentNode);currentNodeIsContaining||"fixed"!==computedStyle.position||(currentContainingBlockComputedStyle=null),(elementIsFixed?!currentNodeIsContaining&&!currentContainingBlockComputedStyle:!currentNodeIsContaining&&"static"===computedStyle.position&&currentContainingBlockComputedStyle&&["absolute","fixed"].includes(currentContainingBlockComputedStyle.position)||isOverflowElement(currentNode)&&!currentNodeIsContaining&&hasFixedPositionAncestor(element,currentNode))?result=result.filter((ancestor=>ancestor!==currentNode)):currentContainingBlockComputedStyle=computedStyle,currentNode=getParentNode(currentNode)}return cache.set(element,result),result}(element,this._c):[].concat(boundary),rootBoundary],firstClippingAncestor=clippingAncestors[0],clippingRect=clippingAncestors.reduce(((accRect,clippingAncestor)=>{const rect=getClientRectFromClippingAncestor(element,clippingAncestor,strategy);return accRect.top=floating_ui_utils_max(rect.top,accRect.top),accRect.right=floating_ui_utils_min(rect.right,accRect.right),accRect.bottom=floating_ui_utils_min(rect.bottom,accRect.bottom),accRect.left=floating_ui_utils_max(rect.left,accRect.left),accRect}),getClientRectFromClippingAncestor(element,firstClippingAncestor,strategy));return{width:clippingRect.right-clippingRect.left,height:clippingRect.bottom-clippingRect.top,x:clippingRect.left,y:clippingRect.top}},getOffsetParent,getElementRects:async function(data){const getOffsetParentFn=this.getOffsetParent||getOffsetParent,getDimensionsFn=this.getDimensions,floatingDimensions=await getDimensionsFn(data.floating);return{reference:getRectRelativeToOffsetParent(data.reference,await getOffsetParentFn(data.floating),data.strategy),floating:{x:0,y:0,width:floatingDimensions.width,height:floatingDimensions.height}}},getClientRects:function getClientRects(element){return Array.from(element.getClientRects())},getDimensions:function getDimensions(element){const{width,height}=getCssDimensions(element);return{width,height}},getScale,isElement,isRTL:function isRTL(element){return"rtl"===getComputedStyle(element).direction}};const floating_ui_dom_offset=function(options){return void 0===options&&(options=0),{name:"offset",options,async fn(state){var _middlewareData$offse,_middlewareData$arrow;const{x,y,placement,middlewareData}=state,diffCoords=await async function convertValueToCoords(state,options){const{placement,platform,elements}=state,rtl=await(null==platform.isRTL?void 0:platform.isRTL(elements.floating)),side=floating_ui_utils_getSide(placement),alignment=floating_ui_utils_getAlignment(placement),isVertical="y"===floating_ui_utils_getSideAxis(placement),mainAxisMulti=["left","top"].includes(side)?-1:1,crossAxisMulti=rtl&&isVertical?-1:1,rawValue=floating_ui_utils_evaluate(options,state);let{mainAxis,crossAxis,alignmentAxis}="number"==typeof rawValue?{mainAxis:rawValue,crossAxis:0,alignmentAxis:null}:{mainAxis:rawValue.mainAxis||0,crossAxis:rawValue.crossAxis||0,alignmentAxis:rawValue.alignmentAxis};return alignment&&"number"==typeof alignmentAxis&&(crossAxis="end"===alignment?-1*alignmentAxis:alignmentAxis),isVertical?{x:crossAxis*crossAxisMulti,y:mainAxis*mainAxisMulti}:{x:mainAxis*mainAxisMulti,y:crossAxis*crossAxisMulti}}(state,options);return placement===(null==(_middlewareData$offse=middlewareData.offset)?void 0:_middlewareData$offse.placement)&&null!=(_middlewareData$arrow=middlewareData.arrow)&&_middlewareData$arrow.alignmentOffset?{}:{x:x+diffCoords.x,y:y+diffCoords.y,data:{...diffCoords,placement}}}}},floating_ui_dom_shift=function(options){return void 0===options&&(options={}),{name:"shift",options,async fn(state){const{x,y,placement}=state,{mainAxis:checkMainAxis=!0,crossAxis:checkCrossAxis=!1,limiter={fn:_ref=>{let{x,y}=_ref;return{x,y}}},...detectOverflowOptions}=floating_ui_utils_evaluate(options,state),coords={x,y},overflow=await detectOverflow(state,detectOverflowOptions),crossAxis=floating_ui_utils_getSideAxis(floating_ui_utils_getSide(placement)),mainAxis=floating_ui_utils_getOppositeAxis(crossAxis);let mainAxisCoord=coords[mainAxis],crossAxisCoord=coords[crossAxis];if(checkMainAxis){const maxSide="y"===mainAxis?"bottom":"right";mainAxisCoord=floating_ui_utils_clamp(mainAxisCoord+overflow["y"===mainAxis?"top":"left"],mainAxisCoord,mainAxisCoord-overflow[maxSide])}if(checkCrossAxis){const maxSide="y"===crossAxis?"bottom":"right";crossAxisCoord=floating_ui_utils_clamp(crossAxisCoord+overflow["y"===crossAxis?"top":"left"],crossAxisCoord,crossAxisCoord-overflow[maxSide])}const limitedCoords=limiter.fn({...state,[mainAxis]:mainAxisCoord,[crossAxis]:crossAxisCoord});return{...limitedCoords,data:{x:limitedCoords.x-x,y:limitedCoords.y-y,enabled:{[mainAxis]:checkMainAxis,[crossAxis]:checkCrossAxis}}}}}},floating_ui_dom_flip=function(options){return void 0===options&&(options={}),{name:"flip",options,async fn(state){var _middlewareData$arrow,_middlewareData$flip;const{placement,middlewareData,rects,initialPlacement,platform,elements}=state,{mainAxis:checkMainAxis=!0,crossAxis:checkCrossAxis=!0,fallbackPlacements:specifiedFallbackPlacements,fallbackStrategy="bestFit",fallbackAxisSideDirection="none",flipAlignment=!0,...detectOverflowOptions}=floating_ui_utils_evaluate(options,state);if(null!=(_middlewareData$arrow=middlewareData.arrow)&&_middlewareData$arrow.alignmentOffset)return{};const side=floating_ui_utils_getSide(placement),initialSideAxis=floating_ui_utils_getSideAxis(initialPlacement),isBasePlacement=floating_ui_utils_getSide(initialPlacement)===initialPlacement,rtl=await(null==platform.isRTL?void 0:platform.isRTL(elements.floating)),fallbackPlacements=specifiedFallbackPlacements||(isBasePlacement||!flipAlignment?[getOppositePlacement(initialPlacement)]:function getExpandedPlacements(placement){const oppositePlacement=getOppositePlacement(placement);return[floating_ui_utils_getOppositeAlignmentPlacement(placement),oppositePlacement,floating_ui_utils_getOppositeAlignmentPlacement(oppositePlacement)]}(initialPlacement)),hasFallbackAxisSideDirection="none"!==fallbackAxisSideDirection;!specifiedFallbackPlacements&&hasFallbackAxisSideDirection&&fallbackPlacements.push(...function getOppositeAxisPlacements(placement,flipAlignment,direction,rtl){const alignment=floating_ui_utils_getAlignment(placement);let list=function getSideList(side,isStart,rtl){const lr=["left","right"],rl=["right","left"],tb=["top","bottom"],bt=["bottom","top"];switch(side){case"top":case"bottom":return rtl?isStart?rl:lr:isStart?lr:rl;case"left":case"right":return isStart?tb:bt;default:return[]}}(floating_ui_utils_getSide(placement),"start"===direction,rtl);return alignment&&(list=list.map((side=>side+"-"+alignment)),flipAlignment&&(list=list.concat(list.map(floating_ui_utils_getOppositeAlignmentPlacement)))),list}(initialPlacement,flipAlignment,fallbackAxisSideDirection,rtl));const placements=[initialPlacement,...fallbackPlacements],overflow=await detectOverflow(state,detectOverflowOptions),overflows=[];let overflowsData=(null==(_middlewareData$flip=middlewareData.flip)?void 0:_middlewareData$flip.overflows)||[];if(checkMainAxis&&overflows.push(overflow[side]),checkCrossAxis){const sides=function floating_ui_utils_getAlignmentSides(placement,rects,rtl){void 0===rtl&&(rtl=!1);const alignment=floating_ui_utils_getAlignment(placement),alignmentAxis=floating_ui_utils_getAlignmentAxis(placement),length=floating_ui_utils_getAxisLength(alignmentAxis);let mainAlignmentSide="x"===alignmentAxis?alignment===(rtl?"end":"start")?"right":"left":"start"===alignment?"bottom":"top";return rects.reference[length]>rects.floating[length]&&(mainAlignmentSide=getOppositePlacement(mainAlignmentSide)),[mainAlignmentSide,getOppositePlacement(mainAlignmentSide)]}(placement,rects,rtl);overflows.push(overflow[sides[0]],overflow[sides[1]])}if(overflowsData=[...overflowsData,{placement,overflows}],!overflows.every((side=>side<=0))){var _middlewareData$flip2,_overflowsData$filter;const nextIndex=((null==(_middlewareData$flip2=middlewareData.flip)?void 0:_middlewareData$flip2.index)||0)+1,nextPlacement=placements[nextIndex];if(nextPlacement)return{data:{index:nextIndex,overflows:overflowsData},reset:{placement:nextPlacement}};let resetPlacement=null==(_overflowsData$filter=overflowsData.filter((d=>d.overflows[0]<=0)).sort(((a,b)=>a.overflows[1]-b.overflows[1]))[0])?void 0:_overflowsData$filter.placement;if(!resetPlacement)switch(fallbackStrategy){case"bestFit":{var _overflowsData$filter2;const placement=null==(_overflowsData$filter2=overflowsData.filter((d=>{if(hasFallbackAxisSideDirection){const currentSideAxis=floating_ui_utils_getSideAxis(d.placement);return currentSideAxis===initialSideAxis||"y"===currentSideAxis}return!0})).map((d=>[d.placement,d.overflows.filter((overflow=>overflow>0)).reduce(((acc,overflow)=>acc+overflow),0)])).sort(((a,b)=>a[1]-b[1]))[0])?void 0:_overflowsData$filter2[0];placement&&(resetPlacement=placement);break}case"initialPlacement":resetPlacement=initialPlacement}if(placement!==resetPlacement)return{reset:{placement:resetPlacement}}}return{}}}},floating_ui_dom_computePosition=(reference,floating,options)=>{const cache=new Map,mergedOptions={platform,...options},platformWithCache={...mergedOptions.platform,_c:cache};return(async(reference,floating,config)=>{const{placement="bottom",strategy="absolute",middleware=[],platform}=config,validMiddleware=middleware.filter(Boolean),rtl=await(null==platform.isRTL?void 0:platform.isRTL(floating));let rects=await platform.getElementRects({reference,floating,strategy}),{x,y}=computeCoordsFromPlacement(rects,placement,rtl),statefulPlacement=placement,middlewareData={},resetCount=0;for(let i=0;i<validMiddleware.length;i++){const{name,fn}=validMiddleware[i],{x:nextX,y:nextY,data,reset}=await fn({x,y,initialPlacement:placement,placement:statefulPlacement,strategy,middlewareData,rects,platform,elements:{reference,floating}});x=null!=nextX?nextX:x,y=null!=nextY?nextY:y,middlewareData={...middlewareData,[name]:{...middlewareData[name],...data}},reset&&resetCount<=50&&(resetCount++,"object"==typeof reset&&(reset.placement&&(statefulPlacement=reset.placement),reset.rects&&(rects=!0===reset.rects?await platform.getElementRects({reference,floating,strategy}):reset.rects),({x,y}=computeCoordsFromPlacement(rects,statefulPlacement,rtl))),i=-1)}return{x,y,placement:statefulPlacement,strategy,middlewareData}})(reference,floating,{...mergedOptions,platform:platformWithCache})}},"../node_modules/.pnpm/@floating-ui+react-dom@1.3.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{we:()=>useFloating});var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/.pnpm/@floating-ui+dom@1.6.11/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");var index="undefined"!=typeof document?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function useLatestRef(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);return index((()=>{ref.current=value})),ref}function useFloating(options){void 0===options&&(options={});const{placement="bottom",strategy="absolute",middleware=[],platform,whileElementsMounted,open}=options,[data,setData]=react__WEBPACK_IMPORTED_MODULE_0__.useState({x:null,y:null,strategy,placement,middlewareData:{},isPositioned:!1}),[latestMiddleware,setLatestMiddleware]=react__WEBPACK_IMPORTED_MODULE_0__.useState(middleware);deepEqual(latestMiddleware,middleware)||setLatestMiddleware(middleware);const referenceRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),floatingRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),dataRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(data),whileElementsMountedRef=useLatestRef(whileElementsMounted),platformRef=useLatestRef(platform),[reference,_setReference]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[floating,_setFloating]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),setReference=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{referenceRef.current!==node&&(referenceRef.current=node,_setReference(node))}),[]),setFloating=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{floatingRef.current!==node&&(floatingRef.current=node,_setFloating(node))}),[]),update=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(!referenceRef.current||!floatingRef.current)return;const config={placement,strategy,middleware:latestMiddleware};platformRef.current&&(config.platform=platformRef.current),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.rD)(referenceRef.current,floatingRef.current,config).then((data=>{const fullData={...data,isPositioned:!0};isMountedRef.current&&!deepEqual(dataRef.current,fullData)&&(dataRef.current=fullData,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>{setData(fullData)})))}))}),[latestMiddleware,placement,strategy,platformRef]);index((()=>{!1===open&&dataRef.current.isPositioned&&(dataRef.current.isPositioned=!1,setData((data=>({...data,isPositioned:!1}))))}),[open]);const isMountedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]),index((()=>{if(reference&&floating){if(whileElementsMountedRef.current)return whileElementsMountedRef.current(reference,floating,update);update()}}),[reference,floating,update,whileElementsMountedRef]);const refs=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceRef,floating:floatingRef,setReference,setFloating})),[setReference,setFloating]),elements=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference,floating})),[reference,floating]);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({...data,update,refs,elements,reference:setReference,floating:setFloating})),[data,update,refs,elements,setReference,setFloating])}},"../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);