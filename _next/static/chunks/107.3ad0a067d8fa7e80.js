"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[107],{5107:function(e,n,t){t.r(n),t.d(n,{default:function(){return ye}});var r=t(5893),i=t(7294),a=t(8456),o=t(1536),c=t(6042),s=t(9396),u=t(7534),l=t(6443),d=function(e){var n=e.ampSDK,t=(0,i.useState)(n.getValue()),a=t[0],o=t[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{label:"ID",value:a.id,InputLabelProps:{shrink:!0},onChange:function(e){var t=e.target.value;o((0,s.Z)((0,c.Z)({},a),{id:t})),n.setValue((0,s.Z)((0,c.Z)({},a),{id:t}))},sx:{width:"100%",marginTop:"6px"}}),(0,r.jsx)(u.Z,{label:"Name",value:a.name,InputLabelProps:{shrink:!0},onChange:function(e){var t=e.target.value;o((0,s.Z)((0,c.Z)({},a),{name:t})),n.setValue((0,s.Z)((0,c.Z)({},a),{name:t}))},sx:{width:"100%",marginTop:"6px"}}),(0,r.jsx)(u.Z,{label:"Slug",value:a.slug,InputLabelProps:{shrink:!0},onChange:function(e){var t=e.target.value;o((0,s.Z)((0,c.Z)({},a),{slug:t})),n.setValue((0,s.Z)((0,c.Z)({},a),{name:t}))},sx:{width:"100%",marginTop:"6px"}}),(0,r.jsx)(l.Z,{disablePortal:!0,id:"combo-box-demo",options:n.getValues(),getOptionLabel:function(e){return e.nameId||""},sx:{width:"100%",marginTop:"6px"},value:a,onChange:function(e,t){null!==t?(n.setValue((0,s.Z)((0,c.Z)({},t),{name:t.name.replace(/\(.*\)\s/,"")})),o(t)):(n.clearValue(),o({name:"",id:""}))},onClose:function(){n.setHeight(400)},onOpen:function(){n.setHeight(540)},renderInput:function(e){return(0,r.jsx)(u.Z,(0,s.Z)((0,c.Z)({},e),{label:n.label}))}})]})},f=function(e){var n=e.ampSDK,t=(0,i.useState)(n.getValue()),a=t[0],o=t[1];return(0,r.jsx)(l.Z,{multiple:!0,id:"tags-standard",options:n.getValues(),getOptionLabel:function(e){return e.name},value:a,sx:{width:"99%"},onChange:function(e,t){n.setValue(t),o(t)},onClose:function(){n.setHeight(160)},onOpen:function(){n.setHeight(540)},renderInput:function(e){return(0,r.jsx)(u.Z,(0,s.Z)((0,c.Z)({},e),{variant:"standard",label:n.label}))}})},p=t(5861),v=t(7677),g=t(8048),h=t(3508),m=t(6215),x=t(3946),Z=t(1733),y=[],b=function(e){return e.map((function(e){var n=void 0;return e.children&&e.children.length>0&&(n=b(e.children)),y.push({id:e.id,name:e.name}),(0,r.jsx)(v.Z,{nodeId:e.id,label:e.name,children:n},e.id)}))},j=function(e){var n=e.ampSDK,t=(0,i.createRef)(),a=(0,i.useState)(n.getValue()),o=a[0],c=a[1],s=(0,i.useState)(200),u=(s[0],s[1]),l=(0,i.useState)(.1),d=l[0],f=l[1];(0,i.useEffect)((function(){var e=t.current;u(e.clientHeight+100),void 0!==n&&n.setHeight(e.clientHeight+100)}),[d]);var v=o,j=null===y||void 0===y?void 0:y.find((function(e){return e.id===o}));return j&&(v="".concat(j.name," (").concat(j.id,")")),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{ref:t,children:[(0,r.jsxs)(p.Z,{variant:"body1",component:"p",children:["Selected category: ",v,""!=o?(0,r.jsx)(x.Z,{"aria-label":"delete",onClick:function(){c(""),n.clearValue()},children:(0,r.jsx)(Z.Z,{})}):""]}),(0,r.jsx)(g.Z,{defaultCollapseIcon:(0,r.jsx)(h.Z,{}),defaultExpandIcon:(0,r.jsx)(m.Z,{}),onNodeSelect:function(e,t){var r;e&&(null===e||void 0===e?void 0:e.target)&&"DIV"===(null===e||void 0===e||null===(r=e.target)||void 0===r?void 0:r.nodeName)&&(n.setValue(t),c(t))},onClick:function(){setTimeout((function(){f(Math.random())}),300)},selected:o,children:b(n.getValues())})]})})},S=t(7568),C=t(9534),w=t(828),k=t(9815),V=t(7582),T=t(657),E=t(6242),I=t(4267),P=t(4808),z=t(1703),A=t(44),_=t(7357),D=t(5450),H=t(872),K=t(6964),L=t(2761),F=t(7297),N=t(8557),O=t(8462),R=t(6113),W=t(8987),M=t(9661),B=t(9953),q=t(9007),G=t(8078);function U(){var e=(0,F.Z)(["\n    cursor: pointer;\n    border-radius: 4px;\n    border: 1px solid #ddd;\n    overflow: hidden;\n    position: relative;\n    img {\n        ratio: 1;\n        height: 100%;\n        opacity: 1;\n        filter: grayscale(0%);\n        transition: all 0.8s ease;\n        &.hidden {\n            opacity: 0;\n        }\n    }\n    .skel {\n        display: none;\n        position: absolute;\n        top: 0;\n        &.loading {\n            display: inline-block;\n        }\n    }\n    .actions {\n        color: #f11;\n        position: absolute;\n        display: flex;\n        flex-direction: column;\n        top: 0;\n        right: 0;\n        z-index: 1;\n        fill: none;\n        outline: 2;\n    }\n    .text-box {\n        position: absolute;\n        bottom: 9px;\n        left: 0;\n        right: 0;\n        margin: 0 9px;\n        borderradius: 6px;\n        display: inline-block;\n        padding: 6px 10px;\n        transition: all 0.8s ease;\n        border-radius: 3px;\n        background: rgba(255, 255, 255, 0.75);\n        z-index: 1;\n    }\n    &:hover {\n        text-decoration: none;\n        img {\n            filter: grayscale(65%);\n        }\n        .text-box {\n            background: rgba(255, 255, 255, 0.95);\n            border-color: #aaa;\n        }\n    }\n"]);return U=function(){return e},e}var Y,Q=(0,t(6829).Z)(_.Z)(U()),$=function(e){var n=e.product,t=e.size,a=e.selectProduct,o=void 0===a?void 0:a,c=e.removeProduct,s=void 0===c?void 0:c,u=e.updateCard,l=void 0===u?void 0:u,d=(0,i.useState)(n.selectedVariant?n.selectedVariant:n.variants[0]),f=d[0],v=d[1],g=(0,i.useState)(!1),h=g[0],m=g[1],y=(0,w.Z)(i.useState(0),2),b=y[0],j=y[1],S=(0,i.useRef)(null),C=(0,i.useState)(!1),k=C[0],V=C[1],E=(0,i.useState)(f.images&&f.images[0]&&f.images[0].url||null),I=E[0],P=E[1];(0,i.useEffect)((function(){var e=n.selectedVariant?n.selectedVariant:n.variants[0];v(e),e.images&&e.images[0]&&I!==e.images[0].url&&(V(!1),P(e.images[0].url))}),[n,I]);var z=function(){void 0!==s&&s(n)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(T.Z,{fullWidth:!0,maxWidth:"xl",open:h,onClose:function(){m(!1)},children:[(0,r.jsx)(N.Z,{children:"Select Variant"}),(0,r.jsx)(O.Z,{sx:{width:"100%",maxWidth:600},children:n.variants.map((function(e,t){return(0,r.jsxs)(R.Z,{alignItems:"flex-start",selected:b===t,onClick:function(){return function(e,t){v(e),j(t),n.selectedVariant=e,void 0!==l&&l(n)}(e,t)},children:[(0,r.jsx)(W.Z,{children:(0,r.jsx)(M.Z,{variant:"square",alt:n.name,src:e.images&&e.images[0]&&e.images[0].url||null})}),(0,r.jsx)(B.Z,{primary:e.sku})]},t)}))})]}),(0,r.jsxs)(Q,{height:t,width:t,sx:void 0!==s?{cursor:"move"}:{},children:[function(){if(void 0!==s)return(0,r.jsx)("div",{className:"actions",children:(0,r.jsx)(x.Z,{onClick:z,"aria-label":"delete",size:"small",children:(0,r.jsx)(Z.Z,{fontSize:"inherit"})})})}(),(0,r.jsxs)(q.Z,{ref:S,onClick:function(){void 0!==o&&o(n)},children:[(0,r.jsx)("img",{onLoad:function(){V(!0)},className:k?"":"hidden",src:"".concat(f.images&&f.images[0]&&f.images[0].url,"?sw=").concat(2*t,"&fit=crop&auto=format"),srcSet:"".concat(f.images&&f.images[0]&&f.images[0].url,"?sw=").concat(2*t,"&fit=crop&auto=format&dpr=2 2x"),alt:n.name}),(0,r.jsx)(G.Z,{className:k?"skel":"loading skel",variant:"rounded",width:"100%",height:t}),(0,r.jsxs)("div",{className:"text-box",children:[(0,r.jsx)(p.Z,{mb:.5,variant:"h3",fontSize:"10px",children:n.name}),(0,r.jsxs)(p.Z,{variant:"h4",fontStyle:"italic",fontSize:"10px",children:["(",n.id,")"]})]})]})]})]})},J=t(9272),X=t(9294),ee="card",ne={marginBottom:".5rem",backgroundColor:"white",cursor:"move !important"},te=function(e){var n=e.id,t=e.product,a=e.index,o=e.size,u=e.dataType,l=e.moveCard,d=e.removeProduct,f=e.updateCard,p=(0,i.useRef)(null),v=(0,w.Z)((0,J.L)({accept:ee,collect:function(e){return{handlerId:e.getHandlerId()}},hover:function(e,n){var t;if(p.current){var r=e.index,i=a;if(r!==i){var o=null===(t=p.current)||void 0===t?void 0:t.getBoundingClientRect(),c=(o.bottom-o.top)/2,s=n.getClientOffset().y-o.top;r<i&&s<c||r>i&&s>c||(l(r,i),e.index=i)}}}}),2),g=v[0].handlerId,h=v[1],m=(0,w.Z)((0,X.c)({type:ee,item:function(){return{id:n,index:a}},collect:function(e){return{isDragging:e.isDragging()}}}),2),x=m[0].isDragging?0:1;return(0,m[1])(h(p)),(0,r.jsx)("div",{ref:p,style:(0,s.Z)((0,c.Z)({},ne),{opacity:x,height:o,width:o}),"data-handler-id":g,children:(0,r.jsx)($,{product:t,removeProduct:d,updateCard:f,size:o,dataType:u},t.id)})},re=t(7145),ie=t.n(re),ae=t(8493),oe=t(6963),ce=function(e){var n=e.selectedProducts,t=e.updateSelected,a=e.removeProduct,o=e.dataType,c=(0,i.useState)(n),s=c[0],u=c[1],l=(0,i.useCallback)((function(e,n){u((function(t){return ie()(t,{$splice:[[e,1],[n,0,t[e]]]})}))}),[]),d=function(e){var n=s.find((function(n){return n.id===e.id}));n&&(n.selectedVariant=e.selectedVariant),t(s)};return(0,i.useEffect)((function(){t(s)}),[s,t]),(0,i.useEffect)((function(){u(n)}),[n]),(0,r.jsx)(r.Fragment,{children:s.length?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(D.Z,{sx:{width:"100%",display:"flex",flexWrap:"wrap"},rowHeight:140,children:(0,r.jsx)(ae.W,{backend:oe.PD,children:s.map((function(e,n){return(0,r.jsx)(te,{index:n,id:e.id,product:e,moveCard:l,removeProduct:a,updateCard:d,dataType:o,size:140},e.id)}))})})}):(0,r.jsx)(r.Fragment,{})})},se=t(6486),ue=t(2993),le=t(4924);function de(e){var n=e.children,t=e.value,i=e.index,a=(0,C.Z)(e,["children","value","index"]);return(0,r.jsx)("div",(0,s.Z)((0,c.Z)({role:"tabpanel",hidden:t!==i,id:"simple-tabpanel-".concat(i),"aria-labelledby":"simple-tab-".concat(i)},a),{children:t===i&&n}))}!function(e){e.flatten=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"categories",r=(n[t]||[]).reduce((function(n,r){return Array.isArray(r[t])&&r[t].length?(0,c.Z)({},n,e(r,t)):(0,s.Z)((0,c.Z)({},n),(0,le.Z)({},r.id,r))}),{});return(0,c.Z)((0,le.Z)({},n.id,n),r)},e.flatCategoryOptions=function(e){var n=[];return function e(t){Array.from(t,(function(t){n.push({name:"("+t.parent_category_id+") - "+t.name,id:t.id}),t.categories&&e(t.categories)}))}(e),n},e.catToChild=function e(n){return n.map((function(n){var t=void 0;return n.categories&&n.categories.length>0&&(t=e(n.categories)),void 0===t?{id:n.id,name:n.name}:{id:n.id,name:n.name,children:t}}))},e.segmentForm=function(e){for(var n=[],t=0;t<e.length;t++)n.push({name:e[t].id,id:e[t].id});return n},e.errorToString=function(e){var n="https://github.com/amplience/dc-extension-ecomm-toolkit/blob/main/docs/errors.md";if(e.type){switch(e.type){case ue.CodecErrorType.Cors:return"Cross-Origin Request Blocked. Make sure that you have properly configured your vendor to accept requests from ".concat(window.location.origin,".\n\nSee ").concat(n,"#cors for more information.");case ue.CodecErrorType.NotAuthenticated:case ue.CodecErrorType.AuthError:case ue.CodecErrorType.AuthUnreachable:return"Authentication error, make sure your authentication params are properly configured.\n\nSee ".concat(n,"#authentication-error for more information.\n\n").concat(e.message);case ue.CodecErrorType.ApiError:case ue.CodecErrorType.ApiGraphQL:return"API Error, make sure your params are properly configured.\n\nSee ".concat(n,"#api-error for more information.\n\n").concat(e.message);case ue.CodecErrorType.NotSupported:return"Method not supported by vendor.\n\nSee ".concat(n,"#not-supported for more information.\n\n").concat(e.message)}return"Encountered error '".concat(ue.CodecErrorType[e.type],"'. See ").concat(n,"#other for more information.\n\n").concat(e.message)}return e.toString()}}(Y||(Y={}));var fe,pe=function(e,n){if(null!=e){var t=e.getTotal();if(null!=t)return[!0,Math.ceil(t/n)];var r=e.getMaxPage();if(r>0)return[!1,r+1]}return[!0,0]},ve=function(e){var n=e.ampSDK,t=(0,i.useState)(n.getStoredValue())[0],o=(0,i.useState)(0),d=o[0],f=o[1],v=(0,i.useState)(""),g=v[0],h=v[1],m=(0,i.useState)(!0),Z=m[0],y=m[1],b=(0,i.useState)(!1),j=b[0],C=b[1],F=(0,i.useState)(!1),N=F[0],O=F[1],R=(0,i.useState)(""),W=R[0],M=R[1],B=(0,i.useState)(),q=B[0],G=B[1],U=(0,i.useState)([]),Q=U[0],J=U[1],X=(0,i.useState)(),ee=X[0],ne=X[1],te=(0,i.useState)([]),re=te[0],ie=te[1],ae=(0,i.useRef)(null),oe=(0,i.useRef)(null),le=(0,i.useState)(200),fe=le[0],ve=le[1],ge=12,he=(0,w.Z)(i.useState(1),2),me=he[0],xe=he[1],Ze=(0,w.Z)(i.useState(1),2),ye=Ze[0],be=Ze[1],je=(0,w.Z)(i.useState(pe(q,ge)),2),Se=je[0],Ce=je[1],we=(0,i.useState)({id:0})[0],ke=function(e){M(Y.errorToString(e)),O(!0)},Ve=function(e,n){G(e),C(!0),xe(n);var t=++we.id;e.getPage(n-1).then((function(r){t===we.id&&(J(r),C(!1),be(n),Ce(pe(e,ge)))})).catch((function(e){C(!1)}))},Te=function(){var e=(0,S.Z)((function(e){var t;return(0,V.__generator)(this,(function(r){if(J([]),""!==e)try{t=new ue.PageCache(n.commerceApi.getProducts.bind(n.commerceApi),{category:e},ge),Ve(t,1)}catch(i){ke(i)}return[2]}))}));return function(n){return e.apply(this,arguments)}}(),Ee=function(){var e=(0,S.Z)((function(){var e;return(0,V.__generator)(this,(function(t){if(J([]),""!==ae.current.value)try{e=new ue.PageCache(n.commerceApi.getProducts.bind(n.commerceApi),{keyword:ae.current.value},ge),Ve(e,1)}catch(r){ke(r)}return[2]}))}));return function(){return e.apply(this,arguments)}}(),Ie=function(e){("objects"===(null===n||void 0===n?void 0:n.type)||"strings"===(null===n||void 0===n?void 0:n.type))&&n.maxItems&&re.length>=n.maxItems?(M("You've reached the maximum amount of selectable items"),O(!0)):re.find((function(n){return n.selectedVariant.sku?n.selectedVariant.sku===e.variants[0].sku:n.selectedVariant.id===e.variants[0].id}))?(M("You've already selected this item"),O(!0)):"string"===(null===n||void 0===n?void 0:n.type)||"object"===(null===n||void 0===n?void 0:n.type)?ie((function(n){return[(0,s.Z)((0,c.Z)({},e),{deleteKey:n.length,selectedVariant:e.variants[0]})]})):ie((function(n){return(0,k.Z)(n).concat([(0,s.Z)((0,c.Z)({},e),{deleteKey:n.length,selectedVariant:e.variants[0]})])}))},Pe=(0,i.useCallback)((function(){var e=oe.current.clientHeight;ve(e)}),[oe]),ze=(0,i.useCallback)((function(e){if(!Z)if(e.length){var t;switch(null===n||void 0===n?void 0:n.type){case"string":t=e.map((function(e){return e.id}))[0];break;case"strings":t=e.map((function(e){return e.id}));break;case"object":var r;t={id:e[0].id,variant:null===(r=e[0].selectedVariant)||void 0===r?void 0:r.sku};break;case"objects":var i=e.map((function(e){var n;return{id:e.id,variant:null===(n=e.selectedVariant)||void 0===n?void 0:n.sku}}));t=i}(0,se.isEqual)(ee,t)||(n.setValue(t),ne(t))}else null!=ee&&(n.clearValue(),ne(void 0))}),[n,Z,ee]);return(0,i.useEffect)((function(){d||(ae.current.value=""),J([]),Ce([!0,0]),C(!1),we.id++}),[d,we]),(0,i.useEffect)((function(){setTimeout((function(){Pe()}),100)}),[Q,re,Pe]),(0,i.useEffect)((function(){return window.addEventListener("resize",Pe),function(){window.removeEventListener("resize",Pe)}}),[Pe]),(0,i.useEffect)((function(){n.setHeight(fe+100)}),[fe,n]),(0,i.useEffect)((function(){ze(re)}),[re]),(0,i.useEffect)((function(){var e=function(){var e=(0,S.Z)((function(e){var t;return(0,V.__generator)(this,(function(r){switch(r.label){case 0:if(""===e||null==e)return[2,[]];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,n.commerceApi.getProducts({productIds:e})];case 2:return[2,r.sent().filter((function(e){return null!==e}))];case 3:return t=r.sent(),ke(t),[2,[]];case 4:return[2]}}))}));return function(n){return e.apply(this,arguments)}}();if(void 0!=t){var r;switch(null===n||void 0===n?void 0:n.type){case"string":r=n.isEnforced()?t.split("/").pop():t;break;case"strings":r=t.join(",");break;case"object":r=t.id;break;case"objects":r=t.map((function(e){return e.id})).join(",")}y(!0),e(r).then((function(e){y(!1);var n=e.map((function(e,n){var r=e.variants.find((function(e){return e.id===t.variant}));return(0,s.Z)((0,c.Z)({},e),{deleteKey:n,selectedVariant:void 0!==r?r:e.variants[0]})}));ie(n)}))}else y(!1)}),[t,n]),(0,r.jsxs)("div",{ref:oe,children:[(0,r.jsx)(T.Z,{open:N,onClose:function(){return O(!1)},children:(0,r.jsx)(E.Z,{variant:"outlined",children:(0,r.jsx)(I.Z,{style:{whiteSpace:"pre-wrap"},children:W})})}),(0,r.jsx)(P.Z,{sx:{color:"#77f",backgroundColor:"rgba(200,200,200,0.6)",zIndex:function(e){return e.zIndex.drawer+1}},open:Z,children:(0,r.jsx)(a.Z,{color:"inherit"})}),re.length?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.Z,{mt:1,variant:"h3",fontSize:"12px",fontWeight:"normal",color:"#333",children:"Selected Products"}),(0,r.jsx)(ce,{selectedProducts:re,dataType:null===n||void 0===n?void 0:n.type,updateSelected:ze,removeProduct:function(e){ie(re.filter((function(n){return n.deleteKey!==e.deleteKey})))}})]}):(0,r.jsx)(r.Fragment,{}),(0,r.jsxs)(z.Z,{value:d,onChange:function(e,n){f(n)},"aria-label":"search mode tabs",sx:{marginBottom:"14px"},children:[(0,r.jsx)(A.Z,{label:"Keyword Search"}),(0,r.jsx)(A.Z,{label:"Category Search"})]}),(0,r.jsx)(de,{value:d,index:0,children:(0,r.jsxs)(_.Z,{sx:{display:"flex"},children:[(0,r.jsx)(u.Z,{inputRef:ae,size:"small",sx:{ml:1,flex:1},label:"Keyword Search (esc. to clear)",variant:"outlined",inputProps:{"aria-label":"keyword search (escape key to clear)"},onKeyDown:function(e){if(13===e.keyCode)return Ee(),!1;27===e.keyCode&&(h(""),J([]))},onChange:function(e){h(e.target.value)},value:g}),(0,r.jsx)(x.Z,{type:"button",onClick:Ee,sx:{ml:"5px",p:"8px"},"aria-label":"search",children:(0,r.jsx)(L.Z,{})})]})}),(0,r.jsx)(de,{value:d,index:1,children:(0,r.jsx)(l.Z,{disablePortal:!0,id:"combo-box-demo",size:"small",options:n.getValues(),getOptionLabel:function(e){return e.name||""},sx:{width:"100%",marginTop:"0",paddingLeft:"8px"},value:t,onChange:function(e,n){null!==n&&(console.log("VALUE",n),Te(n))},onClose:function(){n.setHeight(Math.max(fe+100,260))},onOpen:function(){n.setHeight(Math.max(fe+100,540))},renderInput:function(e){return(0,r.jsx)(u.Z,(0,s.Z)((0,c.Z)({},e),{label:n.label}))}})}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)(P.Z,{sx:{color:"#77f",backgroundColor:"rgba(200,200,200,0.6)",zIndex:function(e){return e.zIndex.drawer+1},position:"absolute"},open:j,children:(0,r.jsx)(a.Z,{color:"inherit"})}),Se[1]>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.Z,{mt:2,variant:"h3",fontSize:"12px",fontWeight:"normal",color:"#666",children:"Search Results"}),(0,r.jsx)(D.Z,{sx:{width:"100%",display:"flex",flexWrap:"wrap"},rowHeight:140,children:Q.map((function(e,t){return(0,r.jsx)($,{dataType:null===n||void 0===n?void 0:n.type,size:140,product:e,selectProduct:Ie},t+ye*ge+e.id)}))}),Se[1]>1&&(0,r.jsx)(H.Z,{count:Se[1],page:me,onChange:function(e,n){C(!0),xe(n);var t=++we.id;null===q||void 0===q||q.getPage(n-1).then((function(e){t===we.id&&(J(e),C(!1),be(n),Ce(pe(q,ge)))})).catch((function(e){C(!1)}))},defaultPage:1,renderItem:function(e){return(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)(K.Z,(0,c.Z)({},e)),!Se[0]&&"page"===e.type&&e.page===Se[1]&&(0,r.jsx)(K.Z,{type:"end-ellipsis"})]})}})]}):(0,r.jsx)(r.Fragment,{})]})]})},ge=t(3708),he=function(){var e=(0,S.Z)((function(e){var n;return(0,V.__generator)(this,(function(t){switch(t.label){case 0:return(n=fe)?[3,2]:[4,(0,ue.getCommerceAPI)(e)];case 1:n=t.sent(),t.label=2;case 2:return[2,fe=n]}}))}));return function(n){return e.apply(this,arguments)}}(),me=function(){var e=(0,S.Z)((function(){var e,n,t,r,i,a,o,u,l,d,f,p,v,g,h,m,x,Z,y;return(0,V.__generator)(this,(function(b){switch(b.label){case 0:return r=function(){var e;return null===(e=o.field.schema)||void 0===e?void 0:e.pattern},i=function(e){return r()?e.split("/").pop():e},a=function(e){var n=e;if("string"!==typeof e&&(n=e.id),r()){var t,i=null===(t=o.field.schema)||void 0===t?void 0:t.pattern.split("/");return i.pop(),"".concat(i.join("/"),"/").concat(n)}return n},[4,(0,ge.S1)({debug:!0})];case 1:return[4,(o=b.sent()).field.getValue()];case 2:return u=b.sent(),[4,o.field.getValue()];case 3:return l=b.sent(),d=[],f=null===(e=o.field.schema)||void 0===e?void 0:e.title,p=null===(n=o.field.schema)||void 0===n?void 0:n.description,v=o.params,g=v.instance,h=v.installation,[4,he(h)];case 4:return m=b.sent(),"category"!==g.data?[3,9]:"tree"!==g.view?[3,6]:[4,m.getCategoryTree({})];case 5:return d=b.sent(),[3,8];case 6:return[4,m.getCategoryTree({})];case 7:x=b.sent(),d=(0,ue.flattenCategories)(x).map((function(e){return{nameId:"".concat(e.id+"-"+e.name),name:"".concat(e.name),slug:e.slug,id:e.id}})),u="string"===g.type&&u?"multi"===g.view?d.filter((function(e){return u.includes(e.id)})):d.find((function(e){return u.includes(e.id)})):u,b.label=8;case 8:return[3,13];case 9:return"product"!==g.data?[3,11]:[4,m.getCategoryTree({})];case 10:return Z=b.sent(),d=(0,ue.flattenCategories)(Z).map((function(e){return{name:"".concat(e.name),slug:e.slug,id:e.id}})),u="string"===g.type&&u?d.find((function(e){return i(u)==e.id})):u,[3,13];case 11:return[4,m.getCustomerGroups({})];case 12:d=b.sent(),u="string"===g.type&&u?"multi"===g.view?d.filter((function(e){return u.includes(e.id)})):d.find((function(e){return u.includes(e.id)})):u,b.label=13;case 13:return y=(0,s.Z)((0,c.Z)({},g),{getTitle:function(){return f},getDescription:function(){return p},getValue:function(){return u},getValues:function(){return d},getStoredValue:function(){return l},setValue:function(){var e=(0,S.Z)((function(e){var n;return(0,V.__generator)(this,(function(t){switch(t.label){case 0:return e?(n=e,"string"===g.type&&(n=Array.isArray(e)?e.map(a):a(e)),[4,o.field.setValue(n)]):[3,2];case 1:t.sent(),u=e,t.label=2;case 2:return[2]}}))}));return function(n){return e.apply(this,arguments)}}(),clearValue:(0,S.Z)((function(){return(0,V.__generator)(this,(function(e){switch(e.label){case 0:return[4,o.field.setValue("")];case 1:return e.sent(),u={name:"",id:""},[2]}}))})),setHeight:function(e){o.frame.setHeight(e)},isEnforced:function(){var e;return null===(e=o.field.schema)||void 0===e?void 0:e.pattern},commerceApi:m,maxItems:null===(t=o.field.schema)||void 0===t?void 0:t.maxItems}),[2,y]}}))}));return function(){return e.apply(this,arguments)}}(),xe=me,Ze=t(1519);var ye=function(){var e=(0,i.useState)(void 0),n=e[0],t=e[1],c=(0,i.useState)(void 0),s=c[0],u=c[1];(0,i.useEffect)((function(){xe().then(t).catch((function(e){u(Y.errorToString(e))}))}),[n]);var l=(0,r.jsx)(r.Fragment,{});return l=s?(0,r.jsx)(T.Z,{open:!0,children:(0,r.jsx)(E.Z,{variant:"outlined",children:(0,r.jsx)(I.Z,{style:{whiteSpace:"pre-wrap"},children:s})})}):"single"===(null===n||void 0===n?void 0:n.view)?(0,r.jsx)(d,{ampSDK:n}):"multi"===(null===n||void 0===n?void 0:n.view)?(0,r.jsx)(f,{ampSDK:n}):"tree"===(null===n||void 0===n?void 0:n.view)?(0,r.jsx)(j,{ampSDK:n}):"product"===(null===n||void 0===n?void 0:n.view)?(0,r.jsx)(ve,{ampSDK:n}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)("div",{children:"Loading View.."})]}),(0,r.jsx)("div",{className:"App",children:(0,r.jsxs)(o.Z,{spacing:0,sx:{width:"100%"},children:[(null===n||void 0===n?void 0:n.getTitle())&&(0,r.jsx)(p.Z,{variant:"body1",color:"#333333",children:null===n||void 0===n?void 0:n.getTitle()}),(null===n||void 0===n?void 0:n.getDescription())&&(0,r.jsx)(p.Z,{variant:"caption",color:"#808080",children:null===n||void 0===n?void 0:n.getDescription()}),((null===n||void 0===n?void 0:n.getDescription())||(null===n||void 0===n?void 0:n.getTitle()))&&(0,r.jsx)(Ze.Z,{sx:{marginTop:1,marginBottom:1},variant:"fullWidth"}),l]})})}}}]);